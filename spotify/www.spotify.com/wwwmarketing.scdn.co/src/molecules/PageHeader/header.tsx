import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { Header as MastheadHeader } from '@spotify-internal/masthead-react';
import DeviceContext from '../../configuration/context/device';
const StyledHeader = styled.div `
  .mh-brand-wrapper a {
    pointer-events: none !important;
  }
  .mh-container nav.mh-desktop,
  .mh-container .mh-mobile-menu {
    display: none !important;
  }
`;
export function Header(props) {
    const { platform } = useContext(DeviceContext);
    const coreHeader = (React.createElement(MastheadHeader, Object.assign({ transparent: false, fixed: false }, props)));
    return platform === 'ios' || platform === 'android' ? (React.createElement(StyledHeader, null, coreHeader)) : (coreHeader);
}
export default memo(Header);
//# sourceMappingURL=header.js.map