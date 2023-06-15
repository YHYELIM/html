import { screenSmMin, solidBlack0, spacer16, spacer32, spacer48, spacer72, white, } from '@spotify-internal/encore-web';
import styled from 'styled-components';
import Container from '../../atoms/RiF_Experimental_Container';
import Image from '../../atoms/Image';
import Type from '../../atoms/RiF_Experimental_Type';
import LegalTerms from '../../atoms/LegalTerms';
import Header from '../../atoms/Header';
import { responsiveSize } from '../../utils/helpers';
export const Wrapper = styled(Container) `
  ${({ secondaryColor }) => secondaryColor
    ? `
    background: linear-gradient(
      180deg,
      var(--background-base) 65%,
      ${secondaryColor} 35%
    );`
    : 'padding: ${spacer72} 0;'}
`;
export const CustomHeader = styled(Header) `
  > h2 {
    font-weight: 700;
  }
`;
export const Card = styled.div `
  box-sizing: border-box;
  max-width: ${responsiveSize(300, 409, 320, 1440)};
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.4);
  background-color: ${({ backgroundColor }) => backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : solidBlack0};
  color: ${white};
  border-radius: 25px;
  padding: 50px 28px;
  margin: 0 auto;
  text-align: center;

  > * + * {
    margin-top: ${spacer16};
  }

  @media (min-width: ${screenSmMin}) {
    padding: ${spacer72} ${spacer32};
  }
`;
export const ImageStyle = styled(Image) `
  width: 160px;
  height: 51px;
`;
export const Body = styled(Type) `
  @media (min-width: ${screenSmMin}) {
    margin-bottom: ${spacer48};
  }
`;
export const ButtonGroup = styled.div `
  > * + * {
    margin-top: ${spacer16};
  }
`;
export const LegalDisclaimer = styled(LegalTerms) `
  > a {
    color: ${white};
  }
`;
//# sourceMappingURL=components.js.map