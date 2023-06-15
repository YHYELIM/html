import { logging } from '@js-sdk/common/lib/debug_tools';
import { AllowsPayload } from '../../enums/allows_payload';
import { TransportErrors } from '../../enums/errors';
import { StatusCode } from '../../enums/status_code';
import { RequestAbortedError, RequestError } from '../../error/request';
import { HTTPResponse } from '../response';
import { XHRHeaders } from './headers';
const debugLogger = logging.forTag('transport.http.xhr');
const NOOP = function () { };
/**
 * An map of all responseType values that can be polyfilled in case the browser
 * does not support XHR2.
 */
const PolyfilledResponseTypes = {
    json: true,
    text: true,
    document: true,
};
/**
 * Handles the loadend and abort events from an XMLHttpRequest.
 *
 * The loadend event is emitted after each request, regardless of whether the
 * request was successful or not. The abort event is emitted when the request is
 * explicitly aborted.
 *
 * @param this - This function must be bound to an XMLHttpRequest instance.
 */
function handleEnd() {
    this.onabort = NOOP;
    this.onerror = NOOP;
    this.onload = NOOP;
    this.onloadend = NOOP;
}
/**
 * Handles the load event from an XMLHttpRequest.
 *
 * The load event is only emitted for successful requests (i.e, requests that
 * did not generate a 0 status).
 *
 * @param this - This function must be bound to an XMLHttpRequest instance.
 * @param httpRequest - The request that was sent.
 * @param requestStartTime - The start time of the request, used to calculated
 *   timing values.
 * @param resolve - A promise resolver function.
 */
function handleLoad(httpRequest, requestStartTime, resolve) {
    var _a, _b;
    if ((_a = httpRequest.options.signal) === null || _a === void 0 ? void 0 : _a.aborted) {
        return;
    }
    const requestEnd = Date.now();
    const status = this.status;
    const response = new HTTPResponse(this.responseURL || httpRequest.url, status);
    response.body = null;
    const requestOptions = httpRequest.options;
    if (requestOptions.timing) {
        response.timing = { completed: requestEnd - requestStartTime };
    }
    if ((_b = requestOptions.connectionObserver) === null || _b === void 0 ? void 0 : _b.isOnline) {
        response.offline = !requestOptions.connectionObserver.isOnline();
    }
    if (requestOptions.parseResponseHeaders || status > 299) {
        // Parse headers
        response.headers = new XHRHeaders(this.getAllResponseHeaders());
    }
    if (!requestOptions.ignoreResponseBody && status !== StatusCode.NO_CONTENT) {
        // Response parsing
        const expectedResponseType = requestOptions.responseType || '';
        if (!requestOptions.forcePolyfill &&
            'response' in this &&
            expectedResponseType === this.responseType) {
            response.body = this.response;
        }
        else if (expectedResponseType === 'document') {
            // Parsed XML.
            response.body = this.responseXML;
        }
        else if (expectedResponseType === 'json') {
            try {
                response.body = JSON.parse(this.responseText);
            }
            catch (err) {
                debugLogger.warn('Could not parse response as JSON:', err);
                // Mirror the behaviour of the this.response property: if responseType
                // is set to 'json' and the response body is not a valid JSON value,
                // return null.
                response.body = null;
            }
        }
        else if (expectedResponseType === 'text' || expectedResponseType === '') {
            // Catches responseType === 'text' as well.
            response.body = this.responseText;
        }
    }
    resolve(response);
}
/**
 * Handles the error event from an XMLHttpRequest.
 *
 * @param this - This function must be bound to an XMLHttpRequest instance.
 * @param url - The URL of the request.
 * @param resolve - A promise resolver function.
 * @param reject - A project rejection function.
 */
function handleError(url, resolve, reject) {
    if (this.readyState === 4) {
        // The request completed, but it did not complete successfully, most likely
        // due to a CORS error or the browser being offline.
        resolve(new HTTPResponse(this.responseURL || url, this.status));
    }
    else {
        reject(new RequestError(TransportErrors.HTTP_REQUEST_FAILED, 'Request cannot be completed.', this.status));
    }
}
/**
 * Sends an HTTP Request using XMLHttpRequest.
 *
 * @param httpRequest - The request to send.
 * @returns A promise that will be resolved with the response object.
 */
