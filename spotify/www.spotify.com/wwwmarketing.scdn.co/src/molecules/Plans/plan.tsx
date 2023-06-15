import React, { useState, useEffect, memo } from 'react';
import PaymentMethods from './payment-methods';
import { Content, Description, Header, Promotion, Container, Column, ColumnHeader, BoxShadow, Select, StyledButton, } from './components';
import { LegalDisclaimer } from './components';
import { purify } from '../../utils/helpers';
function Plan({ header, defaultPlan, plans }) {
    const [selectedPlan, setSelectedPlan] = useState(0);
    useEffect(() => {
        if (defaultPlan && plans && defaultPlan < plans.length) {
            setSelectedPlan(defaultPlan);
        }
    }, [defaultPlan, plans]);
    const handleSelect = (e) => {
        setSelectedPlan(parseInt(e.target.value, 10));
    };
    if (!plans || !plans.length) {
        return null;
    }
    const { header: planHeader = '', supheader = '', subheader = '', paymentMethods = [], button = null, legalDisclaimer = '', } = plans[selectedPlan];
    return (React.createElement(Container, { title: "plan" },
        React.createElement(Column, null,
            React.createElement(ColumnHeader, null, header),
            React.createElement(BoxShadow, null,
                React.createElement(Content, null,
                    supheader && (React.createElement(Promotion, { dangerouslySetInnerHTML: { __html: purify(supheader) } })),
                    React.createElement(Header, { dangerouslySetInnerHTML: { __html: purify(planHeader) } }),
                    React.createElement(Description, { dangerouslySetInnerHTML: { __html: purify(subheader) } }),
                    React.createElement(PaymentMethods, { data: paymentMethods })),
                plans.length > 1 && (React.createElement(Select, { onChange: handleSelect, defaultValue: defaultPlan }, plans.map(({ button: { children }, secondaryCtaText = '' }, i) => (React.createElement("option", { key: `multi-plan-${i}`, value: i }, secondaryCtaText || children))))),
                button && React.createElement(StyledButton, Object.assign({}, button)),
                React.createElement(LegalDisclaimer, { text: legalDisclaimer })))));
}
export default memo(Plan);
//# sourceMappingURL=plan.js.map