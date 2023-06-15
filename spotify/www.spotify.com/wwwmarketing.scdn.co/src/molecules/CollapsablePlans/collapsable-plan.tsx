import React, { useContext, useEffect, useState } from 'react';
import { Type } from '@spotify-internal/encore-web';
import { Drawer, PlanHeader, StyledChevron, Promotion, PaymentOption, PaymentChevron, PaymentMethods, PaymentMethod, HeaderArea, PlanHeaderTitle, PlanHeaderSubtitle, PlanHeaderIneligibleText, Card, PlanBanner, Plan, } from './components';
import { purify } from '../../utils/helpers';
import DirectionContext from '../../configuration/context/direction';
import { eventParamAttributes, inViewEventAttributes, } from '@spotify-internal/touchdown-analytics';
import DeviceContext from '../../configuration/context/device';
const CollapsablePlan = ({ plan, currentProductText, index, currentProductBanner, }) => {
    const { promotion, header, subheader, gpbSubheader, supheader, isUsersCurrentProduct, isRecurringProduct, paymentOptions, planLink, dataPaymentEventName, dataPlanEventName, eventParams, } = plan;
    const direction = useContext(DirectionContext);
    const device = useContext(DeviceContext);
    const [isGPBEligible, setIsGPBEligible] = useState(device.platform === 'android' && device.gpb_supported);
    useEffect(() => {
        if (device.platform === 'android' && device.gpb_supported) {
            setIsGPBEligible(true);
        }
    }, [device]);
    const currentPlanVisible = currentProductBanner &&
        isUsersCurrentProduct &&
        !!currentProductText &&
        isRecurringProduct;
    const dataPlanEventProp = Object.assign(Object.assign({}, (dataPlanEventName && { 'data-event-name': dataPlanEventName })), { 'data-event-label': header });
    const dataPaymentEventProp = Object.assign({}, (dataPaymentEventName && { 'data-event-name': dataPaymentEventName }));
    const hasPaymentOptions = paymentOptions && paymentOptions.length > 0;
    const redirectToPlanLinkIfNoPaymentOptions = () => {
        if (planLink)
            window.location.href = planLink;
    };
    return (React.createElement("li", Object.assign({}, (!hasPaymentOptions && !planLink && { className: 'disabled' })),
        currentPlanVisible && React.createElement(PlanBanner, null, currentProductText),
        isGPBEligible && (React.createElement(Plan, Object.assign({ standalone: true, href: planLink, key: `collapsable-plan-${index}`, "data-selectable-plan": false, "data-payment-icons": false }, eventParamAttributes(Object.assign(Object.assign({}, eventParams), { componentName: 'COLLAPSABLE-PLAN', componentPosition: index, componentType: 'product' })), inViewEventAttributes(), dataPlanEventProp),
            React.createElement(PlanHeader, null,
                React.createElement(HeaderArea, { planLink: true },
                    supheader && (React.createElement(Promotion, Object.assign({}, promotion, { dangerouslySetInnerHTML: { __html: purify(supheader) } }))),
                    header && (React.createElement(PlanHeaderTitle, { variant: "balladBold", dangerouslySetInnerHTML: { __html: purify(header) } })),
                    gpbSubheader && (React.createElement(PlanHeaderSubtitle, { variant: "viola", dangerouslySetInnerHTML: { __html: purify(gpbSubheader) } })),
                    !gpbSubheader && subheader && (React.createElement(PlanHeaderSubtitle, { variant: "viola", dangerouslySetInnerHTML: { __html: purify(subheader) } })))))),
        !isGPBEligible && (React.createElement(Card, Object.assign({ as: currentPlanVisible ? 'div' : 'details', key: `collapsable-plan-${index}`, "data-selectable-plan": !currentPlanVisible, "data-payment-icons": true }, eventParamAttributes(Object.assign(Object.assign({}, eventParams), { componentName: 'COLLAPSABLE-PLAN', componentPosition: index, componentType: 'product' })), inViewEventAttributes(), dataPlanEventProp),
            React.createElement(PlanHeader, Object.assign({ as: currentPlanVisible ? 'div' : 'summary' }, (!hasPaymentOptions &&
                planLink && { onClick: redirectToPlanLinkIfNoPaymentOptions })),
                React.createElement(HeaderArea, null,
                    supheader && (React.createElement(Promotion, Object.assign({}, promotion, { dangerouslySetInnerHTML: { __html: purify(supheader) } }))),
                    header && (React.createElement(PlanHeaderTitle, { variant: "heading3", dangerouslySetInnerHTML: { __html: purify(header) } })),
                    subheader && (React.createElement(PlanHeaderSubtitle, { variant: "heading4", dangerouslySetInnerHTML: { __html: purify(subheader) } })),
                    plan.ineligibleText && (React.createElement(PlanHeaderIneligibleText, { variant: "heading4", className: "ineligible-text", dangerouslySetInnerHTML: {
                            __html: purify(plan.ineligibleText),
                        } }))),
                !currentPlanVisible && React.createElement(StyledChevron, { "aria-hidden": "true" })),
            !currentPlanVisible && hasPaymentOptions && (React.createElement(Drawer, null, paymentOptions.map((option, i) => (React.createElement("li", { key: `plan-${i}` },
                React.createElement(PaymentOption, Object.assign({ standalone: true, href: option.url, "data-event-label": header + ' - ' + option.type }, dataPaymentEventProp),
                    React.createElement("div", null,
                        React.createElement(Type.h3, { variant: "ballad" }, option.type),
                        React.createElement(PaymentMethods, null, option.paymentMethods.map(({ src, alt }, x) => {
                            return (src && (React.createElement("li", { key: `payment-method-${x}` },
                                React.createElement(PaymentMethod, { src: src, alt: alt }))));
                        }))),
                    React.createElement(PaymentChevron, { textDirection: direction, "aria-hidden": "true" })))))))))));
};
export default CollapsablePlan;
//# sourceMappingURL=collapsable-plan.js.map