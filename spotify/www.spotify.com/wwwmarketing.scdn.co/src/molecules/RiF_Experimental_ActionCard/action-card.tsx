import React, { memo } from 'react';
import { Wrapper, ButtonGroup, Card, ImageStyle, LegalDisclaimer, Body, CustomHeader, } from './components';
import { eventParamAttributes, inViewEventAttributes, } from '@spotify-internal/touchdown-analytics';
import Button from '../../atoms/Button';
import { purify } from '../../utils/helpers';
export function ActionCard({ container, headline, card, secondaryColor, eventParams, }) {
    return (React.createElement(Wrapper, Object.assign({}, container, eventParamAttributes(Object.assign(Object.assign({}, eventParams), { componentType: 'promo' })), inViewEventAttributes(), { secondaryColor: secondaryColor }),
        headline && React.createElement(CustomHeader, Object.assign({}, headline)),
        card && (React.createElement(Card, { backgroundColor: card.backgroundColor },
            card.logo && (React.createElement(ImageStyle, { role: "img", sources: card.logo.sources, "aria-label": card.logo.label })),
            card.content && (React.createElement(Body, { variant: "ballad", condensed: true, dangerouslySetInnerHTML: { __html: purify(card.content) } })),
            card.buttons && card.buttons.length !== 0 && (React.createElement(ButtonGroup, null, card.buttons.map((button, index) => (React.createElement(Button, Object.assign({ key: `button-${index}` }, button)))))),
            card.legalDisclaimer && (React.createElement(LegalDisclaimer, { text: card.legalDisclaimer }))))));
}
export default memo(ActionCard);
//# sourceMappingURL=action-card.js.map