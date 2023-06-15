import React from 'react';
import { Container } from './components';
import CollapsablePlansList from './collapsable-plans-list';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
const CollapsablePlans = ({ data, container, eventParams, }) => {
    return (React.createElement(Container, Object.assign({}, container, eventParamAttributes(eventParams)), data &&
        data.map((plan, i) => (React.createElement(CollapsablePlansList, { key: `collapsable-plans-${i}`, plan: plan })))));
};
export default CollapsablePlans;
//# sourceMappingURL=collapsable-plans.js.map