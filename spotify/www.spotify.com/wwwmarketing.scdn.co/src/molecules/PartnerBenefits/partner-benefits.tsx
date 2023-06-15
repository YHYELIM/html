import React, { memo } from 'react';
import { Wrapper, Content, List, Entry, Supheader, Header, Subheader, Summary, Offering, Logo, ButtonGroup, LegalDisclaimer, } from './components';
import Button from '../../atoms/Button';
import { deprecateImageField, purify } from '../../utils/helpers';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
function migrateImage({ benefit }) {
    if (benefit.image) {
        return deprecateImageField({
            oldProp: 'image',
            newProp: 'imageSources',
            smallValue: benefit.image,
        });
    }
    if (benefit.imageSources) {
        return benefit.imageSources;
    }
    return { small: { '1x': '' } };
}
export function PartnerBenefits({ data, header, color, backgroundColor, borderColor, button, legalDisclaimer, container, eventParams, }) {
    return (React.createElement(Wrapper, Object.assign({ color: color, backgroundColor: backgroundColor }, container, eventParamAttributes(eventParams)),
        React.createElement(Content, null,
            React.createElement(List, null, data &&
                data.map((benefit, i) => (React.createElement(Entry, { key: `benefit-${i}`, borderColor: borderColor },
                    (benefit.image || benefit.imageSources) && (React.createElement(Logo, { sources: migrateImage({ benefit }) })),
                    React.createElement(Summary, { dangerouslySetInnerHTML: { __html: purify(benefit.content) } }))))),
            React.createElement(Offering, { borderColor: borderColor },
                header && header.supheader && (React.createElement(Supheader, { dangerouslySetInnerHTML: { __html: purify(header.supheader) } })),
                header && header.text && (React.createElement(Header, { dangerouslySetInnerHTML: { __html: purify(header.text) } })),
                header && header.subheader && (React.createElement(Subheader, { dangerouslySetInnerHTML: { __html: purify(header.subheader) } })),
                button && (React.createElement(ButtonGroup, { role: "button" },
                    React.createElement(Button, Object.assign({}, button))))),
            legalDisclaimer && (React.createElement(LegalDisclaimer, { color: color, text: legalDisclaimer })))));
}
export default memo(PartnerBenefits);
//# sourceMappingURL=partner-benefits.js.map