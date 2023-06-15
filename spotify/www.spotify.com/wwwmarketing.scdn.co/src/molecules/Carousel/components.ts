import styled, { css } from 'styled-components';
import Image from '../../atoms/Image/image';
import Header from '../../atoms/Header';
import { screenSmMin, screenLgMin } from '@spotify-internal/encore-web';
import { responsiveSize } from '../../utils/helpers';
const maxWidth = '1170px';
export const Wrapper = styled.div `
  margin: 0px auto;
  max-width: ${maxWidth};
`;
export const CustomHeader = styled(Header) `
  --container-small-width: 65%;
  --headline-font-size: ${responsiveSize(50, 120, 320, 1440)};
  --headline-line-height: ${responsiveSize(60, 130, 320, 1440)};
  --subheadline-font-size: ${responsiveSize(22, 32, 320, 1440)};
  --subheadline-line-height: ${responsiveSize(26, 37, 320, 1440)};
  --subheadline-small-width: 75%;
`;
export const CarouselContainer = styled.div `
  position: relative;
`;
export const CardsWrapper = styled.div ``;
export const CardsContainer = styled.ul `
  --total-cards: ${({ totalCards }) => totalCards};
  --card-width: 74vw;
  --card-height: calc(1.25 * var(--card-width));
  --card-gap: 16px;

  @media (min-width: ${screenSmMin}) {
    --card-width: 65vw;
  }

  @media (min-width: ${screenLgMin}) {
    --card-width: calc((${maxWidth} / var(--total-cards) - var(--card-gap)));
    --card-height: var(--card-width);
  }

  margin-left: calc(-1 * var(--container-padding-before));
  margin-right: calc(-1 * var(--container-padding-after));

  margin-top: 0;
  margin-bottom: 0;
  padding-bottom: 16px;

  display: flex;
  list-style: none;
  justify-content: space-between;

  overflow-x: scroll;
  scroll-snap-type: x mandatory;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  @media (prefers-reduced-motion) {
    scroll-behavior: auto;
    -webkit-overflow-scrolling: auto;
  }

  padding-left: var(--container-padding-before);
  padding-right: var(--container-padding-after);
`;
export const Selector = styled.div `
  height: 4px;
  background-color: #535353;
  cursor: pointer;
`;
const selectorStatusGenerator = (total) => {
    let styles = `
    & ~ li li:nth-child(1) ${Selector}:not([data-active]),
    & ~ li li ${Selector}[data-active="true"]
     {
      background-color: white;
    }
  `;
    for (let i = 1; i <= total; i++) {
        styles += `
      &:nth-child(${i}):target {

        & ~ li li ${Selector}:not([data-active]) {
          background-color: #535353;
        }

        & ~ li li:nth-child(${i}) ${Selector}:not([data-active]) {
          background-color: white;
        }
      }
    `;
    }
    return css `
    ${styles}
  `;
};
export const Card = styled(Image) `
  box-sizing: border-box;
  min-width: var(--card-width);
  margin-right: var(--card-gap);
  height: var(--card-height);
  border-radius: 20px;

  background-size: cover;

  color: white;

  scroll-snap-align: center;

  ${({ totalCards }) => selectorStatusGenerator(totalCards)}
`;
export const Logo = styled(Image) `
  --logo-width: clamp(65px, 20%, 157px);

  width: var(--logo-width);
  padding-top: calc(var(--logo-width) / 4);
`;
export const LogoArea = styled.div `
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;
export const CardDescription = styled.p `
  margin-bottom: 16px;

  font-size: ${responsiveSize(16, 32, 320, 1440)};
  line-height: ${responsiveSize(19, 37, 320, 1440)};

  @media (min-width: ${screenLgMin}) {
    font-size: 18px;
    line-height: 22px;
  }
`;
export const BackgroundGradient = styled.div `
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding: 13px;
  border-radius: 20px;

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(0, 0, 0, 1) 88%
  );
`;
export const SelectorsNavigation = styled.nav `
  @media (min-width: ${screenLgMin}) {
    display: none;
  }
`;
export const SelectorsContainer = styled.ul `
  display: flex;
  max-width: 70%;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const SelectorWrapper = styled.li `
  flex-grow: 1;
  margin-right: 10px;
`;
export const SelectorsFloater = styled.li `
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
`;
//# sourceMappingURL=components.js.map