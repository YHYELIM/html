import styled from 'styled-components';
import { Type, TextLink, gray30, gray90, green135, green157, screenSmMin, } from '@spotify-internal/encore-web';
import BoxShadowDefault from '../../atoms/BoxShadow';
import Button from '../../atoms/Button';
import LegalTermsAtom from '../../atoms/LegalTerms';
export const Content = styled.article `
  @media (min-width: ${screenSmMin}) {
    width: 600px;
    max-width: 100%;
    margin: 0 auto;
  }
`;
export const LegalTerms = styled(LegalTermsAtom) `
  color: ${gray30};
  font-size: 12px;
  font-weight: 400;
  text-align: center;
  margin: 20px auto;
  max-width: 600px;

  a {
    color: ${gray30};
  }
`;
export const BoxShadow = styled(BoxShadowDefault) `
  width: 100%;
  padding: 20px 32px;
  box-sizing: border-box;
  display: inline-block;
  margin-bottom: 20px;

  @media (min-width: ${screenSmMin}) {
    width: 100%;

    &:first-child {
      margin-right: 20px;
    }
  }
`;
export const Headline = styled(Type.h2) `
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  line-height: 1.4;
  padding: 0;
`;
export const Subheadline = styled.p `
  color: ${gray30};
  font-size: 12px;
  margin-top: -23px;
  margin-bottom: 0;
  height: 29px;
`;
export const Price = styled.div `
  margin: 8px 0 30px;
  font-size: 32px;
  font-weight: 900;
  padding: 0;
`;
export const Month = styled.span `
  font-size: 16px;
  font-weight: 400;
  line-height: 1.1;
`;
export const Benefits = styled.ul `
  border-top: 1px solid #d9dadc;
  border-bottom: 1px solid #d9dadc;
  padding: 34px 0 26px;
`;
export const Benefit = styled.li `
  padding-bottom: 7px;
  line-height: 22px;
  list-style: none;

  &:before {
    padding: 0 10px 0 0;
    font-size: 16px;
    content: '\\2713';
    font-weight: 700;
    color: #000;
  }
`;
export const StyledButton = styled(Button) `
  text-decoration: none;
  box-sizing: border-box;
  width: 100%;
`;
export const Comparisons = styled.ul `
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const Comparison = styled.li `
  border-bottom: 1px solid ${gray90};
  font-size: 24px;
  font-weight: 400;
  padding: 20px 10px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border-bottom: 0;
    padding-bottom: 0;
  }

  @media (min-width: ${screenSmMin}) {
    padding: 20px;
    flex-direction: row;
  }
`;
export const Link = styled(TextLink) `
  display: block;
  color: ${green135};
  text-transform: uppercase;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  letter-spacing: 2px;
  line-height: 36px;

  @media (min-width: ${screenSmMin}) {
    float: right;
    display: inline-block;
  }

  &:hover {
    color: ${green157};
  }
`;
//# sourceMappingURL=components.js.map