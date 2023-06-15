import styled from 'styled-components';
import Container from '../../atoms/Container';
import { Type, screenSmMin, screenMdMin } from '@spotify-internal/encore-web';
export const backgroundPurple = '#600be7';
export const backgroundPink = '#b023c2';
export const Wrapper = styled(Container) `
  > article {
    overflow: hidden;
    width: 100%;
    padding: 0;
  }
`;
export const Content = styled.div `
  @media (min-width: ${screenMdMin}) {
    height: 494px;
  }
`;
export const TextContainer = styled.div `
  text-align: center;
  width: 100%;

  ${({ direction }) => direction === 'rtl'
    ? `background: linear-gradient(${backgroundPink} 85%, ${backgroundPurple})`
    : `background: linear-gradient(${backgroundPink} 15%, ${backgroundPurple})`}
`;
export const SecondaryHeader = styled(Type.h2) `
  color: white;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.2;
  padding: 70px 15px 0;

  @media (min-width: ${screenSmMin}) {
    font-size: 40px;
  }

  @media (min-width: ${screenMdMin}) {
    font-size: 48px;
    padding-top: 190px;
  }
`;
export const SupHeader = styled(Type.h2) `
  color: white;
  font-size: 32px;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.2;
  padding: 0 15px 80px;

  @media (min-width: ${screenSmMin}) {
    font-size: 40px;
  }

  @media (min-width: ${screenMdMin}) {
    font-size: 48px;
    padding-bottom: 190px;
  }
`;
export const PhoneContainer = styled.div `
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  height: 310px;
  background: url(https://www.scdn.co/i/free/bubbles-phone-mobile.svg),
    white no-repeat;
  background-size: 506px 512px;
  background-position: top 16px center;
  width: 100%;
  background-repeat: no-repeat;

  @media (min-width: ${screenSmMin}) {
    display: none;
  }
`;
export const StyledPhoneSvg = styled.svg `
  width: 251px;
  height: 491px;
`;
export const PhoneContent = styled.div `
  position: absolute;
  bottom: -113px;
  right: 0;
  left: 0;
  display: flex;
  justify-content: center;
`;
export const Image = styled.img `
  width: 216px;
  height: 365px;
`;
export const GradientOverlay = styled.div `
  position: relative;
  height: 78px;
  background: linear-gradient(transparent, #b023c2);
  top: -78px;
  margin-bottom: -78px;
`;
//# sourceMappingURL=components.js.map