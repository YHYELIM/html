"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSenderReporter = void 0;
const event_sender_1 = require("@spotify-internal/event-sender");
const createSemanticMetricClient_1 = require("@spotify-internal/event-definitions/es5/events/createSemanticMetricClient");
const createSemanticMetricClientNonAuth_1 = require("@spotify-internal/event-definitions/es5/events/createSemanticMetricClientNonAuth");
const isomorphic_logger_1 = __importDefault(require("@spotify-internal/isomorphic-logger"));
const transport_1 = require("@spotify-internal/transport");
const constants_1 = require("../constants");
function getEventCreator(transport) {
    return (metric) => {
        return transport.isAuthenticated()
            ? createSemanticMetricClient_1.createSemanticMetricClient(metric)
            : createSemanticMetricClientNonAuth_1.createSemanticMetricClientNonAuth(metric);
    };
}
class EventSenderReporter {
    constructor(eventSender, createEvent, environment = 'browser', transport) {
        this.eventSender = eventSender;
        this.createEvent = createEvent;
        this.environment = environment;
        this.transport = transport;
    }
    static create(config) {
        const getToken = 'getToken' in config ? config.getToken : null;
        const ownerProvider = 'ownerProvider' in config ? config.ownerProvider : null;
        const context = config.context ? [...config.context] : undefined;
        const environment = config.environment;
        const transport = transport_1.createBaseTransport({
            providers: {
                endpoints: (() => {
                    const xresolveProvider = transport_1.createXResolveProvider();
                    return (publicTransport) => __awaiter(this, void 0, void 0, function* () {
                        const endpoints = yield xresolveProvider(publicTransport);
                        return Object.assign(Object.assign({}, endpoints), (config.internal && { webgate: constants_1.INTERNAL_WEBGATE_URL }));
                    });
                })(),
                token: () => new Promise(resolve => {
                    if (!getToken) {
                        resolve('');
                        return;
                    }
                    getToken((token, ttl) => {
                        if (typeof ttl !== 'undefined') {
                            resolve([token, ttl]);
                            return;
                        }
                        resolve(token);
                    });
                }),
            },
        });
        if (getToken) {
            transport.on(transport_1.TransportEvent.CONNECTED, () => {
                transport.authenticate().catch(error => {
                    var _a, _b;
                    isomorphic_logger_1.default.debug(`authentication fail.`, (_b = (_a = error === null || error === void 0 ? void 0 : error.message) !== null && _a !== void 0 ? _a : error === null || error === void 0 ? void 0 : error.code) !== null && _b !== void 0 ? _b : '');
                });
            });
            transport.on(transport_1.TransportEvent.AUTHENTICATED, () => {
                isomorphic_logger_1.default.debug('created authenticated browser transport');
            });
            transport.on(transport_1.TransportEvent.TOKEN_PROVIDER_ERROR, () => {
                isomorphic_logger_1.default.debug(`the token provided isn't working.`);
            });
        }
        transport.connect();
        const eventSender = event_sender_1.createEventSender(Object.assign({ transport,
            context }, (ownerProvider && { ownerProvider })));
        const createEvent = getEventCreator(transport);
        return new EventSenderReporter(eventSender, createEvent, environment, transport);
    }
    static createWithCustomTransport(config) {
        const ownerProvider = 'ownerProvider' in config ? config.ownerProvider : null;
        const context = config.context ? [...config.context] : undefined;
        const eventSender = event_sender_1.createEventSender(Object.assign({ transport: config.transport, context }, (ownerProvider && { ownerProvider })));
        const createEvent = getEventCreator(config.transport);
        return new EventSenderReporter(eventSender, createEvent, config.environment, config.transport);
    }
    send(metrics) {
        return __awaiter(this, void 0, void 0, function* () {
            for (const metric of metrics) {
                const clonedMetric = Object.assign({}, metric);
                clonedMetric.tags = Object.assign({}, clonedMetric.tags);
                if (clonedMetric.tags.environment) {
                    isomorphic_logger_1.default.error('`tags.environment` must not be set. It is a reserved tag and will be overwritten.');
                }
                clonedMetric.tags.environment = this.environment;
                const event = this.createEvent(Object.assign({}, clonedMetric));
                this.eventSender.send(event, {
                    flush: false,
                });
            }
            return this.eventSender.flush(this.transport.isAuthenticated());
        });
    }
}
exports.EventSenderReporter = EventSenderReporter;
//# sourceMappingURL=EventSender.js.map