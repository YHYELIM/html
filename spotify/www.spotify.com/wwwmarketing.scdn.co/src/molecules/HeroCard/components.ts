import { screenLgMin, screenSmMin, spacer72, spacer48, spacer32, spacer24, spacer16, spacer8, black, } from '@spotify-internal/encore-web';
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
    font-family: spotify-circular, Circular, Helvetica, Arial, sans-serif;
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
  --container-small-width: 70%;
  --headline-font-size: ${responsiveSize(70, 150, 320, 1440)};
  --headline-line-height: ${responsiveSize(80, 160, 320, 1440)};
  --subheadline-font-size: ${responsiveSize(14, 32, 320, 1440)};
  --subheadline-line-height: ${responsiveSize(26, 44, 320, 1440)};

  > h2 {
    padding: 0;
    margin: ${spacer8} 0;

    @media (min-width: ${screenSmMin}) {
      margin: ${spacer16} 0;
      width: 100%;
    }
  }

  @media (min-width: ${screenLgMin}) {
    --container-small-width: 75%;
  }
`;
export const LegalContainer = styled.footer `
  font-size: 12px;
  margin-bottom: ${spacer16};
  width: 100%;
`;
export const LegalText = styled(LegalTerms) `
  display: inline-block;
  font-size: 12px;

  > a {
    color: ${black};
  }

  @media (min-width: ${screenSmMin}) {
    max-width: 630px;
  }

  @media (min-width: ${screenLgMin}) {
    font-size: 16px;
  }
`;
export const ButtonGroup = styled.div `
  & > div {
    margin-bottom: ${spacer8};
    display: grid;

    :last-child {
      margin-bottom: ${spacer16};
    }

    @media (min-width: ${screenLgMin}) {
      margin-bottom: 28px;

      :last-child {
        margin-bottom: 28px;
      }
    }

    @media (min-width: ${screenSmMin}) {
      display: inherit;
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
  @media (min-width: ${screenLgMin}) {
    margin-left: auto;
  }
`;
export const VideoContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const ImageStyle = styled(Image) `
  width: 100%;
  height: 20px;
  padding-bottom: 100%;
  border-radius: 20px;
  background-size: cover;

  @media (min-width: ${screenSmMin}) {
    height: 40px;
  }
`;
//# sourceMappingURL=components.js.map