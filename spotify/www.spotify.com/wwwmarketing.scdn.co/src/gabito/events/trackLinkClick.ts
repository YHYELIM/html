var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createMarketingResourceLinkClick as clickAuth } from '@spotify-internal/event-definitions/es5/events/createMarketingResourceLinkClick';
import { createMarketingResourceLinkClickNonAuth as clickNonAuth, } from '@spotify-internal/event-definitions/es5/events/createMarketingResourceLinkClickNonAuth';
import { gabitoEventSender } from '../gabitoEventSender';
export function trackLinkClick({ isAuthenticated, resourceName, language, pageUrl, httpReferer, eventObject, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const eventPayload = {
            resource_name: resourceName,
            country_code: eventObject === null || eventObject === void 0 ? void 0 : eventObject.countryCode,
            campaign_id: eventObject === null || eventObject === void 0 ? void 0 : eventObject.variant,
            offer_type_id: eventObject === null || eventObject === void 0 ? void 0 : eventObject.name,
            link_url: eventObject === null || eventObject === void 0 ? void 0 : eventObject.href,
            locale: language,
            http_referer: httpReferer,
            full_url: pageUrl,
        };
        return gabitoEventSender({
            authEvent: clickAuth,
            nonAuthEvent: clickNonAuth,
            eventPayload,
            isAuthenticated,
        });
    });
}
//# sourceMappingURL=trackLinkClick.js.map