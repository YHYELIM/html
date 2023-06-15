import React, { memo, useContext } from 'react';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import { Wrapper, ImageStyle, ImageContainer, Content, Main, Headline, DescriptionsContainer, CustomHeader, Note, } from './components';
import DirectionContext from '../../configuration/context/direction';
import { purify } from '../../utils/helpers';
export function VerticalDescription(props) {
    const direction = useContext(DirectionContext);
    const { container, headline, descriptions, note, proposition, eventParams } = props;
    return (React.createElement(Wrapper, Object.assign({ direction: direction }, container, eventParamAttributes(eventParams)),
        React.createElement(Content, null,
            headline && (React.createElement("div", null,
                React.createElement(Headline, { dangerouslySetInnerHTML: {
                        __html: purify(headline),
                    } }))),
            React.createElement(Main, null,
                (proposition === null || proposition === void 0 ? void 0 : proposition.component) && (React.createElement(ImageContainer, null,
                    React.createElement(ImageStyle, Object.assign({}, proposition.component.props)))),
                descriptions && !!descriptions.length && (React.createElement(DescriptionsContainer, null, descriptions.map(description => description && (React.createElement(CustomHeader, Object.assign({ disableEndMargin: true }, description))))))),
            note && (React.createElement(Note, null,
                React.createElement(CustomHeader, Object.assign({ disableEndMargin: true, note: true }, note)))))));
}
export default memo(VerticalDescription);
//# sourceMappingURL=vertical-description.js.map