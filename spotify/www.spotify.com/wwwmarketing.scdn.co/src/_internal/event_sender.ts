import { Backoff } from '@js-sdk/backoff';
import { logging } from '@js-sdk/debug-tools';
import { TransportEvent } from '@spotify-internal/transport';
import { EventEmitter } from '@spotify-internal/emitter';
import { createRejectedClientEventNonAuth } from '@spotify-internal/event-definitions/es5/events/createRejectedClientEventNonAuth';
import { UploadEvent as EventSenderEvent } from '../enums/upload_event';
import { RejectReason } from '../enums/reject_reason';
import sdkVersion from '../version';
import StatsSender from './stats_sender';
import { SequenceIdGenerator } from './sequenceid_generator';
import { byteLength } from './byte_length';
const DEFAULT_BACKOFF_TIME_SETTINGS = {
    baseTime: 200,
    ceiling: 300000,
    maxDuration: 1800000,
};
export const ESS_FLUSH_INTERVAL = 5 * 60 * 1000;
export { EventSenderEvent };
/**
 * `EventSender` instance for events logging.
 */
export class EventSender extends EventEmitter {
    /**
     * Create a new EventSender instance.
     *
     * @param options - The EventSender options.
     */
    constructor(options) {
        super();
        this._sequenceIdGenerator = SequenceIdGenerator.create();
        this._statsSender = new StatsSender();
        this._instanceContexts = {};
        this._transport = options.transport;
        this._ownerProvider = options.ownerProvider;
        this._events = {
            authorized: [],
            unauthorized: [],
        };
        this._uploaders = options.uploaders;
        this._ongoingUploads = {
            authorized: false,
            unauthorized: false,
        };
        this._uploadWaiting = {
            authorized: false,
            unauthorized: false,
        };
        this._backoffTimeSettings = Object.assign(Object.assign({}, DEFAULT_BACKOFF_TIME_SETTINGS), options.backoffTimeOverrides);
        this.upload = this.upload.bind(this);
        this._essLastSent = null;
        const _isBrowser = typeof window !== 'undefined' &&
            typeof window.addEventListener === 'function';
        if (_isBrowser && !options.disableBeforeUnloadListener) {
            window.addEventListener('beforeunload', this.onBeforeDisconnect.bind(this));
        }
        this.initializeContexts(options.context);
        const proxyEventNameMap = {
            [EventSenderEvent.UPLOAD_SUCCEEDED]: EventSenderEvent.UPLOAD_SUCCEEDED,
            [EventSenderEvent.UPLOAD_FAILED]: EventSenderEvent.UPLOAD_FAILED,
            [EventSenderEvent.UPLOAD_REQUEST_FAILED]: EventSenderEvent.UPLOAD_REQUEST_FAILED,
        };
        this.proxyEmitAll(this._uploaders.authorized, proxyEventNameMap);
        this.proxyEmitAll(this._uploaders.unauthorized, proxyEventNameMap);
    }
    /**
     * Handler for flushing remaining events with a best-effort approach.
     *
     */
    onBeforeDisconnect() {
        this.uploadFlush();
    }
    /**
     * Attempts to upload the (max 100) unsent authorized events, and the (max 100) unsent
     * unauthorized events.
     *
     * @return A promise that resolves with true if the upload was successful.
     */
    uploadFlush() {
        return Promise.all([
            this._uploaders.authorized.lastUpload(this._events.authorized.splice(0)),
            this._uploaders.unauthorized.lastUpload(this._events.unauthorized.splice(0)),
        ])
            .then(([result1, result2]) => result1 && result2)
            .catch(() => false);
    }
    /**
     * Creates the contexts for the current instance.
     *
     * @param providers - The context providers for this instance.
     */
    initializeContexts(providers) {
        if (!(providers === null || providers === void 0 ? void 0 : providers.length)) {
            return;
        }
        const instanceContexts = this._instanceContexts;
        for (const provider of providers) {
            const context = provider();
            if (!(context === null || context === void 0 ? void 0 : context.name)) {
                continue;
            }
            instanceContexts[context.name] = context.data;
        }
    }
    /**
     * Start the backoff sequence to upload the events.
     *
     * @param type - Type of events to flush (authorized or unauthorized)
     * @return A promise that is fulfilled with the response when upload has
     * finished.
     */
    initFlush(type) {
        const shouldBackoff = this._uploaders[type].shouldBackoff();
        const { ceiling, maxDuration, baseTime } = this._backoffTimeSettings;
        return Backoff.init(() => this.upload(type), {
            curve: 'exponential',
            backoffInitial: shouldBackoff,
            retryPredicate: () => this._transport.isOnline(),
            ceiling,
            baseTime: shouldBackoff ? ceiling : baseTime,
            maxDuration,
        });
    }
    /**
     * Wait for connection to become online.
     *
     * @return A promise that is fulfilled when the connection is online.
     */
    waitForConnection() {
        return new Promise((resolve) => {
            this._transport.once(TransportEvent.CONNECTION_ONLINE, () => resolve());
        });
    }
    /**
     * Upload all authorized or unauthorized events that have not yet been
     * uploaded to the endpoint.
     *
     * @param type - Type of events to flush (authorized or unauthorized)
     * @return A promise that is fulfilled with upload status when upload has
     * finished.
     */
    upload(type) {
        return this._uploaders[type]
            .upload(this._events[type].splice(0))
            .then((response) => {
            if (response.nack.length) {
                this._events[type] = response.nack.concat(this._events[type]);
                throw new Error('Backoff requested');
            }
            return response;
        });
    }
    /**
     * Flush any not yet flushed events to the event delivery service.
     *
     * @param authorize - Whether to flush authorized (true) or
     * unauthorized (false) events.
     *
     * @return A promise that is fulfilled when upload has finished.
     */
    sendToGabito(authorize) {
        const type = authorize ? 'authorized' : 'unauthorized';
        // When not connected
        if (!this._transport.isOnline()) {
            if (!this._ongoingUploads[type]) {
                // Fake ongoing upload to be resolved when there is a connection
                this._ongoingUploads[type] = this.waitForConnection();
            }
        }
        const ongoingUpload = this._ongoingUploads[type];
        // When another upload is already ongoing, queue the flush
        if (ongoingUpload) {
            // but only if there isn't already a queued flush
            if (!this._uploadWaiting[type]) {
                this._uploadWaiting[type] = true;
                this._ongoingUploads[type] = ongoingUpload.then(() => {
                    this._ongoingUploads[type] = false;
                    this._uploadWaiting[type] = false;
                    return this.sendToGabito(authorize);
                });
            }
            return this._ongoingUploads[type];
        }
        // When there are no events to upload
        if (!this._events[type].length) {
            return Promise.resolve({
                nack: this._events[type],
                backoff: this._uploaders[type].shouldBackoff(),
            });
        }
        // Send ESS at first flush, and then periodically
        if (!this._essLastSent ||
            Date.now() - this._essLastSent.getTime() > ESS_FLUSH_INTERVAL) {
            const essEventBatch = [
                this.makeEvent(this._statsSender.createESSEvent(this._events, this._sequenceIdGenerator.getAllSequenceNumberCounters(), this._sequenceIdGenerator.getSequenceId())),
            ];
            this._uploaders.unauthorized.upload(essEventBatch).finally(() => {
                this._essLastSent = new Date();
            });
        }
        const initFlushResponse = this.initFlush(type)
            .then((response) => {
            this._ongoingUploads[type] = false;
            return response;
        })
            .catch(() => {
            this._ongoingUploads[type] = false;
            if (!this._transport.isOnline()) {
                return this.sendToGabito(authorize);
            }
            EventSender.consoleLogger.warn(`The events in the queue could not be uploaded. Throwing away ${this._events[type].length} ${type} events.`);
            this._events[type] = [];
            return {
                nack: this._events[type],
                backoff: this._uploaders[type].shouldBackoff(),
            };
        });
        this._ongoingUploads[type] = initFlushResponse;
        return initFlushResponse;
    }
    /**
     * push the event to unauthorized or authorized batch
     *
     * @param authorize - Whether to flush authorized (true) or
     * unauthorized (false) events.
     *
     * @param eventData - the EventData to make into an Event
     */
    storeEvent(authorize, eventData) {
        const event = this.makeEvent(eventData);
        this._events[authorize ? 'authorized' : 'unauthorized'].push(event);
    }
    /**
     * create an Event from eventData
     *
     * @param eventData - The EventData to be logged.
     *
     * @return the event (wrapped for consumption by the backend)
     */
    // When deleting _, I had to rename the event because сreateEvent name
    // is already taken for some reason.
    makeEvent(eventData) {
        const sequenceIdGenerator = this._sequenceIdGenerator;
        const event = {
            sequence_id: sequenceIdGenerator.getSequenceId(),
            sequence_number: sequenceIdGenerator.nextSequenceNumber(eventData.name),
            event_name: eventData.name,
            fragments: Object.assign(Object.assign({ 
                // Default Contexts
                context_sdk: {
                    version_name: sdkVersion.version,
                    type: 'javascript',
                }, context_time: {
                    timestamp: Date.now(),
                } }, this._instanceContexts), { 
                // Actual event data payload
                message: eventData.data }),
        };
        return event;
    }
    /**
     * validates the event. Will return a RCENA event if any validation fails,
     * and a normal event if it succeeds.
     *
     * @param eventData - The event data
     * @param isAuthenticated - If set to true, the event will be sent as an authorized event.
     * @param [ownerProvider] - Optional function to provide event owner
     * @return The RejectReason or null
     */
    validateEventData(eventData, isAuthenticated, ownerProvider) {
        let rejectReason = null;
        if (!eventData.name) {
            // No event name
            rejectReason = RejectReason.INVALID_NAME;
        }
        else if (byteLength(JSON.stringify(eventData.data)) > 5000) {
            // Big event
            rejectReason = RejectReason.PAYLOAD_SIZE_LIMIT_EXCEEDED;
        }
        else if (isAuthenticated && ownerProvider && !ownerProvider()) {
            // No owner
            return RejectReason.UNKNOWN_OWNER;
        }
        if (rejectReason) {
            return rejectReason;
        }
        return null;
    }
    /**
     * Check if the event is auth or not.
     *
     * @param eventName - name of the event
     *
     * @return A bool value means the event is authorized or not.
     */
    checkIsEventAuthorized(eventName) {
        return !eventName.endsWith('NonAuth');
    }
    /**
     * Persist any not yet persisted events to the event delivery service.
     *
     * @param authorize - Whether to flush authorized (true) or
     * unauthorized (false) events. Defaults to true.
     *
     * @return A promise that is fulfilled when upload has finished.
     */
    flush(authorize = true) {
        return this.sendToGabito(authorize)
            .then(() => undefined)
            .catch(() => undefined);
    }
    /**
     * Persist any not yet persisted events to the event delivery service, both
     * from the authorized and unauthorized caches.
     *
     * @return A promise that is fulfilled when the uploads have finished.
     */
    flushAll() {
        return Promise.all([this.sendToGabito(true), this.sendToGabito(false)])
            .then(() => undefined)
            .catch(() => undefined);
    }
    /**
     * Make a best-effort attempt to flush all events that have not yet been
     * logged to the endpoints. If the access token is not valid at this point,
     * the flush will fail resulting in that the events are thrown away.
     *
     * Call this function before shutting down the application.
     *
     * The Sequence Id and the Sequence Numbers will have been renewed in future
     * logging.
     *
     * This function should be called before the user state in the client changes,
     * for example when the user logs out, or when new user logs in.
     *
     * @return A Promise<true|false>: true = flush succeeded, false = flush failed
     */
    finalFlush() {
        return this.uploadFlush();
    }
    /**
     * Deprecated. Use .send() instead.
     *
     * Log an event to the event delivery endpoint. The event needs to be
     * defined in event-definitions
     *
     * @deprecated - Use .send()
     * @param event - The event to be logged.
     * @param options - Options for the event logging.
     */
    log(event, options = {}) {
        this.send(event, options);
    }
    /**
     * Send an event to the event delivery endpoint. The event needs to be
     * defined in event-definitions
     *
     * @param eventData - The event to be logged.
     * @param options - Options for the event logging.
     * @param options.flush - If set to true, the event will be immediately queued
     * for uploading.
     * @return A promise that resolves when a validated event is added to the queue or flush is done,
     * or is rejected if the event fails validation and is instead queued as a RCENA.
     */
    send(eventData, { flush = true } = {}) {
        const isAuthenticated = this.checkIsEventAuthorized(eventData.name);
        let rejectReason = this.validateEventData(eventData, isAuthenticated, this._ownerProvider);
        if (rejectReason === RejectReason.UNKNOWN_OWNER) {
            // Special handling for now, to avoid breaking clients until we can make a breaking version change
            EventSender.consoleLogger.warn(`Trying to send an authenticated event without a current owner: ${eventData.name}`);
            rejectReason = null;
        }
        if (!rejectReason) {
            // Create a normal event
            this.storeEvent(isAuthenticated, eventData);
        }
        else {
            // Create a RCENA event
            const rejectedEvent = createRejectedClientEventNonAuth({
                event_name: eventData.name,
                reject_reason: rejectReason,
            });
            this.storeEvent(false, rejectedEvent);
            return Promise.reject(
            // Promise is rejected if forced to send RCENA
            new TypeError(`The event is invalid and has been rejected for reason: ${rejectReason}`));
        }
        if (flush) {
            return this.flush(isAuthenticated);
        }
        // A normal event being sent successfully resolves the promise.
        return Promise.resolve();
    }
    /**
     * Checks whether the provided context name is present in this instance.
     *
     * @param contextName - The context name.
     * @return True if context presents in this instance.
     */
    hasContext(...contextName) {
        return contextName.every((name) => !!this._instanceContexts[name]);
    }
}
EventSender.consoleLogger = logging.forTag('EventSender');
//# sourceMappingURL=event_sender.js.map