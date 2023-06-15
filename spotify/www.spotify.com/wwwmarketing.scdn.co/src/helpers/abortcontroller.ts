import { EventEmitter } from '@spotify-internal/emitter';
export class AbortSignalMicrofill extends EventEmitter {
    constructor() {
        super();
        this._aborted = false;
        this.onabort = null;
        this.on('abort', () => { var _a; return (_a = this.onabort) === null || _a === void 0 ? void 0 : _a.call(this); });
    }
    /**
     * Returns a new AbortSignalMicrofill that is already in an aborted state.
     *
     * @returns A new AbortSignalMicrofill instance that is already in an aborted state.
     */
    static abort() {
        const signal = new AbortSignalMicrofill();
        signal._aborted = true;
        return signal;
    }
    /**
     * Non-standard method for aborting an AbortSignalLike.
     *
     * If the signal instance passed is an AbortSignalMicrofill, this function
     * will abort the signal and emit the event. Otherwise it'll be a noop.
     *
     * @param signal - Either an AbortSignalLike or an AbortSignalMicrofill instance.
     */
    static signalAbort(signal) {
        if ('_aborted' in signal && !signal._aborted) {
            signal._aborted = true;
            signal.emit('abort', null);
        }
    }
    get aborted() {
        return this._aborted;
    }
    set aborted(_value) { }
    addEventListener(type, listener) {
        this.addListener(type, listener);
    }
    removeEventListener(type, listener) {
        this.removeListener(type, listener);
    }
    dispatchEvent() { }
}
/**
 * A small AbortController polyfill that implements the AbortControllerLike interface.
 */
export class AbortControllerMicrofill {
    constructor() {
        /**
         * Returns the AbortSignal object associated with this object.
         */
        this.signal = new AbortSignalMicrofill();
    }
    /**
     * Invoking this method will set this object's AbortSignal's aborted flag and
     * signal to any observers that the associated activity is to be aborted.
     */
    abort() {
        const signal = this.signal;
        AbortSignalMicrofill.signalAbort(signal);
    }
}
/**
 * Returns whether the platform has a native AbortController.
 *
 * @returns True if the platform has a native AbortController, false otherwise.
 */
export function hasNativeAbortController() {
    return (typeof window !== 'undefined' &&
        typeof window.AbortController === 'function');
}
/**
 * Returns a Transport compatible AbortControllerLike object.
 *
 * @returns For platforms that natively support AbortController, this will
 *   return a native AbortController object. Otherwise, this will return a
 *   compatible AbortController microfill.
 */
export const createAbortControllerLike = hasNativeAbortController()
    ? () => new AbortController()
    : () => new AbortControllerMicrofill();
/**
 * Takes in multiple signals and combines them into a single signal that will be
 * aborted if any of the provided signals are aborted.
 *
 * @param signals - An array of signals to observe.
 * @returns A new signal that would be aborted if any of the provided signals are aborted.
 */
export function raceSignals(signals) {
    const controller = createAbortControllerLike();
    // Operate on a copy of the signals to ensure that changes to the array
    // argument do not change the function.
    const _signals = [...signals];
    const onAbort = () => {
        // Clean up all listeners.
        for (const signal of _signals) {
            signal.removeEventListener('abort', onAbort);
        }
        controller.abort();
    };
    for (const signal of [...signals]) {
        signal.addEventListener('abort', onAbort);
    }
    return controller.signal;
}
//# sourceMappingURL=abortcontroller.js.map