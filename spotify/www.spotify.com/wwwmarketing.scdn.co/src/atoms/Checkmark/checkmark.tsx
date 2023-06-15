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
import React from 'react';
import styled from 'styled-components';
import { IconCheck, black } from '@spotify-internal/encore-web';
function CheckmarkComponent(props) {
    const { size = 24, label = '' } = props, rest = __rest(props, ["size", "label"]);
    return (React.createElement("div", Object.assign({}, rest),
        React.createElement(IconCheck, { iconSize: size, "aria-label": label })));
}
const Checkmark = styled(CheckmarkComponent) `
  display: inline-block;
  color: ${({ checkmarkColor }) => (checkmarkColor ? checkmarkColor : black)};
  padding: ${({ textDirection }) => textDirection === 'rtl' ? `0 0 0 10px` : `0 10px 0 0`};

  svg[class*='Svg-'] {
    stroke-width: ${({ strokeWidth }) => (strokeWidth ? strokeWidth : '2')}pt;
  }
`;
export default Checkmark;
//# sourceMappingURL=checkmark.js.map