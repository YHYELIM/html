import React, { memo } from 'react';
import { Wrapper, Content, CardContainer, ImageStyle, LegalDisclaimer, } from './components';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import Header from '../../atoms/Header';
import CounterList from '../CounterList';
export function ActionCard({ container, headline, cardBackgroundColor, logo, counterList, legalDisclaimer, secondaryColor, eventParams, }) {
    return (React.createElement(Wrapper, Object.assign({}, container, eventParamAttributes(eventParams), { secondaryColor: secondaryColor }),
        React.createElement(Content, null,
            headline && React.createElement(Header, Object.assign({}, headline)),
            React.createElement(CardContainer, { backgroundColor: cardBackgroundColor },
                logo && (React.createElement(ImageStyle, { role: "img", sources: logo.sources, "aria-label": logo.label })),
                counterList && (React.createElement(CounterList, { counterColor: counterList.counterColor, label: counterList.label, counters: counterList.counters })),
                legalDisclaimer && React.createElement(LegalDisclaimer, { text: legalDisclaimer })))));
}
export default memo(ActionCard);
//# sourceMappingURL=action-card.js.map