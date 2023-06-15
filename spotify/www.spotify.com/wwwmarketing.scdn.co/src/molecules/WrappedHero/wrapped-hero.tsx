import React, { memo, useContext } from 'react';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import { Wrapper, Content, SecondaryHeader, Header, ButtonGroup, SupHeader, BottomLink, StyledAppStoreBadge, } from './components';
import DirectionContext from '../../configuration/context/direction';
import MarketContext from '../../configuration/context/market';
import Button from '../../atoms/Button';
import { purify } from '../../utils/helpers';
export function WrappedHero(props) {
    const direction = useContext(DirectionContext);
    const market = useContext(MarketContext);
    const { container, mobileButtons, tabletButtons, desktopButtons, eventParams, header, label, subheader, bottomLink, } = props;
    const renderButtonOrBadge = (button, index) => {
        const sharedProps = Object.assign({ key: `button-${index}`, isPreloader: true }, button);
        return button.platform ? (React.createElement(StyledAppStoreBadge, Object.assign({}, sharedProps))) : (React.createElement(Button, Object.assign({}, sharedProps)));
    };
    return (React.createElement(Wrapper, Object.assign({}, container, { direction: direction, market: market }, eventParamAttributes(eventParams)),
        React.createElement(Content, null,
            label && (React.createElement(SupHeader, Object.assign({}, label, { dangerouslySetInnerHTML: {
                    __html: purify(label.text),
                } }))),
            header && (React.createElement(Header, Object.assign({}, header, { dangerouslySetInnerHTML: {
                    __html: purify(header.text),
                } }))),
            subheader && (React.createElement("div", { className: "subheader" },
                React.createElement(SecondaryHeader, { dangerouslySetInnerHTML: {
                        __html: purify(subheader.text),
                    } }))),
            mobileButtons && (React.createElement(ButtonGroup, { className: "mobile-only" }, mobileButtons.map((button, index) => renderButtonOrBadge(button, index)))),
            tabletButtons && (React.createElement(ButtonGroup, { className: "tablet-only" }, tabletButtons.map((button, index) => renderButtonOrBadge(button, index)))),
            desktopButtons && (React.createElement(ButtonGroup, { className: "desktop-only" }, desktopButtons.map((button, index) => renderButtonOrBadge(button, index)))),
            bottomLink && (React.createElement(BottomLink, Object.assign({}, bottomLink, { dangerouslySetInnerHTML: {
                    __html: purify(bottomLink.text),
                } }))))));
}
export default memo(WrappedHero);
//# sourceMappingURL=wrapped-hero.js.map