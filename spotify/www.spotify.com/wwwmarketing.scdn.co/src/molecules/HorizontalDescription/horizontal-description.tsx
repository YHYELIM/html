import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import React, { memo, useContext } from 'react';
import Video from '../../atoms/Video';
import DirectionContext from '../../configuration/context/direction';
import { Content, Description, ImageContainer, ImageStyle, Wrapper, DescriptionsContainer, Main, VideoWrapper, Headline, } from './components';
export function HorizontalDescription(props) {
    const direction = useContext(DirectionContext);
    const { container, header, proposition, descriptions, eventParams } = props;
    return (React.createElement(Wrapper, Object.assign({ direction: direction }, container, eventParamAttributes(eventParams)),
        React.createElement(Content, null,
            header && React.createElement(Headline, Object.assign({}, header)),
            React.createElement(Main, null,
                (proposition === null || proposition === void 0 ? void 0 : proposition.type) === 'image' && (React.createElement(ImageContainer, null,
                    React.createElement(ImageStyle, Object.assign({}, proposition.props)))),
                (proposition === null || proposition === void 0 ? void 0 : proposition.type) === 'video' && (React.createElement(VideoWrapper, null,
                    React.createElement(Video, Object.assign({}, proposition.props)))),
                descriptions && !!descriptions.length && (React.createElement(DescriptionsContainer, null, descriptions.map((description, index) => description && (React.createElement(Description, { key: `decription-${index}` },
                    React.createElement("h2", null, description.title),
                    React.createElement("p", null, description.text))))))))));
}
export default memo(HorizontalDescription);
//# sourceMappingURL=horizontal-description.js.map