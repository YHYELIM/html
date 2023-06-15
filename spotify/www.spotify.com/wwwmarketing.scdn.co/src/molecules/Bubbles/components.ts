import styled from 'styled-components';
import { screenSmMin, screenLgMin, spacer24, spacer32, spacer56, spacer64, spacer72, } from '@spotify-internal/encore-web';
import Container from '../../atoms/Container';
import Image from '../../atoms/Image/image';
import Header from '../../atoms/Header';
import { responsiveSize } from '../../utils/helpers';
const screenOverflowMin = '1310px';
export const CustomContainer = styled(Container) `
  --top-overflow: ${spacer24};

  @media (min-width: ${screenSmMin}) {
    --top-overflow: 0px;
  }

  --bottom-overflow: 90px;

  margin-top: calc(var(--top-overflow) * -1);
  margin-bottom: calc(var(--bottom-overflow) * -1);

  /*
   * making a standalone component where content can overflow
   * over the next one (but not horizontally) is challenging -
   * this solution uses a background
   * that is partially coloured, partially transparent and a
   * negative margin to "pull" over the next component.
   */
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) calc(0% + var(--top-overflow)),
    var(--background-base) calc(0% + var(--top-overflow)),
    var(--background-base) calc(100% - var(--bottom-overflow)),
    rgba(255, 255, 255, 0) calc(100% - var(--bottom-overflow)),
    rgba(255, 255, 255, 0) 100%
  );
`;
export const CustomHeader = styled(Header) `
  position: relative;
  z-index: 1;

  --container-small-width: 60%;

  --headline-font-size: ${responsiveSize(50, 120, 320, 1440)};
  --headline-line-height: ${responsiveSize(60, 130, 320, 1440)};

  --subheadline-font-size: ${responsiveSize(22, 32, 320, 1440)};
  --subheadline-line-height: ${responsiveSize(26, 37, 320, 1440)};
  --subheadline-small-width: 92%;
  --subheadline-large-width: 78%;
`;
export const ComponentArea = styled.div `
  overflow: hidden;
  position: relative;

  padding-top: 152px;
  padding-bottom: 350px;
  padding-left: ${spacer32};
  padding-right: ${spacer32};

  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${screenSmMin}) {
    padding-bottom: 360px;
  }

  @media (min-width: ${screenLgMin}) {
    padding-left: ${spacer72};
    padding-right: ${spacer72};
    padding-bottom: 640px;

    max-width: ${screenOverflowMin};
  }

  @media (min-width: ${screenOverflowMin}) {
    overflow: visible;
  }
`;
export const ContentWrapper = styled.div `
  position: relative;
  z-index: 1;

  @media (min-width: ${screenSmMin}) {
    width: 60%;
  }
`;
export const Bubble = styled(Image) `
  --bubble-size: 100px;
  width: var(--bubble-size);
  height: var(--bubble-size);
  border-radius: calc(var(--bubble-size) / 2);
  background-size: cover;
  position: absolute;
`;
export const BubbleTopLeft = styled(Bubble) `
  --bubble-min-size: 216px;
  --bubble-max-size: 438px;
  --bubble-size: 216px;
  top: 0;
  left: min(calc(33.3vw * 0.75 - 175px), -60px);

  @media (min-width: ${screenSmMin}) {
    top: ${spacer24};
    left: 47%;
  }

  @media (min-width: ${screenLgMin}) {
    --bubble-size: 438px;
    top: ${spacer56};
    left: 42%;
  }
`;
export const BubbleTopRight = styled(Bubble) `
  --bubble-size: 148px;
  top: ${spacer64};
  right: min(calc(33.3vw * 0.75 - 150px), 46px);

  @media (min-width: ${screenSmMin}) {
    top: 120px;
    right: -2%;
  }

  @media (min-width: ${screenLgMin}) {
    --bubble-size: 300px;
    top: 270px;
    right: -${spacer64};
  }

  @media (min-width: ${screenOverflowMin}) {
    right: auto;
    left: calc(100% - var(--bubble-size));
  }
`;
export const BubbleBottomLeft = styled(Bubble) `
  --bubble-size: 171px;
  bottom: ${spacer72};
  left: min(calc(33.3vw * 0.75 - 150px), 46px);

  @media (min-width: ${screenSmMin}) {
    --bubble-size: 254px;
    bottom: ${spacer24};
  }

  @media (min-width: ${screenLgMin}) {
    --bubble-size: 438px;
  }
`;
export const BubbleBottomRight = styled(Bubble) `
  bottom: 0;
  right: -85px;

  --bubble-size: min(88vw, 319px);

  @media (min-width: ${screenSmMin}) {
    --bubble-size: 419px;
    right: -100px;
  }

  @media (min-width: ${screenLgMin}) {
    --bubble-size: 723px;
    right: -1%;
  }

  @media (min-width: ${screenOverflowMin}) {
    right: auto;
    left: calc(100% - var(--bubble-size));
  }
`;
//# sourceMappingURL=components.js.map