var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import logger from '@spotify-internal/node-logger';
import { getEventSender } from './getEventSender';
import { authTransformEvent } from './events/helpers/authTransformEvent';
export function gabitoEventSender({ authEvent, nonAuthEvent, eventPayload, isAuthenticated, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const event = authTransformEvent(isAuthenticated, authEvent, nonAuthEvent, eventPayload);
        if (window.location.hostname === 'www.spotify.com') {
            const eventSender = yield getEventSender();
            return eventSender.send(event, { authorize: isAuthenticated });
        }
        return logger.info('Gabito event: ', event);
    });
}
//# sourceMappingURL=gabitoEventSender.js.map