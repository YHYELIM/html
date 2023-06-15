import React from 'react';
import styled from 'styled-components';
import { FormSelect, Type, screenSmMin, screenLgMin, blue100, } from '@spotify-internal/encore-web';
import BoxShadowDefault from '../../atoms/BoxShadow';
import Button from '../../atoms/Button';
import LegalTerms from '../../atoms/LegalTerms';
export const LegalDisclaimer = styled(LegalTerms) `
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  margin: 20px 0 0;

  > a {
    text-decoration: underline;
    color: black;
  }
`;
export const PlanContent = styled.ul `
  padding-inline-start: 0;
  padding-inline-end: 0;
  margin-inline-start: 0;
  margin-inline-end: 0;
  list-style: none;

  @media (min-width: ${screenLgMin}) {
    display: table;
    height: 100%;
    width: 100%;
  }
`;
export const PaymentMethodWrapper = styled.figure `
  display: inline-block;
  vertical-align: top;
  margin: auto;
`;
export const PaymentMethod = styled.img `
  height: 20px;
  margin-right: 5px;
  margin-bottom: 10px;
`;
export const Header = styled(Type.h2) `
  font-weight: bold;
  margin-bottom: 5px;
  margin-block-start: 0;
  font-size: 14px;
  padding: 0;
`;
export const Content = styled.div `
  flex-grow: 1;
  margin-bottom: 5px;
`;
export const Promotion = styled(Type.h1) `
  color: white;
  background-color: ${blue100};
  border-radius: 3px;
  font-size: 14px;
  padding: 4px 8px;
  display: inline-block;
  font-weight: 900;
  margin-bottom: 10px;

  margin-block-start: 0;
  margin-block-end: 10px;
`;
export const Description = styled(Type.h3) `
  margin-block-start: 0;
  margin-bottom: 10px;
  line-height: 1.75;
  font-size: 12px;
  font-weight: normal;
  padding: 0;
`;
export const StyledButton = styled(Button) `
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
`;
export const Container = styled.li `
  margin: 0 0 50px 0;
  list-style: none;

  @media (min-width: ${screenLgMin}) {
    padding: 0 10px;
    display: table-cell;
  }
`;
export const Column = styled.div `
  display: flex;
  flex-flow: column;
  height: 100%;
  width: 290px;
  min-width: 250px;
  max-width: 100%;
  margin: 0 auto;
  text-align: left;
`;
export const ColumnHeader = styled.summary `
  flex: 0 1 auto;
  font-size: 30px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 40px;
`;
export const BoxShadow = styled(BoxShadowDefault) `
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`;
export const Select = styled(props => (React.createElement(FormSelect, Object.assign({ "aria-label": "choose your plan" }, props)))) `
  margin-bottom: 20px;

  ~ svg {
    top: 12px;

    @media (min-width: ${screenSmMin}) {
      top: 16px;
    }
  }
`;
//# sourceMappingURL=components.js.map