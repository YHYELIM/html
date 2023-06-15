import React from 'react';
import { PlansTitle, HeadingContainer, ListContainer, PlansSubtitle, } from './components';
import CollapsablePlan from './collapsable-plan';
import { purify } from '../../utils/helpers';
const CollapsablePlansList = ({ plan: planParent, }) => {
    const filterCurrentProduct = planParent.plans.filter(plan => plan.isUsersCurrentProduct === true).length;
    const currentProductBanner = filterCurrentProduct === 1 ? true : false;
    return (React.createElement("div", null,
        React.createElement(HeadingContainer, null,
            planParent.header && (React.createElement(PlansTitle, { variant: "cello", dangerouslySetInnerHTML: { __html: purify(planParent.header) } })),
            planParent.subheader && (React.createElement(PlansSubtitle, { variant: "viola", dangerouslySetInnerHTML: { __html: purify(planParent.subheader) } }))),
        React.createElement(ListContainer, null, planParent.plans.map((plan, i) => (React.createElement(CollapsablePlan, { plan: plan, index: i, key: `collapsable-plan-${i}`, currentProductText: planParent.currentProductText, currentProductBanner: currentProductBanner }))))));
};
export default CollapsablePlansList;
//# sourceMappingURL=collapsable-plans-list.js.map