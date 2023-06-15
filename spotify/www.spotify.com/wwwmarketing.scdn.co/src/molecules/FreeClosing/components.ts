import styled from 'styled-components';
import Container from '../../atoms/Container';
import Button from '../../atoms/Button';
import { Type, screenSmMin, screenMdMin } from '@spotify-internal/encore-web';
export const backgroundPurple = '#6c0ee0';
export const backgroundPink = '#f037a6';
export const Wrapper = styled(Container) `
  > article {
    overflow: hidden;
    width: 100%;
    padding: 0;
    background: url(https://www.scdn.co/i/free/lets-play.svg),
      linear-gradient(-155deg, ${backgroundPurple} 55%, ${backgroundPink} 115%);
    background-color: ${backgroundPurple};
    background-size: 100%;
    background-position: center center;
    background-repeat: no-repeat;

    @media (min-width: ${screenSmMin}) {
      background-size: 100%;
      background-position: bottom -160px left -10px;
      background-repeat: no-repeat;
    }

    @media (min-width: ${screenMdMin}) {
      background: url(https://www.scdn.co/i/free/lets-play.svg),
        linear-gradient(-45deg, ${backgroundPurple} 16%, ${backgroundPink});
      background-color: ${backgroundPurple};
      background-size: 100% 1114px;
      background-position: bottom -160px left -10px;
      background-repeat: no-repeat;
    }
  }
`;
export const Content = styled.div `
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: ${screenMdMin}) {
    min-height: 450px;
  }
`;
export const SecondaryHeader = styled(Type.h2) `
  color: white;
  font-size: 48px;
  font-weight: 900;
  letter-spacing: -0.02em;
  line-height: 1.2;
  padding: 112px 15px 32px;

  @media (min-width: ${screenSmMin}) {
    font-size: 60px;
    padding: 112px 90px 32px;
  }

  @media (min-width: ${screenMdMin}) {
    font-size: 80px;
    padding: 0px 100px 32px;
  }
`;
export const ButtonContainer = styled.div `
  padding: 0 15px 112px;

  @media (min-width: ${screenMdMin}) {
    padding: 0;
  }
`;
export const StyledButton = styled(Button) `
  :lang(ru) {
    letter-spacing: 0 !important;
  }
`;
//# sourceMappingURL=components.js.map