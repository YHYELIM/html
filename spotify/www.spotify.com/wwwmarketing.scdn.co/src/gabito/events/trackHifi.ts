var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { gabitoEventSender } from '../gabitoEventSender';
import { createHifiLandingView as hifiLandingView } from '@spotify-internal/event-definitions/es5/events/createHifiLandingView';
import { createHifiLandingViewNonAuth as hifiLandingViewNonAuth } from '@spotify-internal/event-definitions/es5/events/createHifiLandingViewNonAuth';
import { createHifiStorefrontPageView as hifiStorefrontView } from '@spotify-internal/event-definitions/es5/events/createHifiStorefrontPageView';
import { createHifiLandingLinkClick as hifiLandingClick } from '@spotify-internal/event-definitions/es5/events/createHifiLandingLinkClick';
import { createHifiLandingLinkClickNonAuth as hifiLandingClickNonAuth } from '@spotify-internal/event-definitions/es5/events/createHifiLandingLinkClickNonAuth';
import { createHifiStorefrontCardCTAClick as hifiStorefrontClick } from '@spotify-internal/event-definitions/es5/events/createHifiStorefrontCardCTAClick';
import { createHifiStorefrontCardImpression as hifiStorefrontImpressions } from '@spotify-internal/event-definitions/es5/events/createHifiStorefrontCardImpression';
import { getCookie, getParam } from '../../getFields';
import { isInView } from '../../isInView';
import { debounce } from '../../debounce';
const seenViewElements = [];
export function setupHifiTracking({ analyticsRoot, isAuthenticated, resourceName, }) {
    return __awaiter(this, void 0, void 0, function* () {
        trackHifiView({
            isAuthenticated,
            resourceName,
        });
        if (!analyticsRoot) {
            return;
        }
        if (resourceName === 'hifi') {
            trackHifiHeroLinkClick({
                analyticsRoot,
                isAuthenticated,
            });
        }
        else {
            trackHifiStorefront({
                analyticsRoot,
                isAuthenticated,
            });
        }
    });
}
export function trackHifiView({ isAuthenticated, resourceName, }) {
    const eventPayload = {
        correlation_id: getCookie('sp_t'),
        user_id: undefined,
        timestamp: Date.now(),
        utm_tag: getParam('utm_tag'),
    };
    if (resourceName === 'hifi') {
        return gabitoEventSender({
            authEvent: hifiLandingView,
            nonAuthEvent: hifiLandingViewNonAuth,
            eventPayload,
            isAuthenticated,
        });
    }
    return gabitoEventSender({
        authEvent: hifiStorefrontView,
        nonAuthEvent: hifiStorefrontView,
        eventPayload,
        isAuthenticated,
    });
}
export function trackHifiHeroLinkClick({ analyticsRoot, isAuthenticated, }) {
    const eventPayload = {
        correlation_id: getCookie('sp_t'),
        user_id: undefined,
        timestamp: Date.now(),
        utm_tag: getParam('utm_tag'),
    };
    const heros = analyticsRoot.querySelectorAll('[data-component-name*="herocard"]');
    const hero = heros[0];
    hero.getElementsByTagName('a')[0].addEventListener('click', () => {
        gabitoEventSender({
            authEvent: hifiLandingClick,
            nonAuthEvent: hifiLandingClickNonAuth,
            eventPayload,
            isAuthenticated,
        });
    });
}
export function trackHifiStorefront({ analyticsRoot, isAuthenticated, }) {
    const eventPayload = {
        correlation_id: getCookie('sp_t'),
        user_id: undefined,
        timestamp: Date.now(),
        utm_tag: getParam('utm_tag'),
    };
    const storefrontCards = analyticsRoot.querySelectorAll('[data-component-type*="product"]');
    storefrontCards.forEach(storefrontCard => {
        var _a;
        eventPayload.plan_type =
            (_a = storefrontCard.getAttribute('data-event-offer-type-id')) !== null && _a !== void 0 ? _a : undefined;
        if (storefrontCard.getElementsByTagName('a')[0]) {
            storefrontCard
                .getElementsByTagName('a')[0]
                .addEventListener('click', () => {
                gabitoEventSender({
                    authEvent: hifiStorefrontClick,
                    nonAuthEvent: hifiStorefrontClick,
                    eventPayload,
                    isAuthenticated,
                });
            });
        }
        trackHifiStorefrontImpressions({
            storefrontCard,
            isAuthenticated,
            eventPayload,
        });
    });
}
function trackHifiStorefrontImpressions({ storefrontCard, isAuthenticated, eventPayload, }) {
    handleHifiStorefrontImpressions({
        storefrontCard,
        isAuthenticated,
        eventPayload,
    });
    window.addEventListener('resize', debounce(handleHifiStorefrontImpressions({
        storefrontCard,
        isAuthenticated,
        eventPayload,
    }), 500));
    window.addEventListener('scroll', debounce(handleHifiStorefrontImpressions({
        storefrontCard,
        isAuthenticated,
        eventPayload,
    }), 500));
    window.addEventListener('orientationchange', debounce(handleHifiStorefrontImpressions({
        storefrontCard,
        isAuthenticated,
        eventPayload,
    }), 500));
}
export function handleHifiStorefrontImpressions({ storefrontCard, isAuthenticated, eventPayload, }) {
    if (seenViewElements.indexOf(storefrontCard) === -1 &&
        isInView(storefrontCard)) {
        gabitoEventSender({
            authEvent: hifiStorefrontImpressions,
            nonAuthEvent: hifiStorefrontImpressions,
            eventPayload,
            isAuthenticated,
        });
    }
}
//# sourceMappingURL=trackHifi.js.map