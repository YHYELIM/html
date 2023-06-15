var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createEventSender } from '@spotify-internal/event-sender';
import { createUserAgentContext, createCorrelationIdContext, } from '@spotify-internal/event-sender/es5/contexts';
import { getTransport } from './transport';
import { getCookie } from '../getFields';
export function getEventSender() {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const transport = yield getTransport();
        return createEventSender({
            transport,
            context: [
                createCorrelationIdContext((_a = getCookie('sp_t')) !== null && _a !== void 0 ? _a : 'unknown'),
                createUserAgentContext((_b = navigator === null || navigator === void 0 ? void 0 : navigator.userAgent) !== null && _b !== void 0 ? _b : 'unknown'),
            ],
        });
    });
}
//# sourceMappingURL=getEventSender.js.map