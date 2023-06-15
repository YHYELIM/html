import { screenSmMin, white } from '@spotify-internal/encore-web';
import Button from '../../atoms/Button';
import styled, { css } from 'styled-components';
const highlightShadow = css `
  &::before {
    content: ' ';
    z-index: 1;
    width: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    left: -20px;
    background: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.01),
      rgba(0, 0, 0, 0)
    );
  }

  &::after {
    content: ' ';
    z-index: 1;
    width: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    right: -20px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.01),
      rgba(0, 0, 0, 0)
    );
  }
`;
export const GridItem = styled.div `
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 56px;
  box-sizing: border-box;
  background-color: ${white};

  ${({ highlight }) => highlight &&
    highlight.active &&
    highlight.color &&
    `
      background-color: ${highlight.color};

      ${highlightShadow}
    `};
`;
export const StyledButton = styled(Button) `
  font-size: 1em;
  min-width: 130px;
  white-space: nowrap;

  @media (min-width: ${screenSmMin}) {
    font-size: 0.8em;
    min-width: 150px;
  }
`;
export const Wrapper = styled.div `
  --total-plans: ${({ totalPlans }) => totalPlans};
  --benefit-column-size: 1fr;
  --plan-column-size: 1fr;
  font-size: 12px;

  @media (min-width: ${screenSmMin}) {
    font-size: 16px;
  }

  max-width: 100%;
  overflow-y: scroll;

  display: grid;
  grid-template-rows: max-content;
  justify-items: center;
  align-items: center;
  text-align: center;

  grid-template-columns: var(--benefit-column-size) repeat(
      var(--total-plans),
      var(--plan-column-size)
    );

  ${GridItem}:nth-last-child(-n + ${({ totalPlans }) => totalPlans + 1}) {
    border-bottom: 0;
  }
`;
export const Benefit = styled(GridItem) `
  position: sticky;
  left: 0;

  display: flex;
  align-items: center;

  background-color: #fff;
  justify-self: start;
  z-index: 2;

  min-width: 150px;

  padding: 10px 5px;

  &:not(:first-child) {
    border-bottom: 1px solid rgba(179, 179, 179, 0.4);
  }

  &::after {
    content: ' ';
    width: 20px;
    height: 100%;
    position: absolute;
    top: 0;
    right: -20px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.05),
      rgba(0, 0, 0, 0.01),
      rgba(0, 0, 0, 0)
    );
  }

  @media (min-width: ${screenSmMin}) {
    &::after {
      content: none;
    }
  }
`;
export const BenefitStatus = styled(GridItem) `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border-bottom: 1px solid rgba(179, 179, 179, 0.4);
`;
export const BenefitStatusText = styled.span `
  &::first-letter {
    text-transform: capitalize;
  }
`;
export const BenefitContent = styled.div `
  background: #fff;
  font-weight: 700;
  text-align: initial;

  @media (min-width: ${screenSmMin}) {
    font-weight: initial;
  }

  &::first-letter {
    text-transform: capitalize;
  }
`;
export const Plan = styled(GridItem) `
  display: inherit;
  align-items: end;
  height: 100%;
  padding: 0 0 30px 0;
  box-sizing: border-box;

  ${({ highlight }) => highlight &&
    highlight.active &&
    highlight.color &&
    `
    background-color: ${highlight.color};

    ${highlightShadow}
  `};
`;
export const PlanInfo = styled.div `
  padding: 0 10px;
`;
export const PlanName = styled.div `
  font-weight: 900;
  font-size: 1.7em;
  text-transform: capitalize;
`;
export const PlanPrice = styled.div `
  margin-bottom: 18px;
  font-size: 1.5em;
`;
export const Differentiator = styled.div `
  color: white;
  background-color: black;
  text-transform: uppercase;
  padding: 5px;
  margin-bottom: 10px;
`;
//# sourceMappingURL=components.js.map