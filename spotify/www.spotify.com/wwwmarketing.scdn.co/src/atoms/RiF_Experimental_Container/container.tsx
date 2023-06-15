import { screenLgMin, screenSmMin, spacer32, spacer72, } from '@spotify-internal/encore-web';
import { memo } from 'react';
import styled from 'styled-components';
import Container from '../Container';
const RifContainer = styled(Container) `
  @media (min-width: ${screenSmMin}) {
    padding-left: ${spacer32};
    padding-right: ${spacer32};
  }

  @media (min-width: ${screenLgMin}) {
    padding-left: ${spacer72};
    padding-right: ${spacer72};
  }

  > * {
    width: 100%;

    @media (min-width: ${screenSmMin}) {
      padding-left: 0;
      padding-right: 0;
    }

    @media (min-width: ${screenLgMin}) {
      max-width: 1300px;
    }
  }
`;
export default memo(RifContainer);
//# sourceMappingURL=container.js.map