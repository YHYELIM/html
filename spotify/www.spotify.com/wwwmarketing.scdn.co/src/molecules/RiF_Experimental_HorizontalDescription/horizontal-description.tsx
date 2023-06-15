import React, { memo, useContext } from 'react';
import { eventParamAttributes, inViewEventAttributes, } from '@spotify-internal/touchdown-analytics';
import Video from '../../atoms/Video';
import Type from '../../atoms/RiF_Experimental_Type';
import DirectionContext from '../../configuration/context/direction';
import { Description, ImageContainer, ImageStyle, DescriptionsContainer, Main, VideoWrapper, Headline, } from './components';
import Container from '../../atoms/RiF_Experimental_Container';
export function HorizontalDescription(props) {
    const direction = useContext(DirectionContext);
    const { container, header, proposition, descriptions, eventParams } = props;
    return (React.createElement(Container, Object.assign({ direction: direction }, container, eventParamAttributes(eventParams), inViewEventAttributes()),
        header && React.createElement(Headline, Object.assign({}, header)),
        React.createElement(Main, null,
            (proposition === null || proposition === void 0 ? void 0 : proposition.type) === 'image' && (React.createElement(ImageContainer, null,
                React.createElement(ImageStyle, Object.assign({}, proposition.props)))),
            (proposition === null || proposition === void 0 ? void 0 : proposition.type) === 'video' && (React.createElement(VideoWrapper, null,
                React.createElement(Video, Object.assign({}, proposition.props)))),
            descriptions && !!descriptions.length && (React.createElement(DescriptionsContainer, null, descriptions.map((description, index) => description && (React.createElement(Description, { key: `decription-${index}` },
                React.createElement(Type, { as: "h3", variant: "ballad", weight: "bold" }, description.title),
                React.createElement(Type, { as: "p" }, description.text)))))))));
}
export default memo(HorizontalDescription);
//# sourceMappingURL=horizontal-description.js.map