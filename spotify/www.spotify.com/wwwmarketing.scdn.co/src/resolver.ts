import { Middleware, } from './core';
import { Configuration } from '@spotify-internal/remote-config-properties';
import { createDebugLogger, } from '@spotify-internal/remote-config-common';
const debug = createDebugLogger('core:resolver');
export function createResolver(factory) {
    return recreateResolver(factory);
}
function recreateResolver(factory) {
    return class {
        constructor(options) {
            this.delegate = factory(options);
        }
        resolve(context) {
            return Promise.resolve()
                .then(() => this.delegate(context))
                .then(builder => builder.build())
                .catch(err => {
                debug('Uncaught error in resolve chain:', err);
                return Configuration.empty();
            });
        }
        static addMiddleware(middleware) {
            return recreateResolver(Middleware.compose(middleware, factory));
        }
    };
}
//# sourceMappingURL=resolver.js.map