import React, { memo } from 'react';
import Benefit from './benefit';
import Container from '../../atoms/Container';
import { Content, ButtonWrapper, StyledHeader, ButtonGroupText, Legal, } from './components';
import Button from '../../atoms/Button/button';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import { purify } from '../../utils/helpers';
import { StyledAppStoreBadge } from '../Hero/components';
export function Benefits({ header, benefits = [], verticalBenefits, legalDisclaimers = [], buttons = [], buttonGroupText, container, size, eventParams, }) {
    const hasImages = buttons ? buttons.every(({ image }) => image) : false;
    const renderButtonOrBadge = (button, index) => {
        const sharedProps = Object.assign({ key: `benefits-button-${index}`, isPreloader: true }, button);
        return button.platform ? (React.createElement(StyledAppStoreBadge, Object.assign({}, sharedProps))) : (React.createElement(Button, Object.assign({}, sharedProps)));
    };
    return (React.createElement(Container, Object.assign({}, eventParamAttributes(eventParams), container),
        header && React.createElement(StyledHeader, Object.assign({}, header)),
        React.createElement(Content, { verticalBenefits: verticalBenefits || false }, benefits.map((benefit, i) => (React.createElement(Benefit, Object.assign({ key: `benefit-${i}` }, benefit, { size: size }))))),
        !!buttons.length && (React.createElement(ButtonWrapper, { hasImages: hasImages },
            buttonGroupText && (React.createElement(ButtonGroupText, { dangerouslySetInnerHTML: { __html: purify(buttonGroupText) } })),
            buttons.map((button, i) => renderButtonOrBadge(button, i)))),
        legalDisclaimers.map((legalDisclaimer, i) => (React.createElement(Legal, { key: `legal-${i}`, text: legalDisclaimer })))));
}
export default memo(Benefits);
//# sourceMappingURL=benefits.js.map