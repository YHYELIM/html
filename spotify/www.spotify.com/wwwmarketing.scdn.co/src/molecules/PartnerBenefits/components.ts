import styled from 'styled-components';
import Container from '../../atoms/Container';
import Image from '../../atoms/Image';
import LegalTerms from '../../atoms/LegalTerms';
import { Type, screenMdMin, spacer8, spacer12, spacer16, spacer20, spacer24, spacer48, spacer72, gray10, white, } from '@spotify-internal/encore-web';
export const Wrapper = styled(Container) `
  background-color: ${({ backgroundColor }) => backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : '#a789be'};

  > article {
    color: ${({ color }) => color !== null && color !== void 0 ? color : `${gray10}`};
    width: 100%;
    padding: 0;
  }
`;
export const Content = styled.article `
  max-width: 1100px;
  margin: 0 auto;
  padding: ${spacer24};
  font-size: 16px;

  @media (min-width: ${screenMdMin}) {
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: ${spacer24};
    justify-content: space-evenly;
    padding: ${spacer72};
  }
`;
export const List = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0;

  @media (min-width: ${screenMdMin}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: ${spacer16};
  }
`;
export const Logo = styled(Image) `
  width: 100%;
  max-width: 196px;
  height: 62px;
  margin: 0 auto ${spacer8} auto;
  vertical-align: middle;

  @media (min-width: ${screenMdMin}) {
    width: 100%;
    display: block;
  }
`;
export const Entry = styled.li `
  box-sizing: border-box;
  margin-top: ${spacer16};
  padding: ${spacer24};
  border: 1px solid ${({ borderColor }) => borderColor !== null && borderColor !== void 0 ? borderColor : `${white}`};
  border-radius: 5px;
  width: 100%;

  &:first-child {
    font-size: 18px;
    padding: ${spacer48} ${spacer24};
    text-align: center;
    display: block;
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
    margin-top: 0;

    p {
      width: 100%;
      text-align: center;
    }
  }

  &:not(:first-child) {
    ${Logo} {
      width: 35%;
      max-width: 80px;
      margin-right: 30px;

      @media (min-width: ${screenMdMin}) {
        margin-right: auto;
      }
    }
  }

  @media (min-width: ${screenMdMin}) {
    margin-top: 0;
    text-align: center;
  }
`;
export const Summary = styled.p `
  box-sizing: border-box;
  line-height: 18px;
  width: 50%;
  margin: auto;
  display: inline-block;
  vertical-align: middle;

  @media (min-width: ${screenMdMin}) {
    text-align: center;
    width: 100%;
  }
`;
export const Offering = styled.section `
  box-sizing: border-box;

  @media (min-width: ${screenMdMin}) {
    border: 1px solid ${({ borderColor }) => borderColor !== null && borderColor !== void 0 ? borderColor : `${white}`};
    border-radius: 5px;
    padding: ${spacer48} ${spacer24};
    text-align: center;

    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 1;
  }
`;
export const Supheader = styled(Type.h3) `
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  letter-spacing: 1.5px;
  margin: ${spacer24} 0 0 0;
  padding: 0;

  @media (min-width: ${screenMdMin}) {
    text-align: center;
  }
`;
export const Header = styled(Type.h1) `
  margin-top: ${spacer8};
  margin-bottom: ${spacer24};
  font-size: 44px;
  line-height: 48px;
  font-weight: 900;
  letter-spacing: -0.02em;
  padding: 0;
`;
export const Subheader = styled(Type.h2) `
  font-weight: 400;
  margin-bottom: 0;
  font-size: 28px;
  line-height: 1.3;
  padding: 0;

  @media (min-width: ${screenMdMin}) {
    font-size: 24px;
  }
`;
export const ButtonGroup = styled.div `
  display: block;
  margin: ${spacer20} 0;

  > div {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  a {
    width: 100%;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    margin: 35px 0 0;
    a {
      width: auto;
    }

    > div {
      &:not(:last-child) {
        margin-right: ${spacer8};
        margin-bottom: 0;
      }

      display: inline-block;
    }
  }
`;
export const LegalDisclaimer = styled(LegalTerms) `
  box-sizing: border-box;
  margin: ${spacer12};
  text-align: center;
  font-size: 12px;
  line-height: 16px;

  @media (min-width: ${screenMdMin}) {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 2;
  }

  a:link,
  a:visited,
  a:hover,
  a:active {
    color: ${({ color }) => color !== null && color !== void 0 ? color : `${gray10}`};
  }
`;
//# sourceMappingURL=components.js.map