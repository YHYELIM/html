import React, { memo, useContext } from 'react';
import { Wrapper, Content, TextContainer, SecondaryHeader, SupHeader, PhoneContainer, StyledPhoneSvg, PhoneContent, Image, GradientOverlay, } from './components';
import { purify } from '../../utils/helpers';
import DirectionContext from '../../configuration/context/direction';
export function FreeBenefit(props) {
    const direction = useContext(DirectionContext);
    const { secondaryHeader, supHeader, image } = props;
    return (React.createElement(Wrapper, null,
        React.createElement(Content, null,
            React.createElement(PhoneContainer, null,
                React.createElement(StyledPhoneSvg, { viewBox: "0 0 314.16 614.64" },
                    React.createElement("image", { width: "1309", height: "2561", transform: "scale(0.24)", opacity: "0.6", href: "https://i.scdn.co/image/ab671c3d0000f4302ef0b5bf9cbfd01d6a9fc55c" }),
                    React.createElement("path", { d: "M48.28,10H265.72A36.28,36.28,0,0,1,302,46.27v518a36.28,36.28,0,0,1-36.28,36.27H48.28A36.28,36.28,0,0,1,12,564.31v-518A36.28,36.28,0,0,1,48.28,10Z", fill: "#fff" }),
                    React.createElement("path", { d: "M137,35h40a3,3,0,0,1,0,6H137a3,3,0,0,1,0-6Z", fill: "#231f20" })),
                React.createElement(PhoneContent, null, image && React.createElement(Image, { src: image.src, role: "none" }))),
            React.createElement(GradientOverlay, null),
            React.createElement(TextContainer, { direction: direction },
                secondaryHeader && (React.createElement(SecondaryHeader, Object.assign({}, secondaryHeader, { dangerouslySetInnerHTML: {
                        __html: purify(secondaryHeader.text),
                    } }))),
                supHeader && (React.createElement(SupHeader, Object.assign({}, supHeader, { dangerouslySetInnerHTML: {
                        __html: purify(supHeader.text),
                    } })))))));
}
export default memo(FreeBenefit);
//# sourceMappingURL=free-benefit.js.map