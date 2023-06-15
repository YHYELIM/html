var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createMarketingResourceView as viewAuth } from '@spotify-internal/event-definitions/es5/events/createMarketingResourceView';
import { createMarketingResourceViewNonAuth as viewNonAuth, } from '@spotify-internal/event-definitions/es5/events/createMarketingResourceViewNonAuth';
import { gabitoEventSender } from '../gabitoEventSender';
export function trackResourceView({ isAuthenticated, resourceName, language, httpReferer, pageUrl, countryCode, campaignId, offerTypeId, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const eventPayload = {
            resource_name: resourceName,
            country_code: countryCode,
            campaign_id: campaignId,
            offer_type_id: offerTypeId,
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
//# sourceMappingURL=trackResourceView.js.map