import React, { memo } from 'react';
import Container from '../../atoms/Container';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import { Text } from './components';
import { TextLink } from '@spotify-internal/encore-web';
import { purify } from '../../utils/helpers';
export function Shelf({ container, header, cta, eventParams }) {
    return (React.createElement(Container, Object.assign({}, container, eventParamAttributes(eventParams)),
        header && header.text && (React.createElement(Text, { dangerouslySetInnerHTML: {
                __html: purify(header.text),
            } })),
        cta && React.createElement(TextLink, Object.assign({}, cta))));
}
export default memo(Shelf);
//# sourceMappingURL=shelf.js.map