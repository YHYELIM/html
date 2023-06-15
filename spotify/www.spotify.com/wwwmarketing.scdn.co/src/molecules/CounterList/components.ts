import styled from 'styled-components';
import Container from '../../atoms/Container';
import { responsiveSize } from '../../utils/helpers';
export const StyledContainer = styled(Container) `
  background-color: white;
  > article {
    padding: 0 ${responsiveSize(24, 48, 320, 1440)};
  }
`;
export const CounterListWrapper = styled.ul `
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: list-number;
  li div.counter-number:before {
    counter-increment: list-number;
    content: counter(list-number);
    width: ${responsiveSize(44, 60, 320, 1440)};
  }
  & > * + * {
    margin-top: ${responsiveSize(24, 32, 320, 1440)};
  }
`;
//# sourceMappingURL=components.js.map