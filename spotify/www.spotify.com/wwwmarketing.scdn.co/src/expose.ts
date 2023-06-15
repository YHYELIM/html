export function expose(key, value) {
    var _a;
    if (typeof process !== 'undefined' && ((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.DEBUG) === 'true') {
        global[key] = value;
    }
}
//# sourceMappingURL=expose.js.map