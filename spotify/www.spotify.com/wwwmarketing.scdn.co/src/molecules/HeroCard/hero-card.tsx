import React, { memo, useContext } from 'react';
import { eventParamAttributes, inViewEventAttributes, } from '@spotify-internal/touchdown-analytics';
import { Wrapper, Card, Content, Propositions, CustomHeader, ImageStyle, ImageContainer, VideoContainer, ButtonGroup, LegalContainer, LegalText, } from './components';
import DirectionContext from '../../configuration/context/direction';
import InlineVideo from '../../atoms/InlineVideo';
import Button from '../../atoms/Button';
export function HeroCard(props) {
    const direction = useContext(DirectionContext);
    const { container, background, header, buttons, legalDisclaimer, proposition, eventParams, } = props;
    return (React.createElement(Wrapper, Object.assign({ direction: direction }, container, eventParamAttributes(eventParams), inViewEventAttributes()),
        React.createElement(Card, { background: background },
            React.createElement(Content, null,
                header && React.createElement(CustomHeader, Object.assign({ disableEndMargin: true }, header)),
                !!(buttons === null || buttons === void 0 ? void 0 : buttons.length) && (React.createElement(ButtonGroup, null, buttons.map((button, index) => (React.createElement(Button, Object.assign({ key: `button-${index}` }, button)))))),
                legalDisclaimer && (React.createElement(LegalContainer, null,
                    React.createElement(LegalText, { text: legalDisclaimer })))),
            React.createElement(Propositions, null,
                (proposition === null || proposition === void 0 ? void 0 : proposition.type) === 'image' && (React.createElement(ImageContainer, null,
                    React.createElement(ImageStyle, { role: "img", sources: proposition.props.sources }))),
                (proposition === null || proposition === void 0 ? void 0 : proposition.type) === 'inlinevideo' && (React.createElement(VideoContainer, null,
                    React.createElement(InlineVideo, Object.assign({}, proposition.props))))))));
}
export default memo(HeroCard);
//# sourceMappingURL=hero-card.js.map