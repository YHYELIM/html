import React, { useContext } from 'react';
import { SmallText, Header, Intro, List, LegalDisclaimer, LegalDisclaimerWrapper, PrimaryButton, SecondaryButton, ButtonContainer, Benefit, BenefitText, StyledDivider, Lozenges, } from './components';
import Checkmark from '../../atoms/Checkmark';
import Lozenge from '../../atoms/Lozenge';
import { purify } from '../../utils/helpers';
import DeviceContext from '../../configuration/context/device';
import { eventParamAttributes, inViewEventAttributes, } from '@spotify-internal/touchdown-analytics';
import { blue100, white } from '@spotify-internal/encore-web';
const Plan = ({ plan, currentProductText, index, length, hasDropShadow, }) => {
    const { header, supheader, secondarySupheader, subheader, button, secondaryButton, legalDisclaimer, benefits, accounts, isUsersCurrentProduct, isRecurringProduct, hasNonRecurringProduct, lozenges = [], eventParams, } = plan;
    const { platform } = useContext(DeviceContext);
    const currentPlanButtonHidden = isUsersCurrentProduct &&
        currentProductText &&
        isRecurringProduct &&
        !hasNonRecurringProduct;
    const currentPlanBannerVisible = isUsersCurrentProduct && currentProductText;
    const lozengeEmpty = !Array.isArray(lozenges) || !lozenges.length;
    const legacyLozenges = [];
    if (supheader && lozengeEmpty) {
        legacyLozenges.push({ text: supheader });
    }
    if (secondarySupheader && lozengeEmpty) {
        legacyLozenges.push({
            text: secondarySupheader,
            color: `${blue100}`,
            backgroundColor: `${white}`,
            borderValues: {
                color: `${blue100}`,
                width: 1,
            },
        });
    }
    const buttonProps = Object.assign({}, (button || {}));
    const secondaryButtonProps = Object.assign({}, (secondaryButton || {}));
    const wrapOnClick = (onClick) => (event) => onClick({
        params: Object.assign(Object.assign({}, (eventParams || {})), { position: index }),
        browserEvent: event,
    });
    if (button === null || button === void 0 ? void 0 : button.onClick) {
        buttonProps.onClick = wrapOnClick(button.onClick);
    }
    if (secondaryButton === null || secondaryButton === void 0 ? void 0 : secondaryButton.onClick) {
        secondaryButtonProps.onClick = wrapOnClick(secondaryButton.onClick);
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Intro, Object.assign({ column: index + 1, currentPlanVisible: !!currentPlanBannerVisible, "data-current-plan-text": currentProductText, length: length, hasDropShadow: hasDropShadow }, eventParamAttributes(Object.assign(Object.assign({}, eventParams), { componentName: 'STOREFRONT-PLAN', componentPosition: index, componentType: 'product' })), inViewEventAttributes()),
            React.createElement(Lozenges, null,
                lozenges &&
                    lozenges.map(lozenge => lozenge && React.createElement(Lozenge, Object.assign({}, lozenge))),
                legacyLozenges &&
                    legacyLozenges.map(lozenge => lozenge && React.createElement(Lozenge, Object.assign({}, lozenge)))),
            header && (React.createElement(Header, { dangerouslySetInnerHTML: { __html: purify(header) } })),
            subheader && (React.createElement(SmallText, { dangerouslySetInnerHTML: { __html: purify(subheader) } })),
            accounts && (React.createElement(SmallText, { dangerouslySetInnerHTML: { __html: purify(accounts) } })),
            React.createElement(StyledDivider, null)),
        React.createElement(List, { as: "ul", column: index + 1, length: length, isLastElement: !legalDisclaimer && !button, hasDropShadow: hasDropShadow }, benefits &&
            benefits.map((benefit, i) => benefit && (React.createElement(Benefit, { key: `benefit-${i}` },
                React.createElement(Checkmark, { strokeWidth: "1", "aria-hidden": "true" }),
                React.createElement(BenefitText, Object.assign({}, benefit)))))),
        button && button.children && (React.createElement(ButtonContainer, Object.assign({ column: index + 1, length: length, isLastElement: !legalDisclaimer, hasDropShadow: hasDropShadow }, eventParamAttributes(Object.assign(Object.assign({}, eventParams), { componentName: 'STOREFRONT-PLAN', componentPosition: index, componentType: 'product' }))), !currentPlanButtonHidden && (React.createElement(React.Fragment, null,
            React.createElement(PrimaryButton, Object.assign({ fullWidth: true }, buttonProps)),
            secondaryButton && platform !== 'ios' && (React.createElement(SecondaryButton, Object.assign({ fullWidth: true, backgroundColor: white }, secondaryButtonProps))))))),
        legalDisclaimer && (React.createElement(LegalDisclaimerWrapper, { column: index + 1, length: length, hasDropShadow: hasDropShadow }, !currentPlanButtonHidden && (React.createElement(LegalDisclaimer, { text: legalDisclaimer }))))));
};
export default Plan;
//# sourceMappingURL=plan.js.map