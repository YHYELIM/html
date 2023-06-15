import React, { useState, useContext, useEffect } from 'react';
import Plan from './plan';
import Bundle from './bundle';
import { Plans, StyledContainer, Bundles, BundleTitle, IconsArea, PaymentIcons, PaymentIconContainer, PaymentMethod, AdditionalPaymentIconsArea, AdditionalPaymentIconsSummary, AdditionalPaymentIconsContainer, ErrorBanner, ErrorMessage, ExitError, AdditionalCard, AdditionalCardButton, AdditionalCardText, LegalDisclaimer, CustomStorefrontHeader, } from './components';
import { white, black, IconX, colorThemeGenerator, } from '@spotify-internal/encore-web';
import { eventParamAttributes, inViewEventAttributes, } from '@spotify-internal/touchdown-analytics';
import { purify } from '../../utils/helpers';
import UserContext from '../../configuration/context/user';
export const Storefront = ({ header = null, icons, labels, currentProductText, errorMessage, errorBanner = false, plans, bundles, bundleHeader, container = null, hasDropShadow = true, additionalCard, eventParams, legalDisclaimer, }) => {
    const user = useContext(UserContext);
    const [isErrorVisible, setErrorVisibility] = useState(!!user.ineligibility_flag || errorBanner);
    const additionalPlans = bundles || additionalCard ? true : false;
    const [paymentIcons, setPaymentIcons] = useState(null);
    const [additionalPaymentIcons, setAdditionalPaymentIcons] = useState(null);
    const [dynamicAdditionalPaymentMethodsLabel, setAdditionalPaymentMethodsLabel,] = useState('+');
    function getCurrentPlan() {
        var _a;
        const currentPlan = plans === null || plans === void 0 ? void 0 : plans.find(obj => {
            return obj.isUsersCurrentProduct;
        });
        return ((_a = currentPlan === null || currentPlan === void 0 ? void 0 : currentPlan.eventParams) === null || _a === void 0 ? void 0 : _a.campaignId) || false;
    }
    useEffect(() => {
        if (icons) {
            setPaymentIcons(icons);
        }
        if (paymentIcons && paymentIcons.length > 6) {
            setAdditionalPaymentIcons(paymentIcons.splice(5));
        }
        if (additionalPaymentIcons &&
            additionalPaymentIcons.length &&
            (labels === null || labels === void 0 ? void 0 : labels.additionalPaymentMethods)) {
            setAdditionalPaymentMethodsLabel(labels.additionalPaymentMethods.replace('%REMAINING%', additionalPaymentIcons.length));
        }
    }, [icons, paymentIcons, additionalPaymentIcons, labels]);
    return (React.createElement(StyledContainer, Object.assign({}, container, eventParamAttributes(eventParams), { "data-current-plan": getCurrentPlan(), "data-storefront-error": errorMessage }),
        header && (React.createElement(React.Fragment, null,
            React.createElement(CustomStorefrontHeader, Object.assign({}, header)),
            paymentIcons && (React.createElement(IconsArea, null,
                React.createElement(PaymentIcons, null, paymentIcons.map(({ sources, label }, i) => {
                    return (React.createElement(PaymentIconContainer, { key: `icon-${i}` },
                        React.createElement(PaymentMethod, { sources: sources, role: "img", "aria-label": label })));
                })),
                additionalPaymentIcons && (React.createElement(AdditionalPaymentIconsArea, null,
                    React.createElement(AdditionalPaymentIconsSummary, { tabIndex: 0 },
                        React.createElement("span", null, dynamicAdditionalPaymentMethodsLabel),
                        React.createElement(AdditionalPaymentIconsContainer, { amount: additionalPaymentIcons.length }, additionalPaymentIcons.map(({ sources, label }, i) => {
                            return (React.createElement(PaymentIconContainer, { key: `icon-${i}` },
                                React.createElement(PaymentMethod, { sources: sources, role: "img", "aria-label": label })));
                        }))))))),
            isErrorVisible && errorMessage && (React.createElement("div", { className: "encore-light-theme" },
                React.createElement(ErrorBanner, { colorSet: "warning" },
                    React.createElement(ErrorMessage, null, errorMessage),
                    React.createElement(ExitError, { role: "button", onClick: () => setErrorVisibility(false) },
                        React.createElement(IconX, null))))))),
        plans && (React.createElement(Plans, { length: plans.length }, plans.map((plan, i) => plan && (React.createElement(Plan, { key: `plan-${i}`, plan: plan, index: i, currentProductText: currentProductText, length: plans.length, hasDropShadow: hasDropShadow }))))),
        legalDisclaimer && (React.createElement(LegalDisclaimer, { defaultDisclaimer: true, additionalPlans: additionalPlans, isGroupLegalDisclaimer: true, text: legalDisclaimer })),
        bundleHeader && (React.createElement(BundleTitle, { dangerouslySetInnerHTML: { __html: purify(bundleHeader) } })),
        bundles && (React.createElement(Bundles, null, bundles.map((bundle, i) => bundle && React.createElement(Bundle, Object.assign({ key: `bundle-${i}` }, bundle, { index: i }))))),
        additionalCard && additionalCard.content && (React.createElement(AdditionalCard, Object.assign({ hasDropShadow: hasDropShadow }, eventParamAttributes(Object.assign(Object.assign({}, additionalCard.eventParams), { componentName: 'STOREFRONT-ADDITIONAL-CARD', componentType: 'promo' })), inViewEventAttributes()),
            React.createElement(AdditionalCardText, { variant: "body1" }, additionalCard.content),
            additionalCard.button && (React.createElement(AdditionalCardButton, Object.assign({ theme: Object.assign({}, colorThemeGenerator({
                    primaryColor: white,
                })), buttonSize: "sm", color: black }, additionalCard.button)))))));
};
export default Storefront;
//# sourceMappingURL=storefront.js.map