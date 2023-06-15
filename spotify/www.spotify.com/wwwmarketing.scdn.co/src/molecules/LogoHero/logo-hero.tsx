import React, { memo } from 'react';
import { Wrapper, Main, Content, SecondaryHeader, Logo, ButtonGroup, Image, ImageContainer, LegalContainer, LegalText, } from './components';
import Button from '../../atoms/Button';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import { purify } from '../../utils/helpers';
export function LogoHero(props) {
    const { container, hasNavbar, logo, subheaders, buttons, downloadButtonGroupText, downloadButtons, color = '#fff', image, legalDisclaimer, eventParams, } = props;
    const hasImage = image ? true : false;
    return (React.createElement(Wrapper, Object.assign({}, props, { hasImage: hasImage, color: color }, container, { role: "banner", hasNavbar: hasNavbar }, eventParamAttributes(eventParams)),
        React.createElement(Main, { hasImage: hasImage },
            React.createElement(Content, null,
                logo && (React.createElement(Logo, { src: logo.src, alt: logo.alt, size: logo.size, hasImage: hasImage })),
                subheaders &&
                    subheaders.map((subheader, index) => (React.createElement("div", { key: `subheader-${index}` },
                        React.createElement(SecondaryHeader, Object.assign({}, subheader, { dangerouslySetInnerHTML: {
                                __html: purify(subheader.text),
                            } }))))),
                buttons && (React.createElement(React.Fragment, null, buttons.map((button, index) => (React.createElement(Button, Object.assign({ key: `button-${index}`, isPreloader: true }, button)))))),
                downloadButtons && (React.createElement(ButtonGroup, { hasImage: hasImage },
                    downloadButtonGroupText && (React.createElement("p", { dangerouslySetInnerHTML: {
                            __html: purify(downloadButtonGroupText),
                        } })),
                    downloadButtons.map((button, index) => (React.createElement(Button, Object.assign({ key: `download-button-${index}`, isPreloader: true }, button)))))),
                legalDisclaimer && (React.createElement(LegalContainer, null,
                    React.createElement(LegalText, { text: legalDisclaimer })))),
            image && (React.createElement(ImageContainer, { desktopPosition: image.position.desktop },
                React.createElement(Image, { role: "img", "aria-label": image.alt, desktop: image.src.desktop, tablet: image.src.tablet, mobile: image.src.mobile }))))));
}
export default memo(LogoHero);
//# sourceMappingURL=logo-hero.js.map