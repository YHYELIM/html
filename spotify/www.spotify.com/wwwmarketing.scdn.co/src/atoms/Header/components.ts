import styled from 'styled-components';
import { screenSmMin, screenLgMin } from '@spotify-internal/encore-web';
import { Type } from '@spotify-internal/encore-web';
export const Wrapper = styled.header `
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`};

  line-height: 1.5;

  @media (min-width: ${screenSmMin}) {
    width: var(--container-small-width, auto);
  }

  ${({ disableEndMargin }) => !disableEndMargin &&
    `
    margin-bottom: 30px;

    @media (min-width: ${screenSmMin}) {
      margin-bottom: 72px;
    }
  `};
`;
export const Title = styled(Type.h2) `
  margin-block-start: 0;
  margin-block-end: 0;
  font-size: var(--headline-font-size, 28px);
  line-height: var(--headline-line-height, 32px);
  letter-spacing: -0.015em;
  font-weight: 900;
  padding: 0;
  ${({ color }) => color && `color: ${color};`};

  @media (min-width: ${screenSmMin}) {
    font-size: var(--headline-font-size, 40px);
    line-height: var(--headline-line-height, 46px);
  }
`;
export const Supheader = styled(Type.p) `
  margin-bottom: 20px;
`;
export const Subheader = styled(Type.h3) `
  font-weight: normal;
  font-size: var(--subheadline-font-size, 18px);
  line-height: var(--subheadline-line-height, 24px);
  margin-top: 10px;
  padding: 0;
  ${({ color }) => color && `color: ${color};`};

  @media (min-width: ${screenSmMin}) {
    font-size: var(--subheadline-font-size, 24px);
    line-height: var(--subheadline-line-height, 30px);
    width: var(--subheadline-small-width, inherit);
    margin-top: 15px;
  }

  @media (min-width: ${screenLgMin}) {
    width: var(--subheadline-large-width, inherit);
  }
`;
//# sourceMappingURL=components.js.map