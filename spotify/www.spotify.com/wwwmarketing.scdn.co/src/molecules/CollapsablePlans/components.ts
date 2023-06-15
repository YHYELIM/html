import styled from 'styled-components';
import { IconChevronDown, Type, TextLink, IconChevronRight, white, black, spacer16, spacer8, spacer4, spacer20, screenSmMin, gray50, gray80, gray90, desktopBallad, desktopViola, screenXsMin, spacer24, rose180, spacer48, } from '@spotify-internal/encore-web';
import { default as BaseContainer } from '../../atoms/Container';
const iconSize = '32px';
export const Container = styled(BaseContainer) `
  margin: 0 auto;

  > section:first-child,
  article:first-child {
    padding-top: 0;
    --container-padding-start: 0;
    --container-padding-end: ${spacer48};

    @media (min-width: ${screenSmMin}) {
      padding-bottom: ${spacer48};
    }
  }

  > * {
    max-width: 610px;
  }
`;
export const HeadingContainer = styled.div `
  text-align: left;
  padding: ${spacer24} 0 ${spacer16} 0;
`;
export const PlanBanner = styled.div `
  display: flex;
  box-sizing: border-box;
  background: ${black};
  color: ${white};
  padding: ${spacer8} ${spacer16};
  width: 100%;
  border-radius: 4px 4px 0px 0px;
  text-transform: uppercase;
`;
export const ListContainer = styled.ul `
  margin: 0 auto ${spacer8};
  padding: 0;
  list-style: none;
  background: ${white};
  border: none;

  > li {
    border: 1px solid ${gray50};
    border-top: none;

    :last-child {
      border-bottom: 1px solid ${gray50};
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    :first-child {
      border: 1px solid ${gray50};
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    [href]:hover,
    [href]:hover:focus,
    &:hover,
    &:focus-within,
    &[href]:focus-visible:not([disabled]) {
      border-color: ${black};
      text-decoration: none;
      color: ${black};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    &[open]:focus-within {
      box-shadow: 0 0 0 1px ${black};
    }

    &:not(:has(ul)) svg,
    &:has(ul:empty) svg {
      transform: rotate(-90deg) !important;
    }

    ul:empty {
      display: none;
    }

    &.disabled {
      cursor: default;
      pointer-events: none;
      background-color: ${gray90};
      box-shadow: none;
      border: 1px solid ${gray80};

      div,
      details,
      summary,
      h2,
      span {
        cursor: default;
      }
      h2,
      p,
      span {
        opacity: 0.2;
      }
      svg {
        display: none;
      }
      .ineligible-text {
        display: block;
        opacity: 1;
      }
    }
  }

  @media (min-width: ${screenXsMin}) {
    margin: 0;
  }

  ${PlanBanner} + & {
    border-radius: 0 0 4px 4px;
  }
`;
export const StyledChevron = styled(IconChevronDown) `
  vertical-align: middle;
  width: ${iconSize};
  height: ${iconSize};
`;
export const Card = styled.article `
  padding: 0;
  box-sizing: border-box;

  @media (min-width: ${screenSmMin}) {
    padding: 0;
  }

  &[open] ${StyledChevron} {
    transform: rotate(180deg);
  }
`;
export const Plan = styled(TextLink) `
  padding: 0;
  box-sizing: border-box;
  width: 100%;
  text-decoration: none;
  color: inherit;

  @media (min-width: ${screenSmMin}) {
    padding: 0;
  }
`;
export const PlansTitle = styled(Type.h2) `
  margin: 0 0 ${spacer4};
  padding: 0;
`;
export const PlansSubtitle = styled(Type.h2) `
  padding: 0;
`;
export const Drawer = styled.ul `
  margin: 0;
  padding: 0 ${spacer20} ${spacer16} ${spacer20};
  list-style: none;
  border-top: none;

  > li {
    border: 1px solid ${gray50};
    border-top: none;

    :last-child {
      border-bottom: 1px solid ${gray50};
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }

    :first-child {
      border: 1px solid ${gray50};
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }

    [href]:hover,
    [href]:hover:focus,
    &:hover,
    &:focus-within,
    &[href]:focus-visible:not([disabled]) {
      border-color: ${black};
      text-decoration: none;
      color: ${black};
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    }

    &[open]:focus-within {
      box-shadow: 0 0 0 1px ${black};
    }
  }
`;
export const PaymentChevron = styled(IconChevronRight) `
  vertical-align: middle;
  width: ${iconSize};
  height: ${iconSize};
  padding: ${spacer20} ${spacer16} ${spacer20} 23px;

  ${({ textDirection }) => textDirection === 'rtl' ? `transform: rotate(180deg);` : ''};
`;
export const PaymentOption = styled(TextLink) `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: ${spacer16} 0 ${spacer16} ${spacer16};
  text-decoration: none;
  color: inherit;
`;
export const PaymentMethods = styled.ul `
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const PaymentMethod = styled.img `
  margin: 0 ${spacer4} ${spacer4} 0;
  max-width: 120px;
  height: 24px;
`;
export const HeaderArea = styled.div `
  display: inline-block;
  vertical-align: middle;

  ${({ planLink }) => (planLink ? '' : `width: calc(100% - ${iconSize});`)};
`;
export const PlanHeaderTitle = styled(Type.h2) `
  margin: 0;
  padding: 0;
  font-size: ${desktopBallad.fontSize};
`;
export const PlanHeader = styled.div `
  padding: ${spacer20} ${spacer16};

  [data-selectable-plan='true'] & {
    cursor: pointer;

    list-style: none;
    &::-webkit-details-marker {
      display: none;
    }

    outline: none;

    &:focus-visible {
      border-radius: 4px;
      box-shadow: 0 0 0 2px ${black};
    }
  }

  [open] &:focus-visible {
    box-shadow: none;
  }
`;
export const PlanHeaderSubtitle = styled(Type.p) `
  margin: ${spacer4} 0 0 0;
  padding: 0;
  font-size: ${desktopBallad.fontSize};
`;
export const PlanHeaderIneligibleText = styled(Type.p) `
  display: none;
  margin: ${spacer4} 0 0 0;
  padding: 0;
  font-size: ${desktopBallad.fontSize};
`;
export const Promotion = styled(Type) `
  color: ${({ color }) => (color ? `${color}` : `${black}`)};
  background-color: ${({ background }) => background ? `${background}` : `${rose180}`};
  border-radius: 4px;
  padding: ${spacer4} ${spacer8};
  display: inline-block;
  margin-bottom: ${spacer8};
  font-size: ${desktopViola.fontSize};

  margin-block-start: 0;
  margin-block-end: ${spacer8};
`;
//# sourceMappingURL=components.js.map