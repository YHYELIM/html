"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestTransformerCreator = exports.REQUEST_TRANSFORMER_PLUGIN_NAME = void 0;
var tslib_1 = require("tslib");
var plugin_event_1 = require("../../enums/plugin_event");
exports.REQUEST_TRANSFORMER_PLUGIN_NAME = 'request-transformer';
var RequestTransformer = /** @class */ (function () {
    function RequestTransformer(options) {
        this.name = exports.REQUEST_TRANSFORMER_PLUGIN_NAME;
        this._uriTransformer = options.uriTransformer;
        this._optionsOverrides = options.optionsOverrides;
        this._include = options.include;
        // Rebind
        this._processRequest = this._processRequest.bind(this);
    }
    RequestTransformer.prototype._processRequest = function (ev) {
        var _a, _b;
        var requestData = ev.data;
        if (((_b = (_a = requestData.options) === null || _a === void 0 ? void 0 : _a.metadata) === null || _b === void 0 ? void 0 : _b.noRequestTransform) ||
            (this._include && !this._include(requestData.uri, requestData.options))) {
            return;
        }
        // If there is a URI Transformer, we pass the original URI to get the
        // new Transformed URI.
        if (this._uriTransformer) {
            requestData.uri = this._uriTransformer(requestData.uri);
        }
        var optionsOverrides = this._optionsOverrides;
        if (optionsOverrides) {
            if (!requestData.options) {
                // If there are no request options, we just used the defaults defined
                // here.
                requestData.options = optionsOverrides;
            }
            else {
                // We need to merge the two options.
                var mergedOptions = tslib_1.__assign(tslib_1.__assign(tslib_1.__assign({}, requestData.options), optionsOverrides), { 
                    // Then merge any object options
                    metadata: tslib_1.__assign(tslib_1.__assign({}, requestData.options.metadata), optionsOverrides.metadata), retry: tslib_1.__assign(tslib_1.__assign({}, requestData.options.retry), optionsOverrides.retry), headers: tslib_1.__assign(tslib_1.__assign({}, requestData.options.headers), optionsOverrides.headers) });
                requestData.options = mergedOptions;
            }
        }
    };
    RequestTransformer.prototype.attach = function (_t, m) {
        m.on(plugin_event_1.PluginEvent.TRANSPORT_BEFORE_PROCESS_REQUEST, this._processRequest);
    };
    RequestTransformer.prototype.detach = function (_t, m) {
        m.removeListener(plugin_event_1.PluginEvent.TRANSPORT_BEFORE_PROCESS_REQUEST, this._processRequest);
    };
    return RequestTransformer;
}());
/**
 * Creates a new RequestTransformer plugin.
 *
 * This function should be passed to `transport.addPlugin()` directly.
 *
 * @param _t - The Transport instance.
 * @param options - The options for the plugin.
 * @return A RequestTransformer plugin instance.
 */
function requestTransformerCreator(_t, options) {
    return new RequestTransformer(options);
}
exports.requestTransformerCreator = requestTransformerCreator;
//# sourceMappingURL=index.js.map