import styled from 'styled-components';
import { screenSmMin } from '@spotify-internal/encore-web';
const BoxShadow = styled.div `
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);

  @media (min-width: ${screenSmMin}) {
    padding: 30px 20px;
  }
`;
export default BoxShadow;
//# sourceMappingURL=box-shadow.js.map