var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createMarketingResourceComponentView as viewAuth } from '@spotify-internal/event-definitions/es5/events/createMarketingResourceComponentView';
import { createMarketingResourceComponentViewNonAuth as viewNonAuth, } from '@spotify-internal/event-definitions/es5/events/createMarketingResourceComponentViewNonAuth';
import { gabitoEventSender } from '../gabitoEventSender';
export function trackComponentView({ isAuthenticated, resourceName, language, pageUrl, httpReferer, eventObject, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const eventPayload = {
            resource_name: resourceName,
            country_code: eventObject === null || eventObject === void 0 ? void 0 : eventObject.countryCode,
            component_name: eventObject === null || eventObject === void 0 ? void 0 : eventObject.list,
            display_order: (eventObject === null || eventObject === void 0 ? void 0 : eventObject.position)
                ? parseInt(eventObject === null || eventObject === void 0 ? void 0 : eventObject.position, 10)
                : null,
            campaign_id: eventObject === null || eventObject === void 0 ? void 0 : eventObject.variant,
            offer_type_id: eventObject === null || eventObject === void 0 ? void 0 : eventObject.name,
            locale: language,
            http_referer: httpReferer,
            full_url: pageUrl,
        };
        return gabitoEventSender({
            authEvent: viewAuth,
            nonAuthEvent: viewNonAuth,
            eventPayload,
            isAuthenticated,
        });
    });
}
//# sourceMappingURL=trackComponentView.js.map