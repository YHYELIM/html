import React, { memo, useContext } from 'react';
import cssjanus from 'cssjanus';
import { Wrapper, Main, Content, LegalContainer, LegalText, SecondaryHeader, Header, Logos, Logo, ButtonGroup, Benefits, Benefit, ImageStyle, ImageContainer, Label, SharingContainer, StyledAppStoreBadge, } from './components';
import Button from '../../atoms/Button';
import Sharing from '../../atoms/Sharing';
import DirectionContext from '../../configuration/context/direction';
import { eventParamAttributes, inViewEventAttributes, } from '@spotify-internal/touchdown-analytics';
import { isArabicMarket, purify } from '../../utils/helpers';
import MarketContext from '../../configuration/context/market';
const replaceBackgrounds = (backgroundObj) => {
    const targets = ['mobile', 'tablet', 'desktop'];
    targets.forEach(target => {
        if (backgroundObj[target]) {
            backgroundObj[target] = cssjanus.transform(backgroundObj[target]);
        }
    });
    return backgroundObj;
};
export function Hero(props) {
    var _a;
    const direction = useContext(DirectionContext);
    const market = useContext(MarketContext);
    const { container, images, supheaders, header, subheaders, benefits, buttons, legalDisclaimer, size = 'large', textColor, sharing, eventParams, proposition, ignoreLegacySizeProp, label, } = props;
    let updatedProps;
    if (props.background && direction === 'rtl') {
        updatedProps = JSON.parse(JSON.stringify(props));
        updatedProps.background = replaceBackgrounds(props.background);
    }
    const wrapperColor = textColor || (container === null || container === void 0 ? void 0 : container.color);
    const logos = images &&
        !!images.length &&
        images
            .filter(image => !!image)
            .map((image) => typeof image === 'string'
            ? { src: image, size: 'small', alt: 'hero_image' }
            : {
                src: image.src,
                size: image.size || 'small',
                alt: image.alt || 'hero_image',
            });
    const renderButtonOrBadge = (button, index) => {
        const sharedProps = Object.assign({ key: `button-${index}`, isPreloader: true }, button);
        return button.platform ? (React.createElement(StyledAppStoreBadge, Object.assign({}, sharedProps))) : (React.createElement(Button, Object.assign({}, sharedProps)));
    };
    return (React.createElement(Wrapper, Object.assign({}, (updatedProps || props), container, { size: size, ignoreLegacySizeProp: ignoreLegacySizeProp, color: wrapperColor }, eventParamAttributes(Object.assign(Object.assign({}, eventParams), { componentType: 'promo' })), inViewEventAttributes()),
        React.createElement(Main, null,
            React.createElement(Content, { hasProposition: !!(proposition === null || proposition === void 0 ? void 0 : proposition.component), disablePaddings: container === null || container === void 0 ? void 0 : container.disablePaddings },
                logos && !!logos.length && (React.createElement(Logos, { hasProposition: !!(proposition === null || proposition === void 0 ? void 0 : proposition.component) }, logos.map((logo) => logo && (React.createElement(Logo, { alt: logo.alt, size: logo.size, src: logo.src, key: `hero-images-${logo.src}` }))))),
                label && (React.createElement(Label, { dangerouslySetInnerHTML: {
                        __html: purify(label.text),
                    } })),
                supheaders &&
                    supheaders.map((supheader, index) => (React.createElement("div", { key: `supheader-${index}` },
                        React.createElement(SecondaryHeader, { fontWeightValue: supheader.fontWeight, fontSizeValue: supheader.fontSize, width: supheader.width, dangerouslySetInnerHTML: {
                                __html: purify(supheader.text),
                            } })))),
                header && (React.createElement("div", null,
                    React.createElement(Header, { fontSizeValue: header.fontSize, width: header.width, addSpacing: isArabicMarket(market, direction) ? true : false, dangerouslySetInnerHTML: {
                            __html: purify(header.text),
                        } }))),
                subheaders &&
                    subheaders.map((subheader, index) => (React.createElement("div", { key: `subheader-${index}` },
                        React.createElement(SecondaryHeader, { isSub: true, fontWeightValue: subheader.fontWeight, fontSizeValue: subheader.fontSize, width: subheader.width, dangerouslySetInnerHTML: {
                                __html: purify(subheader.text),
                            } })))),
                benefits && !!benefits.length && (React.createElement(Benefits, null, benefits.map((benefit, i) => (React.createElement(Benefit, { key: `hero-benefit-${i}` }, benefit))))),
                sharing && (React.createElement(SharingContainer, { textAlign: container === null || container === void 0 ? void 0 : container.textAlign },
                    React.createElement(Sharing, Object.assign({}, sharing)))),
                buttons && (React.createElement(ButtonGroup, null, buttons.map((button, index) => renderButtonOrBadge(button, index)))),
                legalDisclaimer && (React.createElement(LegalContainer, { disablePadding: (_a = container === null || container === void 0 ? void 0 : container.disablePaddings) === null || _a === void 0 ? void 0 : _a.end },
                    React.createElement(LegalText, { text: legalDisclaimer })))),
            (proposition === null || proposition === void 0 ? void 0 : proposition.component) && (React.createElement(ImageContainer, { verticalAlignment: proposition.verticalAlignment },
                React.createElement(ImageStyle, { sources: proposition.component.props.sources, verticalAlignment: proposition.verticalAlignment }))))));
}
export default memo(Hero);
//# sourceMappingURL=hero.js.map