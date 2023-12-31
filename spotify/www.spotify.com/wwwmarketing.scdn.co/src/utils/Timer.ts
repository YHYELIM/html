"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Timer = exports.getHighResolutionTime = exports.getLowResolutionTime = exports.getTime = exports.getBrowserTime = exports.supportsHighResolutionTime = void 0;
const Time_1 = require("./Time");
const SemanticMetrics_1 = require("../SemanticMetrics");
const supportsHighResolutionTime = () => {
    return typeof window === 'undefined' && typeof process.hrtime === 'function';
};
exports.supportsHighResolutionTime = supportsHighResolutionTime;
const getBrowserTime = () => {
    return typeof performance !== 'undefined' ? performance.now() : Date.now();
};
exports.getBrowserTime = getBrowserTime;
const getTime = () => {
    return exports.supportsHighResolutionTime() ? process.hrtime() : exports.getBrowserTime();
};
exports.getTime = getTime;
const getLowResolutionTime = (startTime) => {
    const millis = exports.getTime() - startTime;
    const time = Time_1.Time.fromMillis(millis);
    return {
        nanoseconds: SemanticMetrics_1.asNanoseconds(time.asNanos()),
        milliseconds: time.asMillis(),
        seconds: time.asSeconds(),
    };
};
exports.getLowResolutionTime = getLowResolutionTime;
const getHighResolutionTime = (startTime) => {
    const [diffSeconds, diffNanoseconds] = process.hrtime(startTime);
    const nanoseconds = diffSeconds * 1e9 + diffNanoseconds;
    const milliseconds = nanoseconds / 1e6;
    const seconds = nanoseconds / 1e9;
    return {
        nanoseconds: SemanticMetrics_1.asNanoseconds(nanoseconds),
        milliseconds,
        seconds,
    };
};
exports.getHighResolutionTime = getHighResolutionTime;
class Timer {
    constructor(startTime) {
        this.startTime = startTime;
    }
    static start() {
        return new Timer(exports.getTime());
    }
    end() {
        if (exports.supportsHighResolutionTime()) {
            return exports.getHighResolutionTime(this.startTime);
        }
        return exports.getLowResolutionTime(this.startTime);
    }
}
exports.Timer = Timer;
//# sourceMappingURL=Timer.js.map