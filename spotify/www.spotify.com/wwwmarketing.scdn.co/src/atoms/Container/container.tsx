var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { memo, useContext } from 'react';
import { BackgroundImage, Background, Content } from './components';
import DirectionContext from '../../configuration/context/direction';
import { StyleSheetManager } from 'styled-components';
import stylisRTLPlugin from 'stylis-plugin-rtl';
function Container(_a) {
    var { color, accentColor, id, textAlign, disablePaddings, disableMaxWidth, children, background } = _a, props = __rest(_a, ["color", "accentColor", "id", "textAlign", "disablePaddings", "disableMaxWidth", "children", "background"]);
    const containerBackground = typeof background === 'string' ? { color: background } : background;
    const Wrapper = ({ children: WrapperChildren, }) => {
        return (containerBackground === null || containerBackground === void 0 ? void 0 : containerBackground.images) ? (React.createElement(BackgroundImage, Object.assign({ forwardedAs: "section", sources: containerBackground.images, background: containerBackground === null || containerBackground === void 0 ? void 0 : containerBackground.color, id: id }, props), WrapperChildren)) : (React.createElement(Background, Object.assign({ id: id, background: containerBackground === null || containerBackground === void 0 ? void 0 : containerBackground.color }, props), WrapperChildren));
    };
    const direction = useContext(DirectionContext);
    const plugins = [];
    if (direction === 'rtl') {
        plugins.push(stylisRTLPlugin);
    }
    return (React.createElement(StyleSheetManager, { stylisPlugins: plugins },
        React.createElement(Wrapper, null,
            React.createElement(Content, { color: color, accentColor: accentColor, textAlign: textAlign, disablePaddings: disablePaddings, disableMaxWidth: disableMaxWidth }, children))));
}
export default memo(Container);
//# sourceMappingURL=container.js.map