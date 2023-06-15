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
import React, { memo } from 'react';
import { screenSmMin, Type as EncoreType } from '@spotify-internal/encore-web';
import styled, { css } from 'styled-components';
const ballad = () => css `
  font-size: var(--ballad-font-size, 22px);
  line-height: normal;

  @media (min-width: ${screenSmMin}) {
    font-size: var(--ballad-font-size, 32px);
  }
`;
const viola = () => css `
  font-size: var(--viola-font-size, 18px);
  line-height: normal;

  @media (min-width: ${screenSmMin}) {
    font-size: var(--viola-font-size, 28px);
  }
`;
const makeBold = (styles) => css `
  ${styles}
  font-weight: bold;
`;
const variantStyles = (variant) => {
    switch (variant) {
        case 'ballad':
            return ballad();
        case 'balladBold':
            return makeBold(ballad());
        case 'viola':
            return viola();
        case 'violaBold':
            return makeBold(viola());
        default:
            return '';
    }
};
const StyledType = styled(EncoreType) `
  ${props => (props.variant ? variantStyles(props.variant) : '')};
`;
const Type = (_a) => {
    var { as, variant } = _a, props = __rest(_a, ["as", "variant"]);
    return (React.createElement(StyledType, Object.assign({}, props, { forwardedAs: as || 'p', variant: variant || 'viola' })));
};
export default memo(Type);
//# sourceMappingURL=type.js.map