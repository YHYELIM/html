import React, { memo, useContext } from 'react';
import Button from '../../atoms/Button';
import DirectionContext from '../../configuration/context/direction';
import { eventParamAttributes, inViewEventAttributes, } from '@spotify-internal/touchdown-analytics';
import { Wrapper, CustomHeader, MessageSpacer, ButtonGroup, ContainerWithBackground, } from './components';
export function Upsell({ container, proposition, header, buttons, eventParams, }) {
    const direction = useContext(DirectionContext);
    return (React.createElement(ContainerWithBackground, Object.assign({ disablePaddings: {
            before: false,
            after: false,
            start: false,
            end: false,
        } }, container, eventParamAttributes(eventParams), inViewEventAttributes(), { backgroundSources: proposition.props.sources, textDirection: direction }),
        React.createElement(Wrapper, null,
            React.createElement(MessageSpacer, null,
                header && React.createElement(CustomHeader, Object.assign({ disableEndMargin: true }, header)),
                !!(buttons === null || buttons === void 0 ? void 0 : buttons.length) && (React.createElement(ButtonGroup, null, buttons.map((button, index) => (React.createElement(Button, Object.assign({ key: `button-${index}` }, button))))))))));
}
export default memo(Upsell);
//# sourceMappingURL=upsell.js.map