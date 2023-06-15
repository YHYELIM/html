var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { ButtonPrimary, createBasicColorSet, TextLink, } from '@spotify-internal/encore-web';
import MarketContext from '../../configuration/context/market';
import ButtonContext from '../../configuration/context/button';
import { isArabicMarket, purify } from '../../utils/helpers';
import DirectionContext from '../../configuration/context/direction';
import DeviceContext from '../../configuration/context/device';
const prependLinkWithMarket = (link, market) => {
    if (!market) {
        return link;
    }
    let output = link;
    if (output[0] === '/' && output[1] !== '/') {
        const parsedOutput = output.split('/');
        if (parsedOutput[1] !== market) {
            output = `/${market}${link}`;
        }
    }
    return output;
};
const ImageButton = styled.img `
  margin: 0 auto;
`;
const StyledButtonPrimary = styled(ButtonPrimary) `
  ${({ useUppercase }) => useUppercase &&
    `
    text-transform: uppercase;
  `}
`;
const Button = styled(ButtonComponent) `
  text-decoration: none !important;
  justify-content: center;
  ${({ border = '' }) => border && `border: ${border};`}
  ${({ borderValues }) => (borderValues === null || borderValues === void 0 ? void 0 : borderValues.width) &&
    `border: ${borderValues.width}px solid ${borderValues.color || 'currentColor'};`}
`;
function ButtonComponent(props) {
    var _a;
    const { backgroundColor = '#000', color, isPreloader = false, children, image, href, label, insertMarket = true, dataEventAction, dataEventCategory, dataEventLabel } = props, rest = __rest(props, ["backgroundColor", "color", "isPreloader", "children", "image", "href", "label", "insertMarket", "dataEventAction", "dataEventCategory", "dataEventLabel"]);
    const [hasHovered, setHasHovered] = useState(false);
    const { useUppercase } = useContext(ButtonContext);
    const market = useContext(MarketContext);
    const direction = useContext(DirectionContext);
    const device = useContext(DeviceContext);
    const configuredHref = insertMarket && href ? prependLinkWithMarket(href, market) : href;
    const shouldRender = !(device.platform === 'ios' && !(href === null || href === void 0 ? void 0 : href.startsWith('#')));
    const handleCtaHover = (e) => {
        if (isPreloader && !hasHovered) {
            const hintNode = document.createElement('link');
            hintNode.rel = 'prerender';
            hintNode.as = 'document';
            hintNode.dataset.referralId = 'button';
            hintNode.dataset.referralType = 'primary-cta';
            hintNode.href = e.currentTarget.href;
            document.head.appendChild(hintNode);
            setHasHovered(true);
        }
    };
    return shouldRender ? (React.createElement("div", null,
        !image && (React.createElement(StyledButtonPrimary, Object.assign({ UNSAFE_colorSet: createBasicColorSet(backgroundColor, color), "aria-label": label, "data-event-category": dataEventCategory, "data-event-action": dataEventAction, "data-event-label": dataEventLabel, href: configuredHref, onMouseEnter: handleCtaHover, tabIndex: 0, useUppercase: useUppercase && !isArabicMarket(market, direction) }, rest), children && (React.createElement("span", { dangerouslySetInnerHTML: { __html: purify(children) } })))),
        image && (React.createElement(TextLink, { "aria-label": label, standalone: true, href: configuredHref, onMouseEnter: handleCtaHover },
            React.createElement(ImageButton, { src: image.src, alt: label ? '' : (_a = image.alt) !== null && _a !== void 0 ? _a : '' }))))) : (React.createElement(React.Fragment, null));
}
export default Button;
//# sourceMappingURL=button.js.map