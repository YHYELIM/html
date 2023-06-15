import React, { memo } from 'react';
import Container from '../../atoms/Container';
import Header from '../../atoms/Header';
import Comparison from './comparison';
import AdditionalComparisons from './additional-comparisons';
import { Content, LegalTerms } from './components';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
export function Comparisons({ container, header, data, eventParams, }) {
    if (!data) {
        return null;
    }
    const [card, ...rest] = data;
    return (React.createElement(Container, Object.assign({}, container, eventParamAttributes(eventParams)),
        header && React.createElement(Header, Object.assign({}, header)),
        React.createElement(Content, null,
            React.createElement(Comparison, Object.assign({}, card)),
            rest && rest.length > 0 && React.createElement(AdditionalComparisons, { data: rest })),
        card.legalDisclaimer && React.createElement(LegalTerms, { text: card.legalDisclaimer })));
}
export default memo(Comparisons);
//# sourceMappingURL=comparisons.js.map