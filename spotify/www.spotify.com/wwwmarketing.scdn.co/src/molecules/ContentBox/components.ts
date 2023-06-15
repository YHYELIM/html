import styled from 'styled-components';
import Container from '../../atoms/Container';
import { Type, screenSmMin, screenMdMin } from '@spotify-internal/encore-web';
export const StyledContainer = styled(Container) `
  & > article {
    padding: 0 15px;
  }
`;
export const TextContainer = styled.div `
  width: 100%;
  margin: 45px 0;
  text-align: center;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (min-width: ${screenMdMin}) {
    margin: 0;
    height: 540px;
    justify-content: ${({ contentAlign }) => {
    switch (contentAlign) {
        case 'top':
            return 'flex-start';
        case 'center':
            return 'center';
        case 'bottom':
            return 'flex-end';
        default:
            return 'flex-start';
    }
}};
    align-items: flex-start;
    width: 45%;
    text-align: left;
  }
`;
export const ImageContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  @media (min-width: ${screenMdMin}) {
    width: 55%;
    justify-content: ${({ desktopPosition }) => {
    switch (desktopPosition) {
        case 'top-left':
        case 'bottom-left':
            return 'flex-start';
        default:
            return 'flex-end';
    }
}};
    align-items: ${({ desktopPosition }) => {
    switch (desktopPosition) {
        case 'top-right':
        case 'top-left':
            return 'flex-start';
        case 'bottom-right':
        case 'bottom-left':
            return 'flex-end';
        default:
            return 'center';
    }
}};
  }
`;
export const Content = styled.div `
  display: flex;
  flex-direction: ${({ mobilePosition }) => {
    switch (mobilePosition) {
        case 'top-center':
            return 'column-reverse';
        default:
            return 'column';
    }
}};

  @media (min-width: ${screenMdMin}) {
    flex-direction: ${({ desktopPosition }) => {
    switch (desktopPosition) {
        case 'center-left':
        case 'top-left':
        case 'bottom-left':
            return 'row-reverse';
        default:
            return 'row';
    }
}};
  }
`;
export const Header = styled(Type.h2) `
  max-width: 430px;
  font-size: 32px;
  line-height: 40px;
  margin: 0;
  padding: 0;

  @media (min-width: ${screenMdMin}) {
    margin-top: ${({ margin }) => margin};
    font-size: 40px;
    line-height: 50px;
  }
`;
export const Body = styled.p `
  max-width: 430px;
  font-size: 18px;
  margin: 0;
  margin-top: 32px;
  @media (min-width: ${screenMdMin}) {
    font-size: 24px;
  }

  a {
    color: inherit;
  }
`;
export const Image = styled.div `
  background-image: ${({ mobile }) => mobile};
  background-size: contain;
  background-position: ${({ mobilePosition }) => {
    switch (mobilePosition) {
        case 'top-center':
            return 'center top';
        case 'bottom-center':
            return 'center bottom';
        default:
            return 'center';
    }
}};
  background-repeat: no-repeat;
  width: 100%;
  height: 100vw;

  @media (min-width: 430px) {
    background-position: center;
    max-height: 430px;
    width: 430px;
  }

  @media (min-width: ${screenSmMin}) {
    background-image: ${({ mobile, tablet }) => tablet || mobile};
  }

  @media (min-width: ${screenMdMin}) {
    background-image: ${({ desktop }) => desktop};
  }
`;
//# sourceMappingURL=components.js.map