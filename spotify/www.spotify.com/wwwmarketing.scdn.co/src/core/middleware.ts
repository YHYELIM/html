var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export var Middleware;
(function (Middleware) {
    function fromContextProvider(factory) {
        return (next) => (opt) => {
            const provider = unpackProvider(factory(opt));
            return (req) => __awaiter(this, void 0, void 0, function* () { return next((yield provider(req))); });
        };
    }
    Middleware.fromContextProvider = fromContextProvider;
    function requireContext(_context) {
        return next => () => next;
    }
    Middleware.requireContext = requireContext;
    function compose(middleware, factory) {
        return (options) => middleware(factory(options))(options);
    }
    Middleware.compose = compose;
})(Middleware || (Middleware = {}));
function unpackProvider(provider) {
    if (typeof provider === 'object' && provider !== null) {
        const ctx = provider;
        return (req) => (Object.assign(Object.assign({}, req), ctx));
    }
    if (typeof provider !== 'function')
        throw new TypeError('Provider factory must return a function or an object');
    return provider;
}
//# sourceMappingURL=middleware.js.map