"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginEvent = void 0;
var PluginEvent;
(function (PluginEvent) {
    /**
     * Emitted when the Transport instance has started authenticating.
     *
     * Plugins should use this event to add hooks on their authentication process.
     */
    PluginEvent["TRANSPORT_AUTHENTICATE"] = "transport_authenticate";
    /**
     * Emitted when the Transport instance has started connecting.
     *
     * Plugins should use this event to add hooks for their connection process.
     */
    PluginEvent["TRANSPORT_CONNECT"] = "transport_connect";
    /**
     * Emitted when the Transport instance has been disconnected.
     */
    PluginEvent["TRANSPORT_DISCONNECT"] = "transport_disconnect";
    /**
     * Emitted when the Transport instance has received the endpoints from the
     * EndpointsProvider.
     */
    PluginEvent["TRANSPORT_ENDPOINTS_RESOLVED"] = "transport_endpoints_resolved";
    /**
     * Emitted when the Transport instance's `request()` method is called, but
     * before it has started to process the request.
     *
     * Plugins can use this event to modify the request URI or options prior to
     * Transport processing the request.
     */
    PluginEvent["TRANSPORT_BEFORE_PROCESS_REQUEST"] = "transport_before_process_request";
    /**
     * Emitted before the Transport instance sends a request.
     */
    PluginEvent["TRANSPORT_BEFORE_SEND_REQUEST"] = "transport_before_send_request";
    /**
     * Emitted when the Transport instance receives the response to a request but
     * before returning the response to the caller..
     */
    PluginEvent["TRANSPORT_BEFORE_RETURN_RESPONSE"] = "transport_before_return_response";
    /**
     * Emitted when the Transport instance sends a request.
     *
     * NOTE: Currently unimplemented
     */
    PluginEvent["TRANSPORT_REQUEST"] = "transport_request";
    /**
     * Emitted by a plugin when it receives its connection info.
     */
    PluginEvent["PLUGIN_CONNECTION_INFO"] = "plugin_connection_info";
    /**
     * Emitted by the plugin when it gets disconnected.
     */
    PluginEvent["PLUGIN_DISCONNECTED"] = "plugin_disconnected";
    /**
     * Emitted by the plugin when it receives a message.
     */
    PluginEvent["PLUGIN_MESSAGE"] = "plugin_message";
    /**
     * Emitted by the plugin when it receives a request.
     */
    PluginEvent["PLUGIN_REQUEST"] = "plugin_request";
})(PluginEvent = exports.PluginEvent || (exports.PluginEvent = {}));
//# sourceMappingURL=plugin_event.js.map