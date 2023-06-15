import styled from 'styled-components';
import { Type, screenXsMin, screenSmMin, screenMdMin, screenLgMin, spacer8, spacer16, spacer24, spacer32, spacer40, spacer48, spacer72, } from '@spotify-internal/encore-web';
import Container from '../../atoms/Container';
import Image from '../../atoms/Image';
import LegalTerms from '../../atoms/LegalTerms';
import AppStoreBadge from '../../atoms/AppStoreBadge';
export const Wrapper = styled(Container) `
  ${({ color }) => color && `--text-base: ${color}`};
  /*
   * fallback ensures retrocompatibility on old implementations
   * of this component, without a theme defined
   */
  color: var(--text-base, '#FFF');

  a {
    color: var(--text-base, '#FFF');
    text-decoration: underline;
  }

  > article {
    font-family: spotify-circular, Circular, Helvetica, Arial, sans-serif;
    box-sizing: border-box;
    height: auto;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding-top: 0;
    padding-bottom: 0;

    ${({ isFullHeight }) => (isFullHeight ? 'height: 100vh;' : '')}
    ${({ size, ignoreLegacySizeProp, disablePaddings }) => {
    if (disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.end)
        return 'min-height: 0;';
    if (ignoreLegacySizeProp)
        return 'min-height: 480px;';
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
      ${({ disablePaddings }) => (disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.start) && `padding-top:${spacer24};`}
      width: 1170px;
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
  ${({ background }) => background && background.size && `background-size: ${background.size}`};
  ${({ background }) => background &&
    background.mobileMargin &&
    `padding-bottom: ${background.mobileMargin};`}
  ${({ background }) => background && background.mobile && `background: ${background.mobile}`};

  @media (min-width: ${screenXsMin}) {
    ${({ background }) => background &&
    background.tabletMargin &&
    `padding-bottom: ${background.tabletMargin};`};
    ${({ background }) => background && background.tablet && `background: ${background.tablet};`};
  }

  @media (min-width: ${screenMdMin}) {
    ${({ background }) => background && background.mobileMargin && `padding-bottom: 0;`};
    ${({ background }) => background && background.desktop && `background: ${background.desktop};`};
  }

  @media (min-width: ${screenLgMin}) {
    ${({ background }) => background &&
    background.wideDesktop &&
    `background: ${background.wideDesktop};`};
    ${({ offset = 0 }) => offset && `margin-top: ${offset}px; padding-top: ${-offset}px;`};
  }
`;
export const Main = styled.header `
  flex-grow: 1;
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: ${screenLgMin}) {
    flex-direction: row;
  }
`;
export const Content = styled.div `
  ${({ disablePaddings }) => (disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.start)
    ? `padding-top: ${spacer24}`
    : `padding-top: ${spacer48}`};
  padding-bottom: ${({ hasProposition }) => hasProposition ? spacer24 : spacer48};
  ${({ disablePaddings }) => (disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.end) ? `padding-bottom: ${spacer24}` : ``};
  width: 100%;
  -webkit-font-smoothing: antialiased;
  @media (min-width: ${screenSmMin}) {
    padding-bottom: ${({ hasProposition }) => hasProposition ? spacer48 : spacer72};
    ${({ disablePaddings }) => (disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.end) ? `padding-bottom: ${spacer24}` : ``};
  }

  @media (min-width: ${screenLgMin}) {
    ${({ hasProposition }) => hasProposition ? `margin-right: ${spacer32};` : ''}
    text-align: ${({ hasProposition }) => hasProposition ? 'left' : 'inherit'};
    ${({ disablePaddings }) => (disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.start) ? 'padding-top: 0' : `padding-top: ${spacer72}`};
    ${({ disablePaddings }) => (disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.end)
    ? `padding-bottom: ${spacer40}`
    : `padding-bottom: ${spacer72}`};
  }
`;
export const Header = styled(Type.h1) `
  line-height: ${({ addSpacing }) => (addSpacing ? '1.5' : '1.2')};
  margin: 0;
  padding: 0;
  font-weight: 900;
  max-width: 100%;
  width: auto;
  display: inline-block;

  font-size: ${({ fontSizeValue }) => {
    switch (fontSizeValue) {
        default:
        case 'large':
            return `calc(24px + (48 - 24) * ((100vw - 320px) / (480 - 320)))`;
        case 'medium-large':
            return `calc(24px + (32 - 24) * ((100vw - 320px) / (480 - 320)))`;
        case 'medium':
            return `calc(24px + (28 - 24) * ((100vw - 320px) / (480 - 320)))`;
        case 'small':
            return `calc(24px + (24 - 24) * ((100vw - 320px) / (480 - 320)))`;
    }
}};

  @media (min-width: ${screenXsMin}) {
    font-size: ${({ fontSizeValue }) => {
    switch (fontSizeValue) {
        default:
        case 'large':
            return '48px';
        case 'medium-large':
            return '32px';
        case 'medium':
            return '28px';
        case 'small':
            return '24px';
    }
}};
  }

  @media (min-width: ${screenSmMin}) {
    font-size: ${({ fontSizeValue }) => {
    switch (fontSizeValue) {
        default:
        case 'large':
            return '80px';
        case 'medium-large':
            return '60px';
        case 'medium-small':
            return '48px';
        case 'medium':
            return '40px';
        case 'small':
            return '24px';
    }
}};
  }

  @media (min-width: ${screenMdMin}) {
    width: ${({ width = 'auto' }) => width};
  }
`;
export const SecondaryHeader = styled(Type.h2) `
  line-height: 1.5;
  margin: 15px 0;
  padding: 0;
  ${({ isSub }) => (isSub ? 'margin-bottom: 0;' : '')}
  width: 100%;
  max-width: 100%;
  display: inline-block;

  ${({ fontWeightValue }) => {
    switch (fontWeightValue) {
        default:
        case 'bold':
            return 'font-weight: 600;';
        case 'regular':
            return 'font-weight: 400;';
    }
}}

  font-size: ${({ fontSizeValue }) => {
    switch (fontSizeValue) {
        default:
        case 'large':
            return '24px';
        case 'medium':
            return '18px';
        case 'small':
            return '18px';
    }
}};

  @media (min-width: ${screenXsMin}) {
    width: ${({ width = 'auto' }) => width};
    margin: 30px 0;
  }

  @media (min-width: 768px) {
    font-size: ${({ fontSizeValue }) => {
    switch (fontSizeValue) {
        default:
        case 'large':
            return '30px';
        case 'medium':
            return '24px';
        case 'small':
            return '16px';
    }
}};

    ${({ isSub }) => (isSub ? 'margin-bottom: 0;' : '')}
  }
`;
export const LegalContainer = styled.footer `
  font-size: 12px;
  margin-top: ${spacer40};
  width: 100%;
`;
export const LegalText = styled(LegalTerms) `
  display: inline-block;
  @media (min-width: ${screenMdMin}) {
    max-width: 630px;
  }
`;
export const Logos = styled.div `
  margin-bottom: ${spacer16};
  @media (min-width: ${screenLgMin}) {
    ${({ hasProposition }) => hasProposition ? 'display: flex; align-items: flex-start;' : ''}
  }
`;
export const Logo = styled.img `
  display: inline-block;
  vertical-align: top;
  max-width: 80%;
  max-height: 70px;

  @media (min-width: ${screenMdMin}) {
    ${({ size }) => {
    switch (size) {
        default:
        case 'small':
            return 'max-height: 30px;';
        case 'medium':
            return 'max-height: 92px;';
        case 'large':
            return 'max-height: 120px;';
    }
}}
  }

  &:not(:first-child) {
    margin-left: 22px;
  }
`;
export const ImageContainer = styled.div `
  width: 100%;
  height: 100%;
  max-width: 320px;

  @media (min-width: ${screenMdMin}) {
    max-width: 400px;
  }

  ${({ verticalAlignment: { mobile } }) => mobile === 'center' ? `padding-bottom: ${spacer48};` : ''}

  ${({ verticalAlignment: { desktop } }) => desktop === 'center'
    ? `@media (min-width: ${screenLgMin}) {
      padding-bottom: 0;
    }`
    : ''}
`;
export const ImageStyle = styled(Image) `
  width: 100%;
  ${({ verticalAlignment: { mobile } }) => {
    let position;
    switch (mobile) {
        case 'bottom':
            position = 'center bottom';
            break;
        case 'center':
        default:
            position = 'center center';
            break;
    }
    return `background-position: ${position};`;
}}

  padding-top: 100%;

  @media (min-width: ${screenLgMin}) {
    ${({ verticalAlignment: { desktop } }) => {
    let position;
    switch (desktop) {
        case 'top':
            position = 'center top';
            break;
        case 'bottom':
            position = 'center bottom';
            break;
        case 'none':
        case 'center':
        default:
            position = 'center center';
            break;
    }
    return `background-position: ${position};`;
}}
  }
`;
export const ButtonGroup = styled.div `
  display: block;
  margin: 20px 0;

  > div {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }

  a {
    width: 100%;
    box-sizing: border-box;
    text-decoration: none;
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
export const Benefits = styled.ul `
  padding: 0;
  margin: 20px 0;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;
export const Benefit = styled.li `
  &:before {
    padding-right: 5px;
    content: '\\2713';
  }

  list-style: none;

  @media (min-width: 768px) {
    padding-right: 20px;
    font-size: 20px;
  }
`;
export const Label = styled(Type.p) `
  margin-bottom: ${spacer8};
  font-size: 10px;
  font-weight: 600;
  line-height: 16px;
  text-transform: uppercase;
  letter-spacing: 0.1em;

  @media (min-width: ${screenLgMin}) {
    font-size: 14px;
    margin: ${spacer16} 0 ${spacer32};
  }
`;
export const SharingContainer = styled.div `
  max-width: 400px;
  ${({ textAlign }) => textAlign === 'center'
    ? `margin: ${spacer16} auto auto auto`
    : `margin-top: ${spacer16}`};

  @media (min-width: ${screenLgMin}) {
    margin: ${spacer16} 0 auto 0;
  }
`;
export const StyledAppStoreBadge = styled(AppStoreBadge) `
  margin-right: 20px;
`;
//# sourceMappingURL=components.js.map