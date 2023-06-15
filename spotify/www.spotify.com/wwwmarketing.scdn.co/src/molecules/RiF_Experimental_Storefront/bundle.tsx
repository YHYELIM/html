import React from 'react';
import { Header, BundleContainer, BundleButton } from './components';
import { purify } from '../../utils/helpers';
import { eventParamAttributes, inViewEventAttributes, } from '@spotify-internal/touchdown-analytics';
const Bundle = ({ index, header, button, eventParams }) => {
    return (React.createElement(BundleContainer, Object.assign({}, eventParamAttributes(Object.assign(Object.assign({}, eventParams), { componentName: 'STOREFRONT-BUNDLE', componentPosition: index, componentType: 'promo' })), inViewEventAttributes()),
        header && (React.createElement(Header, { dangerouslySetInnerHTML: { __html: purify(header) } })),
        button && React.createElement(BundleButton, Object.assign({}, button))));
};
export default Bundle;
//# sourceMappingURL=bundle.js.map