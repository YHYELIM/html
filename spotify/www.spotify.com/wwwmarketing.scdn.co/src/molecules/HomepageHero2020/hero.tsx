import React, { memo, useContext } from 'react';
import cssjanus from 'cssjanus';
import { Wrapper, Main, Content, LegalContainer, LegalText, SecondaryHeader, Header, HeroImage, HeroImageContainer, ButtonGroup, SupHeader, SupHeaderMobile, } from './components';
import Button from '../../atoms/Button';
import DirectionContext from '../../configuration/context/direction';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import { purify } from '../../utils/helpers';
const replaceBackgrounds = (backgroundObj) => {
    const targets = ['mobile', 'tablet', 'desktop'];
    targets.forEach(target => {
        if (backgroundObj[target]) {
            backgroundObj[target] = cssjanus.transform(backgroundObj[target]);
        }
    });
    return backgroundObj;
};
export function Hero2020(props) {
    const { container, header, subheaders, buttons, legalDisclaimer, size = 'large', textColor, eventParams, } = props;
    const direction = useContext(DirectionContext);
    const updatedProps = JSON.parse(JSON.stringify(props));
    if (props.background && direction === 'rtl') {
        updatedProps.background = replaceBackgrounds(props.background);
    }
    const wrapperColor = textColor || (container === null || container === void 0 ? void 0 : container.color) || '#fff';
    return (React.createElement(Wrapper, Object.assign({}, updatedProps, container, { size: size, color: wrapperColor }, eventParamAttributes(eventParams)),
        React.createElement(Main, null,
            React.createElement(Content, null,
                React.createElement(SupHeader, null, "Spotify Premium"),
                header && (React.createElement("div", null,
                    React.createElement(Header, Object.assign({}, header, { dangerouslySetInnerHTML: {
                            __html: purify(header.text),
                        } })))),
                subheaders &&
                    subheaders.map((subheader, index) => (React.createElement("div", { className: "subheader", key: `subheader-${index}` },
                        React.createElement(SecondaryHeader, { isSub: true, dangerouslySetInnerHTML: {
                                __html: purify(subheader.text),
                            } })))),
                buttons && (React.createElement(ButtonGroup, null, buttons.map((button, index) => (React.createElement(Button, Object.assign({ key: `button-${index}`, isPreloader: true }, button)))))),
                legalDisclaimer && (React.createElement(LegalContainer, null,
                    React.createElement(LegalText, { dangerouslySetInnerHTML: {
                            __html: purify(legalDisclaimer),
                        } })))),
            React.createElement(HeroImageContainer, null,
                React.createElement(SupHeaderMobile, null, "Spotify Premium"),
                React.createElement(HeroImage, Object.assign({}, (updatedProps || props), container))))));
}
export default memo(Hero2020);
//# sourceMappingURL=hero.js.map