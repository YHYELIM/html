import React, { memo, useContext } from 'react';
import { Footer as MastheadFooter } from '@spotify-internal/masthead-react';
import DeviceContext from '../../configuration/context/device';
export function Footer(props) {
    const { platform } = useContext(DeviceContext);
    return platform === 'ios' || platform === 'android' ? (React.createElement(React.Fragment, null)) : (React.createElement(MastheadFooter, Object.assign({}, props)));
}
export default memo(Footer);
//# sourceMappingURL=footer.js.map