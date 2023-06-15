import styled from 'styled-components';
import Container from '../../atoms/Container';
import Button from '../../atoms/Button';
import { Type, screenXsMax, screenSmMin, screenMdMin, } from '@spotify-internal/encore-web';
export const backgroundPurple = '#6c0ee0';
export const backgroundPink = '#f037a6';
export const Wrapper = styled(Container) `
  > article {
    overflow: hidden;
    width: 100%;
    min-height: 450px;
    padding: 0;
    background: url(https://www.scdn.co/i/free/bubbles-mobile.svg),
      linear-gradient(-45deg, ${backgroundPurple} -5%, ${backgroundPink})
        no-repeat;
    background-color: ${backgroundPurple};
    background-size: 100% 927px;
    background-position: center center;
    background-repeat: no-repeat;

    @media (min-width: ${screenSmMin}) {
      background: url(https://www.scdn.co/i/free/bubbles-dktp.svg),
        linear-gradient(-45deg, ${backgroundPurple} -5%, ${backgroundPink})
          no-repeat;
      background-size: 100% 1068px;
      background-position: center -138px;
      height: 376px;
      background-repeat: no-repeat;
    }

    @media (min-width: ${screenMdMin}) {
      height: 600px;
      background-repeat: no-repeat;
      display: flex;
      justify-content: center;
    }
  }
`;
export const Content = styled.div `
  @media (min-width: ${screenXsMax}) {
    margin: 0 9px;
  }

  @media (min-width: ${screenMdMin}) {
    display: flex;
    position: relative;
    width: 1170px;
  }
`;
export const TextContainer = styled.div `
  padding: 80px 15px 70px;

  @media (min-width: ${screenMdMin}) {
    padding: 180px 15px 0px 0px;
    width: 60%;
  }
`;
export const Header = styled(Type.h1) `
  color: white;
  font-size: 48px;
  font-weight: 900;
  line-height: 1.15;
  letter-spacing: -1.92px;
  padding-bottom: 32px;

  @media (min-width: ${screenSmMin}) {
    font-size: 64px;
    letter-spacing: -2.56px;
    max-width: 653px;

    :lang(am) {
      font-size: 55px;
    }
  }

  @media (min-width: ${screenMdMin}) {
    letter-spacing: -0.04em;
    line-height: 1.15;
  }
`;
export const StyledButton = styled(Button) `
  :lang(ru) {
    letter-spacing: 0 !important;
  }
`;
export const PhoneContainer = styled.div `
  display: none;

  @media (min-width: ${screenMdMin}) {
    position: relative;
    width: 40%;
    padding-top: 100px;
    display: flex;
    justify-content: center;
  }
`;
export const StyledPhoneSvg = styled.svg `
  width: 286px;
  height: 573px;
`;
export const PhoneContent = styled.div `
  position: absolute;
  right: 0;
  left: 0;
  height: 575px;
  bottom: -133px;
  z-index: 1;
  display: flex;
  justify-content: center;
`;
export const Image = styled.img `
  width: 267px;
  height: 445px;
`;
//# sourceMappingURL=components.js.map