import styled from 'styled-components';
import { screenXsMin, FormInput, Banner, ButtonPrimary, } from '@spotify-internal/encore-web';
export const ButtonWrapper = styled.div `
  margin: 50px 0 0 0;

  > * {
    width: 100%;

    @media (min-width: ${screenXsMin}) {
      width: auto;
    }
  }
`;
export const Button = styled(ButtonPrimary) `
  justify-content: center;
`;
export const Input = styled(FormInput) `
  box-sizing: border-box;
`;
export const Error = styled(Banner) `
  margin-top: 20px;
`;
//# sourceMappingURL=components.js.map