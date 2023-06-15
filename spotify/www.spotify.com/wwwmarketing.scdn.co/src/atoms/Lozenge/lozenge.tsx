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
import { blue100, spacer4, spacer8, white } from '@spotify-internal/encore-web';
import { purify } from '../../utils/helpers';
function LozengeComponent(props) {
    const { text } = props, rest = __rest(props, ["text"]);
    return (React.createElement("li", Object.assign({}, rest),
        React.createElement("span", { dangerouslySetInnerHTML: { __html: purify(text) } })));
}
const Lozenge = styled(LozengeComponent) `
  border-radius: 4px;
  font-size: 14px;
  padding: ${spacer4} ${spacer8};
  display: inline-block;
  font-weight: 900;
  margin: 0 ${spacer4} 10px 0;
  margin-block-start: 0;
  margin-block-end: 10px;
  color: ${({ color }) => color !== null && color !== void 0 ? color : `${white}`};
  background-color: ${({ backgroundColor }) => backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : `${blue100}`};

  :last-child {
    margin-right: 0;
  }

  ${({ borderValues }) => (borderValues === null || borderValues === void 0 ? void 0 : borderValues.width) && borderValues.color
    ? `border: ${borderValues.width}px solid ${borderValues.color};`
    : ''}
`;
export default Lozenge;
//# sourceMappingURL=lozenge.js.map