import styled from 'styled-components';
import { screenSmMin, screenMdMin, screenLgMin, spacer4, spacer8, spacer12, spacer20, spacer24, spacer16, spacer32, white, gray30, gray80, opacityBlack30, black, greenDark, screenXsMin, opacityBlack90, Banner, Type, } from '@spotify-internal/encore-web';
import Button from '../../atoms/Button';
import Container from '../../atoms/RiF_Experimental_Container';
import Image from '../../atoms/Image';
import LegalTerms from '../../atoms/LegalTerms';
import SectionHeader from '../../atoms/Header';
const desktop = '1024px';
const CardSection = styled.div `
  background-color: ${white};
  margin-right: auto;
  margin-left: auto;
  max-width: 400px;
  width: auto;
  padding-left: ${spacer20};
  padding-right: ${spacer20};
  ${({ isLastElement }) => isLastElement
    ? `
    border-radius: 0 0 10px 10px;
    margin-bottom: 16px;
  `
    : 'margin-bottom: 0px;'}

  @media (min-width: ${screenLgMin}) {
    ${({ length }) => length > 2 ? 'margin: 0 16px 0 0;' : 'margin: 0 auto; width: 400px;'}
    padding-left: ${spacer16};
    padding-right: ${spacer16};
  }
`;
export const IconsArea = styled.div `
  display: flex;
  justify-content: center;
  margin-top: ${spacer16};
`;
export const PaymentIcons = styled.ul `
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
`;
export const PaymentIconContainer = styled.li `
  /* Safari accessibility bug workaround
   * https://developer.mozilla.org/en-US/docs/Web/CSS/list-style#Accessibility_concerns
   */
  &::before {
    content: '\\200B';
  }

  margin-right: 7px;
  &:last-child {
    margin-right: 0;
  }
`;
export const PaymentMethod = styled(Image) `
  width: 29px;
  height: 20px;
  vertical-align: middle;
  background-color: ${white};
  border-radius: 3px;
`;
export const AdditionalPaymentIconsArea = styled.div `
  position: relative;
`;
export const AdditionalPaymentIconsContainer = styled(PaymentIcons) `
  display: none;
  position: absolute;
  top: 115%;
  left: 50%;
  padding: ${spacer8} 6px;
  background-color: var(--background-base, ${white});
  box-shadow: 0px 6px 18px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  transform: translateX(-50%);
  z-index: 1;

  grid-template-columns: repeat(
    ${({ amount }) => (amount < 4 ? amount : 4)},
    1fr
  );
  column-gap: ${spacer4};
  row-gap: ${spacer4};

  & ${PaymentIconContainer} {
    margin-right: auto;
  }
`;
export const AdditionalPaymentIconsSummary = styled.div `
  text-decoration: underline;
  margin-left: ${spacer4};
  &:hover,
  &:focus {
    & ${AdditionalPaymentIconsContainer} {
      display: grid;
    }
  }
`;
export const CustomStorefrontHeader = styled(SectionHeader) `
  > h2 {
    font-weight: 700;
  }
`;
export const Header = styled(Type.h3) `
  font-size: 24px;
  font-weight: bold;
  line-height: 24px;
  margin: 0 0 5px;
  padding: 0;
`;
export const Subheader = styled(Type.h2) `
  font-size: 18px;
  line-height: 24px;
  margin-top: ${spacer16};
  text-align: center;

  @media (min-width: ${desktop}) {
    margin-top: ${spacer24};
  }
`;
export const Intro = styled(CardSection) `
  position: relative;
  color: ${black};
  ${({ currentPlanVisible }) => currentPlanVisible ? '' : 'border-radius: 10px 10px 0 0;'}
  padding-top: ${spacer20};
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  ${({ hasDropShadow }) => hasDropShadow
    ? `box-shadow: 0px 8px 0px 0px ${white}, 0 0 8px ${opacityBlack30};`
    : ''}

  @media (min-width: ${screenLgMin}) {
    /* stylelint-disable property-no-vendor-prefix */
    -ms-grid-row: 1;
    -ms-grid-column: ${({ column }) => column};
    /* stylelint-enable */
    grid-row: 1;
    padding-top: ${spacer16};
  }

  p:last-of-type {
    margin-bottom: ${spacer20};
  }

  ${({ currentPlanVisible }) => currentPlanVisible
    ? `&::before {
      box-sizing: border-box;
      background: var(--inverted-background-base, ${black});
      color: var(--inverted-text-base, ${white});
      content: attr(data-current-plan-text);
      padding: ${spacer8} ${spacer16};
      position: absolute;
      left: 0;
      bottom: 100%;
      width: 100%;
      border-radius: 8px 8px 0px 0px;
      text-align: left;
      text-transform: uppercase;
    }`
    : ''}
`;
export const SmallText = styled.p `
  color: ${black};
  display: block;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  margin: 0 0 2px;
`;
export const Benefit = styled.li `
  display: flex;
  margin-bottom: 5px;
`;
export const BenefitText = styled.p `
  color: ${black};
  line-height: 22px;
  list-style: none;
  margin: 0;
  padding: 0;
`;
export const List = styled(CardSection) `
  padding-top: ${spacer32};
  padding-bottom: ${spacer16};
  list-style: none;
  ${({ hasDropShadow }) => hasDropShadow ? `box-shadow: 0 0 8px ${opacityBlack30};` : ''}
  margin-top: 0;

  @media (min-width: ${screenLgMin}) {
    /* stylelint-disable property-no-vendor-prefix */
    -ms-grid-row: 2;
    -ms-grid-column: ${({ column }) => column};
    /* stylelint-enable */
    grid-row: 2;
    padding-top: ${spacer20};
  }
`;
export const StyledDivider = styled.hr `
  align-self: stretch;
  border-color: ${gray80};
  margin: auto 0 0;
`;
export const LegalDisclaimerWrapper = styled(CardSection) `
  border-radius: 0 0 10px 10px;
  ${({ hasDropShadow }) => hasDropShadow
    ? `box-shadow: 0px -9px 0px 0px ${white}, 0 0 8px ${opacityBlack30};`
    : ''}
  padding-top: ${spacer4};
  padding-bottom: ${spacer20};
  margin-bottom: 16px;

  @media (min-width: ${screenLgMin}) {
    /* stylelint-disable property-no-vendor-prefix */
    -ms-grid-row: 4;
    -ms-grid-column: ${({ column }) => column};
    /* stylelint-enable */
    grid-row: 4;
    padding-top: ${spacer4};
    padding-bottom: ${spacer16};
  }
`;
export const LegalDisclaimer = styled(LegalTerms) `
  margin-top: 12px;
  color: ${({ isGroupLegalDisclaimer }) => isGroupLegalDisclaimer ? opacityBlack90 : gray30};
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  text-align: ${({ defaultDisclaimer }) => defaultDisclaimer ? 'center' : 'left'};
  ${({ defaultDisclaimer }) => (defaultDisclaimer ? 'padding-top: 14px;' : '')}
  ${({ defaultDisclaimer, additionalPlans }) => defaultDisclaimer && additionalPlans ? 'padding-bottom: 28px;' : ''}

  > a {
    color: ${({ isGroupLegalDisclaimer }) => isGroupLegalDisclaimer ? opacityBlack90 : gray30};
    text-decoration: underline;
  }
`;
export const PrimaryButton = styled(Button) `
  :hover {
    transform: scale(1.04);
  }
`;
export const SecondaryButton = styled(Button) `
  margin-top: 5px;
  :hover {
    color: ${greenDark};
  }
`;
export const ButtonContainer = styled(CardSection) `
  ${({ hasDropShadow }) => hasDropShadow
    ? `box-shadow: 0px -9px 0px 0px ${white}, 0 0 8px ${opacityBlack30};`
    : ''}
  padding-bottom: ${({ isLastElement }) => (isLastElement ? '36px' : 0)};
  text-align: center;

  @media (min-width: ${screenLgMin}) {
    /* stylelint-disable property-no-vendor-prefix */
    -ms-grid-row: 3;
    -ms-grid-column: ${({ column }) => column};
    /* stylelint-enable */
    grid-row: 3;
    padding-bottom: ${({ isLastElement }) => (isLastElement ? '36px' : 0)};
  }
`;
export const Plans = styled.div `
  margin: 50px 0 26px;

  @media (min-width: ${screenLgMin}) {
    /* stylelint-disable value-no-vendor-prefix */
    /* stylelint-disable property-no-vendor-prefix */
    /* stylelint-disable declaration-block-no-duplicate-properties */
    display: -ms-grid;
    display: grid;
    -ms-grid-rows: (auto) [4];
    -ms-grid-columns: ${({ length }) => `(1fr)[${length}]`};
    /* stylelint-enable */
    grid-template-rows: repeat(4, auto);
    grid-auto-flow: column;
    grid-template-columns: ${({ length }) => `repeat(${length}, 1fr)`};
    justify-content: center;
  }
`;
export const StyledContainer = styled(Container) `
  word-wrap: break-word;
  h2 {
    font-size: 48px;
    line-height: var(--headline-line-height, 28px);

    @media (min-width: ${screenXsMin}) {
      font-size: 60px;
      line-height: var(--headline-line-height, 28px);
    }
    @media (min-width: ${screenSmMin}) {
      font-size: var(--headline-font-size, 40px);
      line-height: var(--headline-line-height, 46px);
    }
  }
`;
export const Lozenges = styled.ul `
  margin: 0;
  padding: 0;
`;
export const Bundles = styled.ul `
  padding: 0;
  margin-top: ${spacer20};

  @media (min-width: ${screenSmMin}) {
    background-color: ${white};
    border-radius: 10px;
    box-shadow: 0 0 8px ${opacityBlack30};
    margin: ${spacer32} auto 0;

    > li:last-child {
      border: none;
    }
  }

  @media (min-width: ${screenLgMin}) {
    max-width: 66%;
  }
`;
export const BundleContainer = styled.li `
  color: ${black};
  background-color: ${white};
  border-radius: 10px;
  box-shadow: 0 0 8px ${opacityBlack30};
  list-style: none;
  margin: 0 0 ${spacer16} 0;
  padding: ${spacer20};

  @media (min-width: ${screenSmMin}) {
    border-bottom: 1px solid ${gray80};
    border-radius: 0;
    align-items: center;
    box-shadow: none;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 14px 0 ${spacer16};
    margin: 0 ${spacer16} 0;
  }
`;
export const BundleTitle = styled(Type.h2) `
  font-size: 24px;
  font-weight: bold;
  letter-spacing: -1.28px;
  line-height: 1;
  text-align: center;
  margin: 0;

  @media (min-width: ${screenSmMin}) {
    font-size: 30px;
  }

  @media (min-width: ${screenLgMin}) {
    font-size: 32px;
  }
`;
export const BundleButton = styled(PrimaryButton) `
  margin-top: ${spacer16};

  @media (min-width: ${screenSmMin}) {
    align-self: flex-end;
    margin-top: 0;
  }
`;
export const ErrorBanner = styled(Banner) `
  margin-top: ${spacer32};
  border-radius: 8px;
  padding: ${spacer8} ${spacer12};
  color: var(--warning-text-base, #000);
  background-color: var(--warning-background-base, #ffa42b);

  span[class*='Message-'] {
    display: flex;
  }

  @media (min-width: ${screenMdMin}) {
    padding: ${spacer8} ${spacer12} ${spacer4};
  }
`;
export const ErrorMessage = styled.div `
  flex: 1;
`;
export const ExitError = styled.div `
  cursor: pointer;
`;
export const AdditionalCard = styled.div `
  background: ${white};
  max-width: 400px;
  border-radius: 6px;
  padding: ${spacer16};
  text-align: center;
  margin: 0 auto;
  ${({ hasDropShadow }) => hasDropShadow ? 'box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);' : ''}

  @media (min-width: ${screenLgMin}) {
    align-items: center;
    justify-content: center;
    display: flex;
    max-width: 100%;
    padding: ${spacer32};
    margin-right: ${spacer16};

    > p {
      padding-bottom: 0;
      margin-right: ${spacer16};
    }
  }
`;
export const AdditionalCardButton = styled(Button) `
  border: 2px solid ${black};
`;
export const AdditionalCardText = styled(Type.p) `
  color: ${black};
  @media (min-width: ${screenLgMin}) {
    font-size: 18px;
  }
`;
//# sourceMappingURL=components.js.map