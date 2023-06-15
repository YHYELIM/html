import styled from 'styled-components';
import { Type, screenLgMin, screenSmMin, spacer16, } from '@spotify-internal/encore-web';
import Button from '../../atoms/Button';
import Header from '../../atoms/Header';
import Image from '../../atoms/Image';
import LegalTerms from '../../atoms/LegalTerms';
export const Content = styled.ul `
  padding: 0;
  margin: 0;
  list-style: none;

  ${({ verticalBenefits }) => verticalBenefits &&
    `
    flex-direction: column;
  `}

  @media (min-width: ${screenSmMin}) {
    display: flex;
    flex-wrap: wrap;
  }

  @media (min-width: ${screenLgMin}) {
    flex-wrap: nowrap;
    justify-content: space-between;

    ${({ verticalBenefits }) => verticalBenefits &&
    `
    flex-direction: row;
  `}
  }
`;
export const StyledHeader = styled(Header) `
  > h2 {
    max-width: 670px;
    margin-left: auto;
    margin-right: auto;
  }
`;
export const ButtonGroupText = styled.p `
  width: 100%;
`;
export const ButtonWrapper = styled.footer `
  text-align: center;
  margin-top: 30px;

  ${({ hasImages }) => hasImages &&
    `
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;

    > div:first-of-type {
      margin-right: 18px;
    }
  `}

  @media (min-width: ${screenSmMin}) {
    margin: 50px auto 0 auto;
  }
`;
export const StyledButton = styled(Button) `
  width: 100%;
  box-sizing: border-box;
  text-decoration: none;
  margin-top: 10px;

  @media (min-width: ${screenSmMin}) {
    width: auto;
  }
`;
export const Legal = styled(LegalTerms) `
  margin: 10px 0 0 0;
  font-size: 12px;
  text-align: center;

  a {
    color: inherit;
    text-decoration: underline;
  }

  @media (min-width: ${screenSmMin}) {
    font-size: 14px;
  }
`;
export const Wrapper = styled.li `
  margin-bottom: 20px;
  display: flex;

  @media (min-width: ${screenSmMin}) {
    flex-grow: 1;
    width: 50%;
  }

  @media (min-width: ${screenLgMin}) {
    vertical-align: top;
    display: block;
    ${({ size }) => {
    switch (size) {
        default:
            return `
            width: 270px;
          `;
        case 'skyscraper':
            return `
            width: 295px;
          `;
    }
}}
  }
`;
export const BenefitImage = styled(Image) `
  display: inline-block;
  background-position: center top;
  margin-right: 20px;
  flex-grow: 1;

  ${({ size }) => {
    switch (size) {
        default:
        case 'medium':
            return `
          width: 142px;
          height: 142px;`;
        case 'small':
            return `
           width: 60px;
           height: 60px;
        `;
        case 'skyscraper':
            return `
          width: 295px;
          height: 185px;

          @media (min-width: ${screenLgMin}) {
            height: 360px;
          }
        `;
    }
}}

  @media (min-width: ${screenLgMin}) {
    display: block;
    margin: 0 auto 40px auto;

    ${({ size }) => {
    switch (size) {
        default:
        case 'medium':
            return `margin: 0 auto 40px auto;`;
        case 'small':
            return `margin: 0 auto 10px auto;`;
    }
}}
  }
`;
export const BenefitContent = styled.div `
  display: inline-block;
  width: 100%;
  flex-grow: 1;
  margin: ${spacer16} 0;

  @media (min-width: ${screenLgMin}) {
    display: block;
    text-align: center;
  }
`;
export const BenefitHeader = styled(Type.p) `
  font-weight: bold;
  margin-bottom: 10px;
  font-size: 21px;
  padding: 0;
  line-height: 1.3em;
`;
export const Text = styled(Type.p) `
  line-height: 1.5;
  font-size: 16px;
  padding: 0;

  a {
    color: #000;
    text-decoration: underline;
  }

  @media (min-width: ${screenSmMin}) {
    width: 85%;
  }

  @media (min-width: ${screenLgMin}) {
    margin: 0 auto;
  }
`;
//# sourceMappingURL=components.js.map