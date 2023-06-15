import { screenXxsMax } from '@spotify-internal/encore-web';
import styled from 'styled-components';
import Container from '../../atoms/Container';
import Image from '../../atoms/Image';
import LegalTerms from '../../atoms/LegalTerms';
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

  > article {
    font-family: spotify-circular, Circular, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: ${responsiveSize(32, 72, 320, 1440)} 0;
    margin: 0;
    width: auto;
  }
`;
export const Content = styled.div `
  margin: 0 auto;
  padding: 0;
`;
export const CardContainer = styled.div `
  width: ${responsiveSize(303, 409, 320, 1440)};
  height: auto;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.4);
  background-color: ${({ backgroundColor }) => backgroundColor !== null && backgroundColor !== void 0 ? backgroundColor : '#fcfcfc'};
  border-radius: 25px;
  padding: ${responsiveSize(36, 36, 320, 1440)} 0;
  margin: 0 auto;
  text-align: center;
`;
export const ImageStyle = styled(Image) `
  width: 99px;
  height: 51px;
  margin-bottom: 24px;
`;
export const Body = styled.p `
  font-size: ${responsiveSize(22, 32, 320, 1440)};
  line-height: ${responsiveSize(29, 40, 320, 1440)};
  margin: 0;
  padding-top: 0;
`;
export const LegalDisclaimer = styled(LegalTerms) `
  padding: 0 ${responsiveSize(44, 44, 320, 1440)} 0
    ${responsiveSize(44, 44, 320, 1440)};
  font-size: ${responsiveSize(12, 16, 320, 1440)};
  text-align: left;

  @media (max-width: ${screenXxsMax}) {
    text-align: center;
  }
  margin-top: ${responsiveSize(24, 32, 320, 1440)};
`;
//# sourceMappingURL=components.js.map