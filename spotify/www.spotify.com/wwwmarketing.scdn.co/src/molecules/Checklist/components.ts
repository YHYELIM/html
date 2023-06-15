import styled from 'styled-components';
import { Type, screenLgMin, desktopAlto, spacer16, spacer8, } from '@spotify-internal/encore-web';
export const List = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0 auto;
  max-width: 536px;
  display: flex;
  flex-direction: column;

  & > li:not(:first-child) {
    ${({ textDirection }) => textDirection === 'rtl'
    ? 'border-bottom'
    : 'border-top'}: 1px solid #d8d8d8;
    ${({ textDirection }) => textDirection === 'rtl' ? 'padding-bottom' : 'padding-top'}: 50px;
    ${({ textDirection }) => textDirection === 'rtl' ? 'margin-bottom' : 'margin-top'}: 50px;
  }

  @media (min-width: ${screenLgMin}) {
    max-width: 1280px;
    display: block;

    & > li {
      vertical-align: top;
      box-sizing: border-box;
      display: inline-block;
      width: 50%;
    }

    & > li:first-child {
      padding-right: 42px;
    }

    & > li:not(:first-child) {
      ${({ textDirection }) => textDirection === 'rtl' ? 'padding-right' : 'padding-left'}: 42px;
      padding-top: 0;
      margin-top: 0;
      border-top: 0;
      border-bottom: 0;
      ${({ textDirection }) => textDirection === 'rtl'
    ? 'border-right'
    : 'border-left'}: 1px solid #d8d8d8;
    }
  }
`;
export const Container = styled.section `
  width: 100%;
  text-align: ${({ textAlign, textDirection }) => textAlign || (textDirection === 'rtl' ? 'right' : 'left')};
`;
export const Title = styled(Type.h2) `
  font-size: ${desktopAlto.fontSize};
  line-height: 1.3;
  letter-spacing: -0.015em;
  font-weight: ${desktopAlto.fontWeight};
  margin: 0;
  padding-bottom: ${spacer8};

  @media (min-width: ${screenLgMin}) {
    font-size: 36px;
  }
`;
export const Subheader = styled.p `
  font-size: 18px;
  margin: 10px 0 0 0;

  @media (min-width: ${screenLgMin}) {
    font-size: 20px;
    margin-top: ${spacer16};
  }
`;
export const Elements = styled.ul `
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const Element = styled.li `
  font-size: 18px;
  margin: 10px 0;
  padding: 0 10px;

  @media (min-width: ${screenLgMin}) {
    font-size: 24px;
  }
`;
//# sourceMappingURL=components.js.map