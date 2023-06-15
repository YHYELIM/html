export function eventParamAttributes(eventParams = {}) {
    var _a;
    let componentType = undefined;
    if (eventParams.componentType) {
        componentType =
            eventParams.componentType === 'product' ? 'product' : 'promo';
    }
    return {
        'data-event-campaign-id': eventParams.campaignId,
        'data-event-offer-type-id': eventParams.offerTypeId,
        'data-event-country-code': eventParams.countryCode,
        'data-component-name': eventParams.componentName,
        'data-component-position': (_a = eventParams.componentPosition) === null || _a === void 0 ? void 0 : _a.toString(),
        'data-component-type': componentType,
    };
}
//# sourceMappingURL=eventParamAttributes.js.map