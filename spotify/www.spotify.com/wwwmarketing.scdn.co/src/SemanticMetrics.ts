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
exports.sendMetric = exports.reportMetrics = exports.createSemanticMetrics = exports.asNanoseconds = exports.MetricTypes = void 0;
const isomorphic_logger_1 = __importDefault(require("@spotify-internal/isomorphic-logger"));
const Noop_1 = require("./reporters/Noop");
exports.MetricTypes = {
    COUNTER: 'counter',
    GAUGE: 'gauge',
    TIMER: 'timer',
};
function asNanoseconds(n) {
    return n;
}
exports.asNanoseconds = asNanoseconds;
const reportMetrics = (metrics, config) => __awaiter(void 0, void 0, void 0, function* () {
    if (Array.isArray(config.reporter)) {
        const reporterPromises = config.reporter.map(reporter => reporter.send(metrics));
        yield Promise.all(reporterPromises);
    }
    else {
        yield config.reporter.send(metrics);
    }
});
exports.reportMetrics = reportMetrics;
const createSemanticMetrics = (config) => {
    if (typeof config.dev !== 'undefined'
        ? config.dev
        : process.env &&
            (process.env.NODE_ENV === 'dev' ||
                process.env.NODE_ENV === 'development')) {
        config.reporter = new Noop_1.NoopReporter();
    }
    const Batching = {
        queue: [],
        timeout: undefined,
        flush() {
            return __awaiter(this, void 0, void 0, function* () {
                yield reportMetrics(this.queue, config);
                this.queue = [];
                this.timeout = undefined;
            });
        },
    };
    let isWindowUnloading = false;
    if (typeof config.batching === 'undefined') {
        config.batching = { delay: 4000 };
    }
    if (config.batching &&
        typeof window === 'object' &&
        typeof window.addEventListener === 'function') {
        window.addEventListener('beforeunload', () => {
            isWindowUnloading = true;
            Batching.flush();
        });
    }
    const sendMetric = (metric) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        const clonedMetric = Object.assign({}, metric);
        if (metric.tags) {
            clonedMetric.tags = Object.assign({}, metric.tags);
        }
        clonedMetric.key = clonedMetric.key || config.key;
        if (!clonedMetric.key) {
            throw new Error(`metric.key is required. Got: "${clonedMetric.key}". Set it in createSemanticMetrics(...) or pass it to sendMetric(...).`);
        }
        clonedMetric.tags = Object.assign({ app: (_a = config.app) !== null && _a !== void 0 ? _a : clonedMetric.key, application: (_b = config.app) !== null && _b !== void 0 ? _b : clonedMetric.key }, clonedMetric.tags);
        if (config.component_id) {
            clonedMetric.component_id =
                clonedMetric.component_id || config.component_id;
        }
        else {
            clonedMetric.component_id = config.key;
        }
        if (config.batching && !isWindowUnloading) {
            Batching.queue.push(clonedMetric);
            if (!Batching.timeout) {
                Batching.timeout = setTimeout(() => Batching.flush(), config.batching.delay);
            }
        }
        else {
            yield reportMetrics([clonedMetric], config);
        }
        return;
    });
    const flush = () => {
        if (config.batching) {
            return Batching.flush();
        }
        isomorphic_logger_1.default.warn('Manual flushing only supported in batch mode. Set config.batching: true');
        return Promise.resolve();
    };
    return {
        sendMetric,
        config,
        isWindowUnloading,
        flush,
    };
};
exports.createSemanticMetrics = createSemanticMetrics;
class SemanticMetricsSingleton {
    static init(config) {
        if (SemanticMetricsSingleton.config) {
            isomorphic_logger_1.default.error('SemanticMetrics has already been initialized. This may lead to dangerous side effects such as your metrics disappearing from Grafana due to the `key` value being overwritten by something else');
        }
        isomorphic_logger_1.default.warn('The singleton usage of SemanticMetrics will be deprecated. Please use createSemanticMetrics()');
        SemanticMetricsSingleton.config = config;
        const { sendMetric, isWindowUnloading } = createSemanticMetrics(config);
        SemanticMetricsSingleton.sendMetric = sendMetric;
        SemanticMetricsSingleton.isWindowUnloading = isWindowUnloading;
    }
}
exports.default = SemanticMetricsSingleton;
const sendMetricSingleton = (metric) => __awaiter(void 0, void 0, void 0, function* () {
    if (!SemanticMetricsSingleton.config) {
        throw new Error('SemanticMetrics has not been initialized. Call SemanticMetrics.init()');
    }
    return SemanticMetricsSingleton.sendMetric(metric);
});
exports.sendMetric = sendMetricSingleton;
//# sourceMappingURL=SemanticMetrics.js.map