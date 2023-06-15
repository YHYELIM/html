import React, { memo } from 'react';
import Container from '../../atoms/Container';
import Header from '../../atoms/Header';
import { PlanContent } from './components';
import Plan from './plan';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
export function Plans({ header, data, container, eventParams, }) {
    return (React.createElement(Container, Object.assign({ title: "plans" }, container, eventParamAttributes(eventParams)),
        header && React.createElement(Header, Object.assign({}, header)),
        React.createElement(PlanContent, null, data && data.map((plan, i) => React.createElement(Plan, Object.assign({ key: i }, plan))))));
}
export default memo(Plans);
//# sourceMappingURL=plans.js.map