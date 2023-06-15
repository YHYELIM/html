var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { KnownContext, } from '@spotify-internal/remote-config-core';
import { Configuration, defineInternal, } from '@spotify-internal/remote-config-properties';
export const contextHash = defineInternal({
    name: '#contextHash',
    description: 'Hash of the context when passing through initial-config-middleware',
    default: '',
});
export function initialConfigMiddleware(next) {
    return (opt) => (ctx) => __awaiter(this, void 0, void 0, function* () {
        const hash = KnownContext.hash(ctx);
        if (opt.initialConfiguration) {
            if (hash === opt.initialConfiguration.getValue(contextHash)) {
                return Configuration.builder(opt.initialConfiguration);
            }
        }
        const config = yield next(ctx);
        config.setValue(contextHash, hash);
        return config;
    });
}
//# sourceMappingURL=initial-config.js.map