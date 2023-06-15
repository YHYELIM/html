import styled from 'styled-components';
import LegalTerms from '../../atoms/LegalTerms';
import { Type, spacer4, spacer16, spacer20, opacityBlack10, black, rose180, TextLink, desktopViola, white, spacer32, screenSmMin, spacer12, } from '@spotify-internal/encore-web';
import container from '../../atoms/Container/container';
export const StyledContainer = styled(container) `
  background: ${white};

  > section:first-child,
  article:first-child {
    padding-top: ${spacer32} !important;
    --container-padding-start: 0;
    --container-padding-end: ${spacer12};

    @media (min-width: ${screenSmMin}) {
      padding-bottom: ${spacer12};
    }
  }
`;
export const CardContainer = styled.div `
  margin: 0 auto;
  max-width: 580px;
`;
export const AboveCard = styled.div `
  margin: 0 0 ${spacer20};
  display: flex;
  justify-content: space-between;

  color: ${({ color }) => (color ? color : `${black}`)};

  [href]:hover {
    color: ${({ color }) => (color ? color : `${black}`)};
  }
`;
export const Card = styled.article `
  color: ${({ color }) => (color ? color : `${black}`)};
  border-radius: ${spacer16};
  box-shadow: 0 2px 10px 0 ${opacityBlack10};
`;
export const CardHeader = styled.div `
  padding: ${spacer16};
  background: ${({ background }) => (background ? background : `${rose180}`)};
  border-top-left-radius: ${spacer16};
  border-top-right-radius: ${spacer16};
`;
export const Text = styled(Type.p) `
  margin: 0;
  padding: 0;
`;
export const Link = styled(TextLink) `
  font-size: ${desktopViola.fontSize};
  margin-top: auto;
`;
export const Header = styled(Type.h2) `
  margin: 0 0 ${spacer4};
  padding: 0;
`;
export const LegalText = styled(LegalTerms) `
  padding: ${spacer16};

  a {
    color: inherit;
    text-decoration: underline;
    font-weight: bold;
  }
`;
//# sourceMappingURL=components.js.map