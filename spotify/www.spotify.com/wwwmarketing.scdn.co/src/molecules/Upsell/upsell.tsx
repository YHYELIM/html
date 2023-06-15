import React, { memo } from 'react';
import Container from '../../atoms/Container';
import Header from '../../atoms/Header';
import Button from '../../atoms/Button';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import { Wrapper, MessageSpacer, UpsellPropositionSpacer, UpsellPropositionContainer, UpsellPropositionPlaceholder, ButtonGroup, UpsellImageWrapper, } from './components';
import AnimatedCovers from '../../atoms/AnimatedCovers';
import StackedCovers from '../../atoms/StackedCovers';
import PhoneScreen from '../../atoms/PhoneScreen';
import DownloadScreen from '../../atoms/DownloadScreen';
import Video from '../../atoms/Video';
import Image from '../../atoms/Image';
var PropositionPositionEnum;
(function (PropositionPositionEnum) {
    PropositionPositionEnum["after"] = "after";
    PropositionPositionEnum["before"] = "before";
})(PropositionPositionEnum || (PropositionPositionEnum = {}));
const verticalAlignToFlexAlign = {
    top: 'flex-start',
    center: 'center',
    bottom: 'flex-end',
};
const propositionComponent = (proposition) => {
    switch (proposition === null || proposition === void 0 ? void 0 : proposition.type) {
        case 'video':
            return {
                options: {},
                subComponent: React.createElement(Video, Object.assign({}, proposition.props)),
            };
        case 'image':
            return {
                options: {
                    verticalAlign: verticalAlignToFlexAlign[(proposition === null || proposition === void 0 ? void 0 : proposition.verticalAlign) || 'center'],
                },
                subComponent: (React.createElement(UpsellImageWrapper, null,
                    React.createElement(Image, Object.assign({ useIntrinsicSizing: true }, proposition.props)))),
            };
        case 'phoneScreen':
            return {
                options: {
                    verticalAlign: verticalAlignToFlexAlign.bottom,
                },
                subComponent: React.createElement(PhoneScreen, Object.assign({}, proposition.props)),
            };
        case 'downloadScreen':
            return {
                options: {
                    verticalAlign: verticalAlignToFlexAlign.bottom,
                },
                subComponent: React.createElement(DownloadScreen, Object.assign({}, proposition.props)),
            };
        case 'animatedCovers':
            return {
                options: {},
                subComponent: React.createElement(AnimatedCovers, Object.assign({}, proposition.props)),
            };
        case 'stackedCovers':
            return {
                options: {},
                subComponent: React.createElement(StackedCovers, Object.assign({}, proposition.props)),
            };
        default:
            return {
                options: {},
                subComponent: React.createElement(UpsellPropositionPlaceholder, null),
            };
    }
};
export function Upsell({ container, proposition, propositionPosition = 'after', header, buttons, eventParams, }) {
    const { subComponent, options } = propositionComponent(proposition);
    return (React.createElement(Container, Object.assign({ disablePaddings: {
            before: false,
            after: false,
            start: options.verticalAlign === 'flex-start',
            end: options.verticalAlign === 'flex-end',
        } }, container, eventParamAttributes(eventParams)),
        React.createElement(Wrapper, { propositionPosition: propositionPosition },
            React.createElement(MessageSpacer, null,
                header && React.createElement(Header, Object.assign({ disableEndMargin: true }, header)),
                !!(buttons === null || buttons === void 0 ? void 0 : buttons.length) && (React.createElement(ButtonGroup, null, buttons.map((button, index) => (React.createElement(Button, Object.assign({ key: `button-${index}` }, button))))))),
            React.createElement(UpsellPropositionSpacer, null,
                React.createElement(UpsellPropositionContainer, { options: options }, subComponent)))));
}
export default memo(Upsell);
//# sourceMappingURL=upsell.js.map