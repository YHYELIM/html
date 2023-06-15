import { TransportErrors } from '../enums/errors';
/**
 * An error that was thrown during the process of making a request.
 */
export class RequestError extends Error {
    constructor(message, code, status) {
        super(message);
        this.name = 'RequestError';
        this.message = message;
        this.code = code;
        this.status = status || 0;
    }
}
export class RequestAbortedError extends RequestError {
    constructor() {
        super('Request aborted by signal.', TransportErrors.HTTP_REQUEST_ABORTED, 0);
        this.name = 'RequestAbortedError';
        this.message = 'Request aborted by signal.';
    }
}
//# sourceMappingURL=request.js.map