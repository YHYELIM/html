var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { getCookie } from '../../getFields';
import { gabitoEventSender } from '../gabitoEventSender';
import { createGpbCheckoutEvents } from '@spotify-internal/event-definitions/es5/events/createGpbCheckoutEvents';
export function setupGabitoFlavourTracking({ analyticsRoot, offerTypeId, }) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        const eventPayload = {
            action: '',
            current_step: 'flavour_page',
            source: (_a = getCookie('sp_gpb_referrer')) !== null && _a !== void 0 ? _a : null,
            registration_country: null,
            offer_country: null,
            offer_uuid: null,
            offer_type_id: offerTypeId,
            billing_choice: null,
            purchase_status: null,
            g_order_id: null,
            gpb_session_id: (_b = getCookie('sp_gpb_sess')) !== null && _b !== void 0 ? _b : null,
            variant: null,
        };
        trackFlavourPageView({
            eventPayload,
        });
        const collapsablePlansList = analyticsRoot.querySelectorAll('ul');
        collapsablePlansList.forEach(collapsablePlan => {
            const plans = collapsablePlan.querySelectorAll('a');
            plans.forEach(plan => {
                plan.addEventListener('click', () => {
                    trackFlavourPageChoiceClicked({
                        eventPayload,
                    });
                });
            });
        });
        if (!analyticsRoot) {
            return;
        }
    });
}
export function trackFlavourPageView({ eventPayload, }) {
    const flavourPageLoadedEventPayload = Object.assign(Object.assign({}, eventPayload), { action: 'flavour_page_loaded' });
    return gabitoEventSender({
        authEvent: createGpbCheckoutEvents,
        nonAuthEvent: createGpbCheckoutEvents,
        eventPayload: flavourPageLoadedEventPayload,
        isAuthenticated: true,
    });
}
export function trackFlavourPageChoiceClicked({ eventPayload, }) {
    const flavourPageLoadedEventPayload = Object.assign(Object.assign({}, eventPayload), { action: 'flavour_page_choice_clicked' });
    return gabitoEventSender({
        authEvent: createGpbCheckoutEvents,
        nonAuthEvent: createGpbCheckoutEvents,
        eventPayload: flavourPageLoadedEventPayload,
        isAuthenticated: true,
    });
}
//# sourceMappingURL=trackFlavourPage.js.map