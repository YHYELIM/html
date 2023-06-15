import React, { memo } from 'react';
import { CustomContainer, CustomHeader, ComponentArea, BubbleTopLeft, BubbleTopRight, BubbleBottomLeft, BubbleBottomRight, } from './components';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
export function Bubbles(props) {
    const { container, header, bubbles, eventParams } = props;
    return (React.createElement(CustomContainer, Object.assign({ disableMaxWidth: true }, container, eventParamAttributes(eventParams)),
        React.createElement(ComponentArea, null,
            bubbles[0] && React.createElement(BubbleTopLeft, Object.assign({}, bubbles[0])),
            bubbles[1] && React.createElement(BubbleTopRight, Object.assign({}, bubbles[1])),
            bubbles[2] && React.createElement(BubbleBottomLeft, Object.assign({}, bubbles[2])),
            bubbles[3] && React.createElement(BubbleBottomRight, Object.assign({}, bubbles[3])),
            header && React.createElement(CustomHeader, Object.assign({ disableEndMargin: true }, header)))));
}
export default memo(Bubbles);
//# sourceMappingURL=bubbles.js.map