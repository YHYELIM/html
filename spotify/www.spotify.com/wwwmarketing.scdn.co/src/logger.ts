import { debug } from 'debug';
export function createDebugLogger(namespace) {
    return debug(`remote-config:${namespace}`);
}
export function logDeveloperWarning(...args) {
    if (process.env.NODE_ENV === 'development') {
        console.warn(...args);
    }
}
export function swallowException(e) {
    logDeveloperWarning('Caught exception that would have been swallowed in production:', e);
}
//# sourceMappingURL=logger.js.map