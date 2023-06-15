import React, { memo } from 'react';
import Container from '../../atoms/Container';
import Header from '../../atoms/Header';
import Checkmark from '../../atoms/Checkmark';
import { purify } from '../../utils/helpers';
import { Wrapper, Benefit, BenefitContent, BenefitStatus, BenefitStatusText, Plan, PlanInfo, StyledButton, Differentiator, PlanName, PlanPrice, } from './components';
import { eventParamAttributes, inViewEventAttributes, } from '@spotify-internal/touchdown-analytics';
export function PlansComparison({ header, labels, container, plans, benefits, }) {
    return (React.createElement(Container, Object.assign({ disablePaddings: { before: true, after: true } }, container),
        header && React.createElement(Header, Object.assign({}, header)),
        React.createElement(Wrapper, { totalPlans: plans.length },
            React.createElement(Benefit, { "aria-hidden": true }),
            plans.map(({ name, price, button, highlight, eventParams }, index) => (React.createElement(Plan, Object.assign({ highlight: highlight }, eventParamAttributes(Object.assign(Object.assign({}, eventParams), { componentName: 'COMPARISON-PLAN', componentPosition: index, componentType: 'product' })), inViewEventAttributes()),
                (highlight === null || highlight === void 0 ? void 0 : highlight.text) && (React.createElement(Differentiator, null, highlight.text)),
                React.createElement(PlanInfo, null,
                    React.createElement(PlanName, { id: `plan-${index}` }, name),
                    React.createElement(PlanPrice, { dangerouslySetInnerHTML: { __html: purify(price) } }),
                    React.createElement(StyledButton, Object.assign({}, button)))))),
            benefits.map(({ description }, benefitIndex) => (React.createElement(React.Fragment, null,
                React.createElement(Benefit, { id: `benefit-${benefitIndex}` },
                    React.createElement(BenefitContent, null, description)),
                plans.map(({ benefits: planBenefits, highlight }, planIndex) => (React.createElement(BenefitStatus, { highlight: highlight, "aria-labelledby": `plan-${planIndex} benefit-${benefitIndex}` },
                    planBenefits[benefitIndex] === true && (React.createElement(Checkmark, { strokeWidth: "1", label: labels.INCLUDED })),
                    !planBenefits[benefitIndex] && (React.createElement(BenefitStatusText, { as: "img", "aria-label": labels.NOT_INCLUDED })),
                    typeof planBenefits[benefitIndex] === 'string' && (React.createElement(BenefitStatusText, { dangerouslySetInnerHTML: {
                            __html: purify(planBenefits[benefitIndex]),
                        } })))))))))));
}
export default memo(PlansComparison);
//# sourceMappingURL=plans-comparison.js.map