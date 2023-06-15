import React, { memo } from 'react';
import { white, black } from '@spotify-internal/encore-web';
import { Wrapper, Content, TextContainer, Header, PhoneContainer, StyledPhoneSvg, PhoneContent, Image, StyledButton, } from './components';
import { purify } from '../../utils/helpers';
export function FreeHero(props) {
    const { button, header, image } = props;
    const buttonProps = Object.assign(Object.assign({}, button), { color: black, backgroundColor: white });
    return (React.createElement(Wrapper, null,
        React.createElement(Content, null,
            React.createElement(PhoneContainer, null,
                React.createElement(StyledPhoneSvg, { viewBox: "0 0 290 590.58", "aria-hidden": "true", focusable: "false" },
                    React.createElement("path", { d: "M36.28,0H253.72A36.28,36.28,0,0,1,290,36.27v518a36.28,36.28,0,0,1-36.28,36.27H36.28A36.28,36.28,0,0,1,0,554.31v-518A36.28,36.28,0,0,1,36.28,0Z", fill: "#fff" }),
                    React.createElement("path", { d: "M125,25h40a3,3,0,0,1,0,6H125a3,3,0,0,1,0-6Z", fill: "#231f20" })),
                React.createElement(PhoneContent, null, image && React.createElement(Image, { src: image.src, role: "none" }))),
            React.createElement(TextContainer, null,
                header && (React.createElement(Header, Object.assign({}, header, { dangerouslySetInnerHTML: {
                        __html: purify(header.text),
                    } }))),
                button && React.createElement(StyledButton, Object.assign({ isPreloader: true }, buttonProps))))));
}
export default memo(FreeHero);
//# sourceMappingURL=free-hero.js.map