function performXHRRequest(httpRequest) {
    const signal = httpRequest.options.signal;
    return new Promise((resolve, reject) => {
        if (signal === null || signal === void 0 ? void 0 : signal.aborted) {
            reject(new RequestAbortedError());
            return;
        }
        const xhr = new XMLHttpRequest();
        let url = httpRequest.url;
        if (!url) {
            reject(new TypeError('Request URL cannot be blank.'));
            return;
        }
        // Set body
        let sendParams = null;
        const method = httpRequest.method || 'GET';
        const payload = httpRequest.payload || '';
        if (method in AllowsPayload && payload) {
            // The method can accept bodies, so we will send the payload using the
            // send() method.
            sendParams = payload;
        }
        else if (payload) {
            // The method does not allow a body, so we'll set the payload as a
            // query-string parameter.
            url += `?${payload}`;
        }
        xhr.open(method, url, true);
        // Set Event Handlers, except onload, which we will set before sending the
        // request.
        xhr.onerror = handleError.bind(xhr, url, resolve, reject);
        xhr.onabort = handleEnd;
        xhr.onloadend = handleEnd;
        xhr.onprogress = NOOP;
        const requestOptions = httpRequest.options;
        // We only need to set withCredentials to true if the credentials
        // option is set to `include`. If it's set to `'omit'` we don't need
        // to do anything as withCredentials is off by default. If it's set to
        // `same-origin` we don't need to do anything as withCredentials is
        // never respected for same-origin requests.
        if (requestOptions.credentials === 'include') {
            xhr.withCredentials = true;
        }
        // Parse the response type. For the most part, we depend on the browser
        // support for the `responseType` property for XHR2. However, we special
        // case the 'json' and the 'document' type, as they can be emulated with the
        // original XHR APIs.
        const responseType = requestOptions.responseType;
        if (responseType) {
            if (requestOptions.forcePolyfill) {
                if (!(responseType in PolyfilledResponseTypes)) {
                    reject(new TypeError(`Cannot polyfill responseType "${responseType}"`));
                    return;
                }
            }
            else {
                if (!('responseType' in xhr) &&
                    !(responseType in PolyfilledResponseTypes)) {
                    reject(new TypeError('Cannot set responseType: not supported in browser.'));
                    return;
                }
                try {
                    xhr.responseType = responseType;
                }
                catch (e) {
                    reject(new TypeError(`Unknown responseType "${responseType}".`));
                    return;
                }
                if (xhr &&
                    responseType !== xhr.responseType &&
                    !(responseType in PolyfilledResponseTypes)) {
                    reject(new TypeError(`Unknown responseType "${responseType}".`));
                    return;
                }
            }
        }
        // Set headers
        const headers = httpRequest.headers.count()
            ? httpRequest.headers.toJSON()
            : null;
        if (headers) {
            for (const key in headers) {
                if (!headers.hasOwnProperty(key) || !headers[key]) {
                    continue;
                }
                try {
                    xhr.setRequestHeader(key, headers[key]);
                }
                catch (e) {
                    reject(e);
                    return;
                }
            }
        }
        // Abort the request if a signal is provided.
        if (signal) {
            signal.addEventListener('abort', function onAbort() {
                signal.removeEventListener('abort', onAbort);
                xhr.abort();
                reject(new RequestAbortedError());
            });
        }
        // We set onload here so we can set the requestStartTime pretty close to
        // actual sending.
        xhr.onload = handleLoad.bind(xhr, httpRequest, Date.now(), resolve);
        // Send the request.
        try {
            xhr.send(sendParams);
        }
        catch (e) {
            reject(e);
            return;
        }
    });
}
/**
 * Sends an HTTP Request using XMLHttpRequest.
 *
 * @param httpRequest - The request to send.
 * @returns A promise that will be resolved with the response object.
 */
export function request(httpRequest) {
    return performXHRRequest(httpRequest);
}
//# sourceMappingURL=index.js.map