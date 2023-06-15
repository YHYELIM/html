import { screenSmMin, screenMdMin } from '@spotify-internal/encore-web';
import styled from 'styled-components';
const minScreenWidth = 320;
const fluidFontSize = (minSize, maxSize, maxScreenWidth) => `calc(${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${minScreenWidth}px) / (${maxScreenWidth} - ${minScreenWidth})))`;
export const Wrapper = styled.div `
  @media (min-width: ${screenSmMin}) {
    display: flex;
    flex-direction: ${({ propositionPosition }) => propositionPosition === 'before' ? 'row-reverse' : 'row'};
  }
`;
export const MessageSpacer = styled.div `
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;

  @media (min-width: ${screenSmMin}) {
    padding: 60px;
    width: 60%;
  }
`;
export const UpsellPropositionSpacer = styled.div `
  display: block;

  @media (min-width: ${screenSmMin}) {
    width: 40%;
  }
`;
export const UpsellPropositionContainer = styled.div `
  display: flex;
  position: relative;
  width: 100%;
  height: 100%;

  align-items: ${({ options }) => (options === null || options === void 0 ? void 0 : options.verticalAlign) || 'center'};

  margin: 25px auto 0 auto;

  max-width: 500px;
  font-size: clamp(7px, ${fluidFontSize(7, 11, 500)}, 11px);

  @media (min-width: ${screenSmMin}) {
    margin-top: 0;

    font-size: ${fluidFontSize(6, 7, 992)};
  }

  @media (min-width: ${screenMdMin}) {
    @supports (font-size: clamp(0px, 0px, 0px)) {
      font-size: clamp(7px, ${fluidFontSize(7, 9, 1200)}, 10px);
    }
  }
`;
export const UpsellPropositionPlaceholder = styled.div `
  background-color: #bbb;
  width: 100%;
  height: 100%;
  padding-bottom: 100%;

  @media (min-width: ${screenSmMin}) {
    padding-bottom: inherit;
  }
`;
export const UpsellImageWrapper = styled.div `
  margin: 0 auto;
  display: flex;
  align-items: center;

  & > picture > img {
    width: 100%;
  }
`;
export const ButtonGroup = styled.div `
  margin: 32px 0;

  & > div {
    margin-top: 8px;
    a {
      width: 100%;
    }

    @media (min-width: ${screenSmMin}) {
      display: inline-block;
      margin-right: 8px;

      a {
        width: auto;
      }
    }
  }
`;
//# sourceMappingURL=components.js.map