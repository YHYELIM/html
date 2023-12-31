/**
 * Error codes of all errors thrown by Transport.
 */
export var TransportErrors;
(function (TransportErrors) {
    /**
     * Throw when a request was aborted.
     */
    TransportErrors["HTTP_REQUEST_ABORTED"] = "HTTP_REQUEST_ABORTED";
    /**
     * Thrown when an error occurs during the sending of an HTTP request.
     */
    TransportErrors["HTTP_REQUEST_FAILED"] = "HTTP_REQUEST_FAILED";
    /**
     * Indicates an error when sending a log via the Melody logging endpoints.
     */
    TransportErrors["LOGGING_REQUEST_FAILED"] = "LOGGING_REQUEST_FAILED";
    /**
     * Thrown when the application provided EndpointsProvider throws an error.
     */
    TransportErrors["TRANSPORT_ENDPOINTS_PROVIDER_ERROR"] = "TRANSPORT_ENDPOINTS_PROVIDER_ERROR";
    /**
     * Thrown when a lifecycle method on Transport is called in the wrong part of
     * the lifecycle, such as calling authenticate() before calling connect().
     */
    TransportErrors["TRANSPORT_INVALID_STATE"] = "TRANSPORT_INVALID_STATE";
    /**
     * Thrown when the TokenProvider returns an invalid (empty or null) token.
     */
    TransportErrors["TRANSPORT_INVALID_TOKEN"] = "TRANSPORT_INVALID_TOKEN";
    /**
     * Thrown when the TokenProvider returns the same token twice.
     */
    TransportErrors["TRANSPORT_STALE_TOKEN"] = "TRANSPORT_STALE_TOKEN ";
    /**
     * Thrown when the TokenProvider error throws an error.
     */
    TransportErrors["TRANSPORT_TOKEN_PROVIDER_ERROR"] = "TRANSPORT_TOKEN_PROVIDER_ERROR";
    /**
     * Thrown by a Transport-based library when calling library-provided lifecycle
     * methods on an injected Transport instance.
     */
    TransportErrors["TRANSPORT_LIFECYCLE_DISABLED"] = "TRANSPORT_LIFECYCLE_DISABLED";
    /**
     * Thrown when an unsupported set of options is passed to Transport.
     */
    TransportErrors["TRANSPORT_UNSUPPORTED_OPTION"] = "TRANSPORT_UNSUPPORTED_OPTION";
    /**
     * Thrown by the XResolve EndpointsProvider when XResolve returns a response
     * that is incomplete.
     */
    TransportErrors["XRESOLVE_INCOMPLETE_RESPONSE"] = "XRESOLVE_INCOMPLETE_RESPONSE";
    /**
     * Thrown by the XResolve EndpointsProvider when XResolve returns a response
     * that is invalid.
     */
    TransportErrors["XRESOLVE_INVALID_RESPONSE"] = "XRESOLVE_INVALID_RESPONSE";
    /**
     * Thrown when the request to the APResolve service inside the XResolve
     * EndpointsProvider fails.
     */
    TransportErrors["XRESOLVE_REQUEST_FAILED_WITH_STATUS"] = "XRESOLVE_REQUEST_FAILED_WITH_STATUS";
})(TransportErrors || (TransportErrors = {}));
//# sourceMappingURL=errors.js.map