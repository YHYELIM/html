import React, { memo, useContext } from 'react';
import { green157 } from '@spotify-internal/encore-web';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import { backgroundBlue, Wrapper, Content, SecondaryHeader, Header, ButtonGroup, SupHeader, } from './components';
import DirectionContext from '../../configuration/context/direction';
import Button from '../../atoms/Button';
import { purify } from '../../utils/helpers';
export function HomepageHero(props) {
    const direction = useContext(DirectionContext);
    const { button, buttonHref, eventParams, header, subheader, label } = props;
    const buttonProps = Object.assign(Object.assign({}, button), { color: backgroundBlue, backgroundColor: green157, href: buttonHref });
    return (React.createElement(Wrapper, Object.assign({ color: green157, direction: direction }, eventParamAttributes(eventParams)),
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
            button && (React.createElement(ButtonGroup, null,
                React.createElement(Button, Object.assign({ isPreloader: true }, buttonProps)))))));
}
export default memo(HomepageHero);
//# sourceMappingURL=homepage-hero.js.map