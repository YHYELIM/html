import styled from 'styled-components';
import { Type, screenXsMin, screenSmMin, screenMdMin, screenLgMin, white, black, } from '@spotify-internal/encore-web';
import Container from '../../atoms/Container';
export const Wrapper = styled(Container) `
  color: ${({ color }) => color};
  a {
    color: ${({ color }) => color};
    text-decoration: underline;
  }

  > article {
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 35px 15px;
    align-items: center;

    ${({ isFullHeight }) => (isFullHeight ? 'height: 100vh;' : '')}

    ${({ size }) => {
    switch (size) {
        default:
        case 'large':
            return `
            @media (min-width: 1200px) {
              min-height: 70vh;
            }
          `;
        case 'medium':
            return `
            min-height: 600px;

            @media (min-width: ${screenXsMin}) {
              min-height: 650px;
            }

            @media (min-width: ${screenMdMin}) {
              min-height: 340px;
            }

            @media (min-width: ${screenLgMin}) {
              padding: 115px 200px 35px;
            }
          `;
        case 'small':
            return `
            min-height: 400px;
          `;
    }
}}

    @media (min-width: 768px) {
      width: 750px;
    }

    @media (min-width: 992px) {
      width: 970px;
    }

    @media (min-width: 1200px) {
      width: 100%;
    }
  }

  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};

  /*
   * this selector is a dirty trick to increase specificity.
   * another "background" rule, overriding "background-color"
   * may be specified below - we aim to support both background colors
   * AND setting multiple background properties for images.
   */
  && {
    ${({ background }) => background &&
    background.color &&
    `background-color: ${background.color}`};
  }
`;
export const Main = styled.header `
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  align-content: flex-start;

  @media (min-width: ${screenMdMin}) {
    max-width: 940px;
    flex-direction: row;
  }

  @media (min-width: ${screenLgMin}) {
    max-width: 1140px;
    flex-direction: row;
    align-items: flex-start;
  }
`;
export const Content = styled.div `
  display: flex;
  flex-direction: column;
  flex-shrink: 1;
  box-sizing: border-box;
  text-align: center;

  @media (min-width: ${screenMdMin}) {
    flex: 50%;
    text-align: left;
    padding-right: 56px;
  }
  -webkit-font-smoothing: antialiased;
`;
export const HeroImage = styled.div `
  display: flex;
  padding-left: 56px;
  flex-direction: column;
  box-sizing: border-box;
  height: 132px;
  width: 132px;
  margin: 16px 0;
  ${({ background }) => background && background.mobile && `background: ${background.mobile};`};
  background-size: contain;

  @media (min-width: ${screenSmMin}) {
    width: 400px;
    height: 400px;
  }

  @media (min-width: ${screenMdMin}) {
    width: 400px;
    height: 400px;
    margin-left: auto;
    ${({ background }) => background && background.mobileMargin && `padding-bottom: 0;`};
    ${({ background }) => background && background.desktop && `background: ${background.desktop};`};
    background-size: contain;
    background-origin: content-box;
  }

  @media (min-width: ${screenLgMin}) {
    width: 500px;
    height: 500px;
    margin-left: auto;
    ${({ background }) => background &&
    background.wideDesktop &&
    `background: ${background.wideDesktop};`};
    background-size: contain;
    background-origin: content-box;
  }
`;
export const Header = styled(Type.h1) `
  margin: 0;
  padding: 0;
  font-weight: 600;
  max-width: 100%;
  width: auto;
  display: inline-block;
  font-size: 30px;
  line-height: 30px;
  letter-spacing: -0.04em;

  @media (min-width: ${screenSmMin}) {
    font-size: 64px;
    line-height: 64px;
  }
`;
export const SecondaryHeader = styled(Type.h2) `
  margin: 16px 0;
  padding: 0;
  ${({ isSub }) => (isSub ? 'margin-bottom: 0;' : '')}
  width: 100%;
  max-width: 268px;
  display: inline-block;
  font-size: 14px;
  line-height: 24px;
  font-weight: 400;

  @media (min-width: ${screenXsMin}) {
    width: ${({ width = 'auto' }) => width};
    margin: 16px 0;
    max-width: 100%;
  }

  @media (min-width: ${screenSmMin}) {
    font-size: 18px;
  }

  ${({ isSub }) => (isSub ? 'margin-bottom: 0;' : '')}
`;
export const LegalContainer = styled.footer `
  font-size: 13px;
  line-height: 16px;
  margin: 16px 0;
  width: 100%;
  @media (min-width: ${screenMdMin}) {
    margin: 32px 0;
  }
`;
export const LegalText = styled.div `
  display: inline-block;
  @media (min-width: ${screenMdMin}) {
    max-width: 630px;
  }
`;
export const SupHeader = styled.p `
  margin: 32px 0;
  font-size: 14px;
  line-height: 16px;
  text-transform: uppercase;
  display: none;
  letter-spacing: 0.05em;
  font-weight: 500;
  @media (min-width: ${screenMdMin}) {
    display: inline-block;
    margin: 14px 0 32px;
  }
`;
export const SupHeaderMobile = styled(SupHeader) `
  margin: 0;
  display: inline-block;
  @media (min-width: ${screenMdMin}) {
    display: none;
  }
`;
export const Logos = styled.div `
  margin: 10px 0;

  @media (min-width: 768px) {
    margin: 30px 0;
  }
`;
export const Logo = styled.img `
  display: inline-block;
  vertical-align: top;
  max-height: 30px;

  &:not(:first-child) {
    margin-left: 22px;
  }
`;
export const ButtonGroup = styled.div `
  display: block;
  margin: 16px 0 0 0;

  > div {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  a {
    width: 100%;
    box-sizing: border-box;
    &:hover:not(:focus):not(:disabled) {
      background-color: ${white};
      color: ${black}!important;
    }
  }

  @media (min-width: 768px) {
    margin: 35px 0 0;
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
export const HeroImageContainer = styled.div `
  text-align: center;
`;
//# sourceMappingURL=components.js.map