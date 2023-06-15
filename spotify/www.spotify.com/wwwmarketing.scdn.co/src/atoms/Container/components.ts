import styled from 'styled-components';
import Image from '../Image';
export const BackgroundImage = styled(Image) `
  display: block;
  background-size: cover;
  overflow: auto;

  ${({ background }) => (background ? `--background-base: ${background};` : '')}
  /* stylelint-disable-next-line declaration-block-no-shorthand-property-overrides */
  background: var(--background-base, inherit);
`;
export const Background = styled.section `
  overflow: auto;

  ${({ background }) => (background ? `--background-base: ${background};` : '')}
  /* stylelint-disable-next-line declaration-block-no-shorthand-property-overrides */
  background: var(--background-base, inherit);
`;
export const Content = styled.article `
  margin: 0 auto;
  max-width: 100%;
  box-sizing: border-box;

  ${({ textAlign }) => textAlign && `text-align: ${textAlign}`};

  ${({ color }) => color && `--text-base: ${color};`};
  ${({ accentColor }) => accentColor && `--text-bright-accent: ${accentColor};`};

  color: var(--text-base, inherit);
  strong {
    color: var(--text-bright-accent, inherit);
  }

  ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.start) && `padding-top: 35px;`};
  ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.before) && `padding-left: 15px;`};
  ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.end) && `padding-bottom: 35px;`};
  ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.after) && `padding-right: 15px;`};
  @supports (padding: max(0px)) {
    ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.start) &&
    `
        --container-padding-start: max(35px, env(safe-area-inset-top));
        padding-top: var(--container-padding-start);
      `};
    ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.before) &&
    `
        --container-padding-before: max(15px, env(safe-area-inset-left));
        padding-left: var(--container-padding-before);
      `};
    ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.end) &&
    `
        --container-padding-end: max(35px, env(safe-area-inset-bottom));
        padding-bottom: var(--container-padding-end);
      `};
    ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.after) &&
    `
        --container-padding-after: max(15px, env(safe-area-inset-right));
        padding-right: var(--container-padding-after);
      `};
  }

  @media (min-width: 768px) {
    ${({ disableMaxWidth }) => !disableMaxWidth && `width: 750px;`};

    ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.start) && `padding-top: 75px;`};
    ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.before) && `padding-left: 15px;`};
    ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.end) && `padding-bottom: 75px;`};
    ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.after) && `padding-right: 15px;`};

    @supports (padding: max(0px)) {
      ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.start) &&
    `padding-top: max(75px, env(safe-area-inset-top));`};
      ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.before) &&
    `padding-left: max(15px, env(safe-area-inset-left));`};
      ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.end) &&
    `padding-bottom: max(75px, env(safe-area-inset-bottom));`};
      ${({ disablePaddings }) => !(disablePaddings === null || disablePaddings === void 0 ? void 0 : disablePaddings.after) &&
    `padding-right: max(15px, env(safe-area-inset-right));`};
    }
  }

  @media (min-width: 992px) {
    ${({ disableMaxWidth }) => !disableMaxWidth && `width: 970px;`};
  }

  @media (min-width: 1200px) {
    ${({ disableMaxWidth }) => !disableMaxWidth && `width: 1170px;`};
  }
`;
//# sourceMappingURL=components.js.map