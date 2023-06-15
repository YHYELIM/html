import React, { memo } from 'react';
import { BoxShadow, Headline, Price, Month, Subheadline, Benefits, Benefit, StyledButton, } from './components';
import { purify } from '../../utils/helpers';
function Comparison({ headline, subheadline, price, billingPeriod, benefits, cta, }) {
    return (React.createElement(BoxShadow, null,
        React.createElement(Headline, { dangerouslySetInnerHTML: { __html: purify(headline) } }),
        React.createElement(Price, null,
            React.createElement("span", { dangerouslySetInnerHTML: { __html: purify(price) } }),
            React.createElement(Month, null,
                " / ",
                billingPeriod)),
        React.createElement(Subheadline, null,
            subheadline,
            " "),
        React.createElement(Benefits, null, benefits &&
            benefits.map((benefit, i) => (React.createElement(Benefit, Object.assign({ key: `comparison-benefit-${i}` }, benefit))))),
        cta && React.createElement(StyledButton, Object.assign({}, cta))));
}
export default memo(Comparison);
//# sourceMappingURL=comparison.js.map