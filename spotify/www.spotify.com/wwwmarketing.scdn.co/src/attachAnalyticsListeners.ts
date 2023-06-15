import { getOrCreateDataLayer } from './dataLayer';
import { debounce } from './debounce';
import { IN_VIEW_ATTRIBUTE } from './inViewEventAttributes';
import { isInView } from './isInView';
import { trackComponentView } from './gabito/events/trackComponentView';
import { trackLinkClick } from './gabito/events/trackLinkClick';
import { trackResourceView } from './gabito/events/trackResourceView';
import { setupGtmFlavourPageTracking } from './gtm/setupFlavourPageTracking';
import { setupHifiTracking } from './gabito/events/trackHifi';
import { getCookie } from './getFields';
import { setupGabitoFlavourTracking } from './gabito/events/trackFlavourPage';
export const attachAnalyticsListeners = ({ analyticsRoot, isAuthenticated, pageName, resourceName, countryCode, eventParams, language, }) => {
    const dataLayer = getOrCreateDataLayer();
    const pageUrl = window.location.href;
    const httpReferer = document.referrer;
    function allAttributesPopulated(object) {
        const values = Object.keys(object).map(e => object[e]);
        return !values.some(x => x === null);
    }
    function populateAttribute(currentElement, returnObject, attribute, htmlAttribute) {
        const attributeValue = currentElement.getAttribute(htmlAttribute);
        if (attributeValue && !returnObject[attribute]) {
            returnObject[attribute] = attributeValue;
        }
    }
    function buildPromotionObject(element, clickEvent) {
        let currentElement = element;
        const returnObject = {
            countryCode,
            variant: null,
            name: null,
            position: null,
            list: null,
            id: null,
        };
        if (clickEvent) {
            returnObject.href = null;
        }
        do {
            populateAttribute(currentElement, returnObject, 'variant', 'data-event-campaign-id');
            populateAttribute(currentElement, returnObject, 'id', 'data-event-offer-type-id');
            populateAttribute(currentElement, returnObject, 'name', 'data-event-offer-type-id');
            populateAttribute(currentElement, returnObject, 'list', 'data-component-name');
            populateAttribute(currentElement, returnObject, 'position', 'data-component-position');
            if (clickEvent && currentElement.hasAttribute('href')) {
                returnObject.href = currentElement.getAttribute('href');
            }
            if (allAttributesPopulated(returnObject) ||
                currentElement === analyticsRoot) {
                break;
            }
            if (currentElement.parentElement) {
                currentElement = currentElement.parentElement;
            }
        } while (currentElement.parentElement);
        return returnObject;
    }
    function parseEvent(element, clickEvent) {
        if (!element)
            return null;
        try {
            return buildPromotionObject(element, clickEvent);
        }
        catch (e) {
            return null;
        }
    }
    function pushPromoView(event) {
        dataLayer.push({
            event: 'eec.promotionView',
            ecommerce: {
                promoView: {
                    promotions: [event],
                },
            },
        });
    }
    function pushProductView(event) {
        dataLayer.push({
            event: 'eec.impressionView',
            ecommerce: {
                impressions: [event],
            },
        });
    }
    const seenViewElements = [];
    function pushStorefrontLoad(element) {
        dataLayer.push({
            event: 'plan-sensitive-storefront-load',
            error: element.getAttribute('data-storefront-error') ? true : false,
            'current-plan': element.getAttribute('data-current-plan'),
        });
    }
    function handleViewEvent(element) {
        if (seenViewElements.indexOf(element) === -1 && isInView(element)) {
            seenViewElements.push(element);
            const parsedEvent = parseEvent(element, false);
            trackComponentView({
                isAuthenticated,
                resourceName,
                language,
                httpReferer,
                pageUrl,
                eventObject: parsedEvent,
            });
            if (element.getAttribute('data-component-name') === 'storefront') {
                pushStorefrontLoad(element);
            }
            if (element.getAttribute('data-component-type') === 'product') {
                pushProductView(parsedEvent);
            }
            else {
                pushPromoView(parsedEvent);
            }
        }
    }
    function trackInViewElements() {
        analyticsRoot
            .querySelectorAll(`[${IN_VIEW_ATTRIBUTE}]`)
            .forEach(element => {
            handleViewEvent(element);
        });
    }
    function pushPromoClick(event) {
        dataLayer.push({
            event: 'eec.promotionClick',
            ecommerce: {
                promoClick: {
                    promotions: [event],
                },
            },
        });
    }
    function pushProductClick(event) {
        dataLayer.push({
            event: 'eec.productClick',
            ecommerce: {
                click: {
                    actionField: { list: event === null || event === void 0 ? void 0 : event.list },
                    products: [event],
                },
            },
        });
    }
    function getComponentType(element) {
        var _a;
        return (_a = element
            .closest('[data-component-type]')) === null || _a === void 0 ? void 0 : _a.getAttribute('data-component-type');
    }
    function handleClickEvent(element) {
        const parsedEvent = parseEvent(element, true);
        trackLinkClick({
            isAuthenticated,
            resourceName,
            language,
            httpReferer,
            pageUrl,
            eventObject: parsedEvent,
        });
        const componentType = getComponentType(element);
        if (componentType === 'product') {
            pushProductClick(parsedEvent);
        }
        if (componentType === 'promo' && (parsedEvent === null || parsedEvent === void 0 ? void 0 : parsedEvent.href) !== '#plans') {
            pushPromoClick(parsedEvent);
        }
    }
    function setupPromotionTracking() {
        var _a;
        if (!analyticsRoot) {
            return;
        }
        trackInViewElements();
        window.addEventListener('resize', debounce(trackInViewElements, 500));
        window.addEventListener('scroll', debounce(trackInViewElements, 500));
        window.addEventListener('orientationchange', debounce(trackInViewElements, 500));
        analyticsRoot.addEventListener('click', e => {
            if (e.target instanceof HTMLElement && e.target.closest('a[href]')) {
                handleClickEvent(e.target);
            }
        }, { capture: true });
        const isAndroid = getCookie('platform') === 'android';
        const isGpbEnabled = getCookie('is_gpb_supported') === '1';
        const offerTypeId = (_a = eventParams.offerTypeId) !== null && _a !== void 0 ? _a : null;
        if (isAndroid && isGpbEnabled && resourceName.includes('plan')) {
            setupGabitoFlavourTracking({ analyticsRoot, offerTypeId });
        }
        setupGtmFlavourPageTracking(analyticsRoot);
    }
    if (pageName === 'hifi' || pageName === 'storefront') {
        setupHifiTracking({
            analyticsRoot,
            isAuthenticated,
            resourceName,
        });
    }
    else {
        trackResourceView({
            isAuthenticated,
            resourceName,
            countryCode,
            language,
            httpReferer,
            pageUrl,
            offerTypeId: eventParams.offerTypeId || '',
            campaignId: eventParams.campaignId || '',
        });
        setupPromotionTracking();
    }
};
//# sourceMappingURL=attachAnalyticsListeners.js.map