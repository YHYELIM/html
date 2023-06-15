import React, { useContext } from 'react';
import BoxShadow from '../../atoms/BoxShadow';
import { Comparisons, Comparison as StyledComparison, Link, } from './components';
import { purify } from '../../utils/helpers';
import DeviceContext from '../../configuration/context/device';
function AdditionalComparisons({ data }) {
    const device = useContext(DeviceContext);
    if (!data) {
        return null;
    }
    return (React.createElement(BoxShadow, null,
        React.createElement(Comparisons, null, data.map(({ headline, cta }, i) => (React.createElement(StyledComparison, { key: `additional-${i}` },
            React.createElement("span", { dangerouslySetInnerHTML: { __html: purify(headline) } }),
            cta && device.platform !== 'ios' && React.createElement(Link, Object.assign({ standalone: true }, cta))))))));
}
export default AdditionalComparisons;
//# sourceMappingURL=additional-comparisons.js.map