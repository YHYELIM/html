import React, { memo } from 'react';
import { Text, CardContainer, AboveCard, Card, Header, LegalText, CardHeader, Link, StyledContainer, } from './components';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import { purify } from '../../utils/helpers';
export function SingleCard({ container, header, subheaders, body, legalDisclaimer, dataEventName, dataEventLabelLink, dataEventLabelLegal, supheader, link, theme, eventParams, }) {
    const dataLinkEventProps = Object.assign(Object.assign({}, (dataEventName && { 'data-event-name': dataEventName })), (dataEventLabelLink && { 'data-event-label': dataEventLabelLink }));
    const dataLegalEventProps = Object.assign(Object.assign({}, (dataEventName && { 'data-event-name': dataEventName })), (dataEventLabelLegal && { 'data-event-label': dataEventLabelLegal }));
    return (React.createElement(StyledContainer, Object.assign({}, container, eventParamAttributes(eventParams)),
        React.createElement(CardContainer, null,
            (supheader || link) && (React.createElement(AboveCard, null,
                supheader && (React.createElement(Text, { variant: "canon", dangerouslySetInnerHTML: {
                        __html: purify(supheader),
                    } })),
                link && (React.createElement(Link, Object.assign({ href: link.url, onClick: link.onClick }, dataLinkEventProps), link.text)))),
            React.createElement(Card, Object.assign({}, theme),
                React.createElement(CardHeader, Object.assign({}, theme),
                    header && (React.createElement(Header, { variant: "balladBold", dangerouslySetInnerHTML: {
                            __html: purify(header),
                        } })),
                    body && (React.createElement(Text, { variant: "finale", dangerouslySetInnerHTML: {
                            __html: purify(body),
                        } })),
                    subheaders &&
                        !!!body &&
                        subheaders.map((subheader, x) => {
                            return (React.createElement(Text, { variant: "heading4", key: x, dangerouslySetInnerHTML: {
                                    __html: purify(subheader),
                                } }));
                        })),
                legalDisclaimer && (React.createElement(LegalText, Object.assign({ text: legalDisclaimer }, dataLegalEventProps)))))));
}
export default memo(SingleCard);
//# sourceMappingURL=single-card.js.map