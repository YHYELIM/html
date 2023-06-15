import React, { memo } from 'react';
import { Wrapper, Main, Header, Headline, SubHeadline, ButtonGroup, LegalDisclaimer, } from '../components';
import Button from '../../../atoms/Button';
import { purify } from '../../../utils/helpers';
function Claim(props) {
    const { logo, headline, subheadline, ctaText, ctaUrl, legalDisclaimer } = props;
    return (React.createElement(Wrapper, null,
        logo && React.createElement(Header, { logo: logo }),
        React.createElement(Main, null,
            headline && (React.createElement(Headline, { dangerouslySetInnerHTML: { __html: purify(headline) } })),
            subheadline && (React.createElement(SubHeadline, { dangerouslySetInnerHTML: {
                    __html: purify(subheadline),
                } })),
            ctaUrl && ctaText && (React.createElement(ButtonGroup, null,
                React.createElement(Button, { isPreloader: true, href: ctaUrl }, ctaText)))),
        legalDisclaimer && (React.createElement(LegalDisclaimer, { dangerouslySetInnerHTML: {
                __html: purify(legalDisclaimer),
            } }))));
}
export default memo(Claim);
//# sourceMappingURL=claim.js.map