import React, { memo } from 'react';
import Container from '../../atoms/Container';
import PartnerDescription from './partner-description';
import { Wrapper } from './components';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
export function PartnerDescriptions({ data, container, eventParams, }) {
    if (!data) {
        return null;
    }
    return (React.createElement(Container, Object.assign({}, container, eventParamAttributes(eventParams)),
        React.createElement(Wrapper, null, data.map((partnerProps, i) => (React.createElement(PartnerDescription, Object.assign({ key: `partner-description-${i}` }, partnerProps)))))));
}
export default memo(PartnerDescriptions);
//# sourceMappingURL=partner-descriptions.js.map