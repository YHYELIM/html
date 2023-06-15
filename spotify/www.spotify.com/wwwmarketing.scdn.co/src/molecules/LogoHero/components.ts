import styled from 'styled-components';
import { Type, screenXsMin, screenSmMin, screenMdMin, screenLgMin, } from '@spotify-internal/encore-web';
import Container from '../../atoms/Container';
import LegalTerms from '../../atoms/LegalTerms';
export const Wrapper = styled(Container) `
  color: ${({ color }) => color};

  ${({ background }) => {
    if (!background)
        return '';
    const { color = '', secondary = '', mobile = '', tablet = '', mobileMargin = '', tabletMargin = '', desktop = '', } = background;
    return `
      ${mobileMargin && `padding-bottom: ${mobileMargin}`};
      ${mobile && `background: ${mobile}`};
      background-color: ${color};
      ${color &&
        secondary &&
        `background: transparent linear-gradient(0deg, ${secondary}, ${color}) no-repeat 0 0`};

      @media (min-width: ${screenXsMin}) {
        ${tabletMargin && `padding-bottom: ${tabletMargin}`};
        ${tablet && `background: ${tablet}`};
        background-color: ${color};
      }

      @media (min-width: ${screenMdMin}) {
        ${mobileMargin && 'padding-bottom: 0'};
        ${desktop && `background: ${desktop}`};
        background-color: ${color};
      }
    `;
}}

  @media (min-width: ${screenLgMin}) {
    ${({ offset = 0 }) => offset &&
    `
      margin-top: ${offset}px;
      padding-top: ${-offset}px;
    `}
  }

  a {
    color: ${({ color }) => color};
    text-decoration: underline;
  }

  > article {
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 auto;
    padding: 0 15px;
    padding-top: ${({ hasNavbar }) => hasNavbar ? '110px !important' : '65px'};
    padding-bottom: ${({ hasImage }) => (hasImage ? '0' : '60px')};

    @media (min-width: 768px) {
      width: 750px;
    }

    @media (min-width: 992px) {
      padding: ${({ hasNavbar }) => hasNavbar ? '190px 15px 0 !important' : '80px 15px 0'};
      width: 970px;
    }

    @media (min-width: 1200px) {
      width: 1170px;
    }
  }
`;
export const Main = styled.header `
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;

  text-align: center;

  @media (min-width: ${screenSmMin}) {
    margin-bottom: 30px;
  }

  ${props => props.hasImage &&
    `
    margin-bottom: 0;

    @media (min-width: ${screenSmMin}) {
      margin-bottom: 0;
    }

    @media (min-width: ${screenMdMin}) {
      align-items: stretch;
      flex-flow: row nowrap;
      text-align: left;
    }`}
`;
export const Content = styled.div `
  width: 100%;
  -webkit-font-smoothing: antialiased;

  @media (min-width: ${screenMdMin}) {
    margin-bottom: 80px;
  }
`;
export const SecondaryHeader = styled(Type.h2) `
  font-size: 18px;
  line-height: 1.5;
  margin: 15px 0;
  padding: 0;
  width: 100%;
  max-width: 100%;
  display: inline-block;

  ${({ fontWeight }) => {
    switch (fontWeight) {
        default:
        case 'bold':
            return 'font-weight: 600;';
        case 'regular':
            return 'font-weight: 400;';
    }
}}

  @media (min-width: ${screenXsMin}) {
    width: ${({ width = 'auto' }) => width};
    margin: 30px 0;
  }

  @media (min-width: 768px) {
    font-size: ${({ fontSize }) => {
    switch (fontSize) {
        default:
        case 'large':
            return '30px';
        case 'medium':
            return '24px';
        case 'small':
            return '16px';
    }
}};
  }
`;
export const Logo = styled.img `
  margin: 0 auto 10px;
  max-height: 70px;

  @media (min-width: ${screenMdMin}) {
    ${({ size }) => {
    switch (size) {
        default:
        case 'large':
            return 'max-height: 120px;';
        case 'small':
            return 'max-height: 92px;';
    }
}}
    ${({ hasImage }) => hasImage && 'margin: 0 0 10px'};
  }
`;
export const ButtonGroup = styled.div `
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin: 20px 0;

  > div:first-of-type {
    margin-right: 18px;
  }

  ${({ hasImage }) => hasImage &&
    `
    @media (min-width: ${screenMdMin}) {
      justify-content: flex-start;
    }
  `}

  > p {
    font-size: 18px;
    text-align: center;
    width: 100%;

    ${({ hasImage }) => hasImage && 'text-align: left'}
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
export const Image = styled.div `
  background-image: ${({ mobile }) => mobile};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vw;

  @media (min-width: 430px) {
    max-height: 430px;
    width: 430px;
  }

  @media (min-width: ${screenSmMin}) {
    background-image: ${({ mobile, tablet }) => tablet || mobile};
  }

  @media (min-width: ${screenMdMin}) {
    max-height: 600px;
    background-image: ${({ desktop }) => desktop};
  }
`;
export const LegalContainer = styled.footer `
  font-size: 12px;
  width: 100%;
`;
export const LegalText = styled(LegalTerms) `
  display: inline-block;
  @media (min-width: ${screenMdMin}) {
    max-width: 630px;
  }
`;
//# sourceMappingURL=components.js.map