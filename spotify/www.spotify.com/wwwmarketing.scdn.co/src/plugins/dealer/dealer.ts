import { EventEmitter } from '@spotify-internal/emitter';
import { createPromiseResolver, } from '@js-sdk/common/lib/promise_resolver';
import { DealerErrors } from './typedefs';
import { InternalSocketCode } from '../../enums/internal_socket_code';
import { DealerError } from './error';
import { DealerEvent } from './event';
const NOOP = function () { };
/**
 * Used to match the connection id from the Pusher URL returned by dealer.
 */
const CONNECTION_ID_EXP = /hm:\/\/pusher\/(?:[^]+)?\/connections\/([^]+)/;
/**
 * The amount of time in between heartbeats.
 */
const HEARTBEAT_INTERVAL = 30000;
/**
 * The amount of time to wait before triggering a heartbeat timeout.
 */
const HEARTBEAT_TIMEOUT = 10000;
const hasWindow = typeof window !== 'undefined';
/**
 * Interfaces with the Dealer messaging service.
 *
 * @param options - The options for this dealer instance.
 * @see https://ghe.spotify.net/messaging/dealer
 */
export class Dealer extends EventEmitter {
    constructor(options) {
        super();
        /**
         * A reference to the internal WebSocket connection to Dealer.
         */
        this._socket = null;
        /**
         * A deferred that is created in response to a request to ping the service.
         */
        this._lastPingDeferred = null;
        /**
         * A boolean flag that indicates whether we're waiting for a Connection Id.
         *
         * When set to true, the next "connection id" message will result in a similar event.
         */
        this._waitingForConnectionId = true;
        /**
         * The string connection id for the Dealer connection.
         */
        this._connectionId = null;
        /**
         * The string connection id uri for the Dealer connection.
         */
        this._connectionURI = null;
        /**
         * The setTimeout token used for the heartbeat.
         */
        this._heartbeatToken = 0;
        /**
         * The setTimeout token used for timing-out the heartbeat.
         */
        this._heartbeatTimeoutToken = 0;
        this._connected = false;
        this._endpoint = null;
        this._WebSocket = options.WebSocket || WebSocket;
        this._heartbeatTimeout = options.heartbeatTimeout || HEARTBEAT_TIMEOUT;
    }
    /**
     * Creates a new Dealer instance.
     *
     * @param options - The options for this dealer instance.
     * @returns The new Dealer instance.
     */
    static create(options) {
        return new Dealer(options);
    }
    _startHeartbeat(initial) {
        const heartbeat = () => {
            this.ping().then(() => this._onHeartbeatSuccess(), () => this._onHeartbeatError());
            this._heartbeatTimeoutToken = setTimeout(() => this._onHeartbeatError(), this._heartbeatTimeout);
        };
        if (initial) {
            heartbeat();
        }
        else {
            this._heartbeatToken = setTimeout(() => heartbeat(), HEARTBEAT_INTERVAL);
        }
    }
    _onHeartbeatError() {
        this._stopHeartbeat();
        if (!this._socket) {
            return;
        }
        this._socket.close(InternalSocketCode.TIMEOUT, 'internal-timeout');
    }
    _onHeartbeatSuccess() {
        this._stopHeartbeat();
        this._startHeartbeat();
    }
    _stopHeartbeat() {
        if (this._heartbeatToken !== null) {
            clearTimeout(this._heartbeatToken);
        }
        if (this._heartbeatTimeoutToken !== null) {
            clearTimeout(this._heartbeatTimeoutToken);
        }
    }
    /**
     * Parses a "connection id message" from Dealer.
     *
     * @param message - The message to parse.
     * @returns True if the message was successfully parsed, false otherwise.
     */
    _prepareConnectionId(message) {
        var _a;
        if (!message.uri) {
            return false;
        }
        const [, connectionId] = (_a = message.uri.match(CONNECTION_ID_EXP)) !== null && _a !== void 0 ? _a : [];
        if (!connectionId) {
            return false;
        }
        let id;
        if (message.headers && message.headers['Spotify-Connection-Id']) {
            // Header in ID is not URI encoded.
            id = message.headers['Spotify-Connection-Id'];
        }
        else {
            id = decodeURIComponent(connectionId);
        }
        this._connectionId = id;
        this._connectionURI = message.uri;
        this.emit(DealerEvent.CONNECTION_ID, { id: id, uri: message.uri });
        return true;
    }
    _reply(key, payload) {
        if (!key) {
            throw new TypeError('Invalid key.');
        }
        const socket = this._socket;
        if (!socket || socket.readyState !== 1) {
            return;
        }
        const msg = {
            type: 'reply',
            key: key,
            payload: payload,
        };
        socket.send(JSON.stringify(msg));
    }
    /**
     * Parses the actual message body from the internal WebSocket.
     *
     * @param data - A JSON-encoded string that contains the actual message data.
     */
    _parseMessage(data) {
        let msg;
        try {
            msg = JSON.parse(data);
        }
        catch (_a) {
            return;
        }
        if (msg.type === 'message') {
            if (this._waitingForConnectionId && this._prepareConnectionId(msg)) {
                this._waitingForConnectionId = false;
                this._startHeartbeat(true);
            }
            else {
                this.emit(DealerEvent.MESSAGE, { message: msg });
            }
        }
        else if (msg.type === 'pong' && this._lastPingDeferred) {
            this._lastPingDeferred.resolve(true);
            this._lastPingDeferred = null;
        }
        else if (msg.type === 'request') {
            const key = msg.key;
            if (key) {
                this.emit(DealerEvent.REQUEST, {
                    request: msg,
                    reply: this._reply.bind(this, key),
                });
            }
        }
    }
    /**
     * Handles the "open" event from the internal WebSocket.
     *
     * @param deferred - The deferred object that was created as part of the part
     *   of the authentication process.
     */
    _handleOpen(deferred) {
        deferred.resolve(true);
        this._connected = true;
        this.emit(DealerEvent.AUTHENTICATED, null);
    }
    /**
     * Handles a "message" from the internal WebSocket.
     *
     * @param ev - The "message" event.
     */
    _handleMessage(ev) {
        const _this = this;
        const data = ev.data;
        if (hasWindow && window.Blob && data instanceof window.Blob) {
            const fileReader = new FileReader();
            fileReader.onloadend = function () {
                if (!this.result) {
                    return;
                }
                let result;
                if (this.result instanceof ArrayBuffer) {
                    result = '';
                    const temp = new Uint8Array(this.result);
                    for (let i = 0; i < temp.length; i++) {
                        result += String.fromCharCode(temp[i]);
                    }
                }
                else {
                    result = this.result;
                }
                _this._parseMessage(result);
            };
            fileReader.readAsText(data);
        }
        else if (
        // @ts-ignore: We don't have @types/node anymore to prevent non es5 methods being used and
        // therefore don't have types defined for Buffer.
        typeof Buffer !== 'undefined' &&
            typeof ArrayBuffer !== 'undefined' &&
            data instanceof ArrayBuffer) {
            // @ts-ignore
            this._parseMessage(new Buffer(data).toString('ascii'));
        }
        else {
            this._parseMessage(data);
        }
    }
    /**
     * Handles a "close" event from the internal WebSocket.
     *
     * @param ev - The "close" event.
     */
    _handleClose(ev) {
        const wasConnected = this._connected;
        this._connected = false;
        if (!wasConnected) {
            // We had an error with authentication
            const error = new DealerError(DealerErrors.DEALER_AUTHENTICATION_FAILED, 'Dealer connection error', ev);
            this.emit(DealerEvent.AUTHENTICATION_FAILED, { error: error });
            return;
        }
        this.emitSync(DealerEvent.DISCONNECTED, {
            wsCode: ev.code,
            reason: ev.reason,
        });
    }
    /**
     * Handles the "error" event from the internal WebSocket.
     *
     * @param deferred - The deferred object that was created as part of the
     *   authentication process.
     */
    _handleError(deferred) {
        const error = new DealerError(DealerErrors.DEALER_CONNECTION_ERROR, 'Cannot connect to dealer');
        deferred.reject(error);
        this._connected = false;
        this.emit(DealerEvent.ERROR, { error: error });
    }
    /**
     * Connects the instance to the Dealer service.
     *
     * @param endpoint - The endpoint to connect to.
     * @returns A promise that will be resolved to true if the connection was successful.
     */
    connect(endpoint) {
        // Dealer expects the token to be either part of the UPGRADE request header or
        // as a query-string parameter. Since we cannot set headers in the browser, we
        // use the query-string option. Since the token is unknown at this point, we
        // simply save the endpoint and wait until `authenticate()` is called.
        this._endpoint = endpoint;
        this._waitingForConnectionId = true;
        this.emit(DealerEvent.CONNECTED, null);
        return Promise.resolve(true);
    }
    /**
     * Authenticates the instance to the Dealer service.
     *
     * @param token - The OAuth token that identifies the current user.
     * @returns A promise that will be resolved when the instance has been
     *   properly authenticated.
     */
    authenticate(token) {
        const deferred = createPromiseResolver();
        const endpoint = `${this._endpoint}?access_token=${token}`;
        const socket = (this._socket = new this._WebSocket(endpoint));
        socket.onopen = this._handleOpen.bind(this, deferred);
        socket.onclose = this._handleClose.bind(this);
        socket.onerror = this._handleError.bind(this, deferred);
        socket.onmessage = this._handleMessage.bind(this);
        return deferred.promise;
    }
    /**
     * Disconnects the instance from the Dealer service.
     */
    disconnect() {
        if (!this._socket) {
            return;
        }
        this._stopHeartbeat();
        this._waitingForConnectionId = true;
        this._connected = false;
        this._socket.close(InternalSocketCode.CLOSE, 'internal-close');
        this._socket.onopen = NOOP;
        this._socket.onerror = NOOP;
        this._socket.onmessage = NOOP;
        this._socket.onclose = NOOP;
        this._socket = null;
        this.emitSync(DealerEvent.DISCONNECTED, {
            wsCode: InternalSocketCode.CLOSE,
            reason: 'internal-close',
        });
    }
    /**
     * Sends a ping message to the Dealer instance.
     *
     * @returns A promise that will be resolved when the Dealer service returns a
     *   "pong" response.
     */
    ping() {
        if (!this._socket || this._socket.readyState !== 1) {
            return Promise.reject(new DealerError(DealerErrors.DEALER_CONNECTION_ERROR, 'Dealer connection error'));
        }
        this._lastPingDeferred = createPromiseResolver();
        this._socket.send('{"type":"ping"}');
        return this._lastPingDeferred.promise;
    }
    /**
     * Returns the Connection ID of the instance.
     *
     * @returns A promise that will be resolved with the instance's connection id.
     */
    getConnectionId() {
        if (this._waitingForConnectionId) {
            return new Promise((resolve) => {
                this.once(DealerEvent.CONNECTION_ID, (e) => {
                    resolve(e.data.id);
                });
            });
        }
        return Promise.resolve(this._connectionId);
    }
    /**
     * Returns an object with the connection id and the connection uri.
     *
     * @returns A promise that will be resolved with the instance's connection id
     *   and connection uri.
     */
    getConnectionInfo() {
        if (this._waitingForConnectionId) {
            return new Promise((resolve) => {
                this.once(DealerEvent.CONNECTION_ID, (e) => {
                    resolve({
                        id: e.data.id,
                        uri: e.data.uri,
                    });
                });
            });
        }
        return Promise.resolve({
            id: this._connectionId,
            uri: this._connectionURI,
        });
    }
    /**
     * Returns whether there's a connectionId.
     *
     * @returns True if the dealer instance has a connection id.
     */
    hasConnectionId() {
        return !this._waitingForConnectionId && !!this._connectionId;
    }
}
//# sourceMappingURL=dealer.js.map