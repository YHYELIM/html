import { screenLgMin, screenSmMin, spacer72, spacer48, spacer32, spacer24, spacer16, spacer8, white, spacer20, } from '@spotify-internal/encore-web';
import styled from 'styled-components';
import Container from '../../atoms/Container';
import Image from '../../atoms/Image';
import LegalTerms from '../../atoms/LegalTerms';
import { responsiveSize } from '../../utils/helpers';
import Header from '../../atoms/Header';
export const Wrapper = styled(Container) `
  padding: ${spacer32} ${spacer16} ${spacer48};

  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: ${screenSmMin}) {
    padding: ${spacer72} 122px;
  }

  @media (min-width: ${screenLgMin}) {
    padding: ${spacer72};
  }

  > article {
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
    width: auto;
  }
`;
export const Card = styled.div `
  ${({ background }) => (background ? `background-color: ${background};` : '')};
  width: 100%;
  box-sizing: border-box;
  border-radius: 20px;
  padding: ${spacer16};
  display: flex;
  flex-direction: column;
  margin: auto;
  @media (min-width: ${screenSmMin}) {
    padding: ${spacer24};
  }

  @media (min-width: ${screenLgMin}) {
    flex-direction: row;
    max-width: 1300px;
    padding: ${spacer32};
  }
`;
export const Content = styled.div `
  text-align: left;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  @media (min-width: ${screenLgMin}) {
    width: 60%;
  }
`;
export const CustomHeader = styled(Header) `
  position: relative;
  z-index: 1;
  --container-small-width: 100%;
  --headline-font-size: ${responsiveSize(60, 90, 320, 1440)};
  --headline-line-height: ${responsiveSize(60, 90, 320, 1440)};
  --subheadline-font-size: ${responsiveSize(14, 32, 320, 1440)};
  --subheadline-line-height: ${responsiveSize(26, 44, 320, 1440)};

  > h2 {
    padding: 0;
    margin: ${spacer8} 0;
    font-weight: 700;

    @media (min-width: ${screenLgMin}) {
      margin: ${spacer16} 0;
      width: 100%;
    }
  }

  > h3 {
    width: auto;
  }

  @media (min-width: ${screenLgMin}) {
    --container-small-width: 75%;
  }
`;
export const LegalContainer = styled.footer `
  margin-bottom: ${spacer16};
  width: 100%;
`;
export const LegalText = styled(LegalTerms) `
  display: inline-block;
  font-size: 12px;
  > a {
    color: ${white};
  }

  @media (min-width: ${screenSmMin}) {
    font-size: 16px;
    max-width: 630px;
  }
`;
export const ButtonGroup = styled.div `
  display: block;
  margin: ${spacer20} 0;
  > * + * {
    margin-top: 10px;
  }

  a {
    width: 100%;
    box-sizing: border-box;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    margin-bottom: ${spacer32};
    a {
      width: auto;
    }

    > div {
      &:not(:last-child) {
        margin-right: 8px;
        margin-bottom: 0;
      }

      display: inline-block;
    }
  }
`;
export const Propositions = styled.div `
  display: flex;
  position: relative;
  flex-direction: column;
  @media (min-width: ${screenLgMin}) {
    display: block;
    width: 50%;
    margin-left: auto;
  }
`;
export const ImageContainer = styled.div `
  margin-right: ${spacer24};
  @media (min-width: ${screenLgMin}) {
    margin-left: auto;
  }
`;
export const Logos = styled.div `
  align-items: flex-end;
  margin: ${spacer16} 0;
  @media (min-width: ${screenLgMin}) {
    text-align: right;
    float: right;
  }
`;
export const LogoImage = styled(Image) `
  max-width: 154px;
  background-size: cover;
`;
export const ImageStyle = styled(Image) `
  width: 100%;
  padding-bottom: 100%;
  border-radius: 20px;
  background-size: cover;
  border: solid 10px #c5f0c9;
`;
//# sourceMappingURL=components.js.map