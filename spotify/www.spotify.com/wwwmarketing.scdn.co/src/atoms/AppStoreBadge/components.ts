import styled from 'styled-components';
import { spacer16 } from '@spotify-internal/encore-web';
import { Platform } from './app-store-badge';
export const AppStoreBadge = styled.a `
  height: 40px;
  display: inline-block;
  border-radius: 5px;
  ${props => props.platform === Platform.GOOGLE ? `padding: 0px ${spacer16};` : ''};

  img {
    height: 100%;
    ${props => props.platform === Platform.GOOGLE ? 'transform: scale(1.5);' : ''}
  }
`;
//# sourceMappingURL=components.js.map