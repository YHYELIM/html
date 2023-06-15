import React, { memo } from 'react';
import Container from '../../atoms/Container';
import Checklist from './checklist';
import { List } from './components';
import { purify } from '../../utils/helpers';
export function Checklists({ container, data, footer }) {
    if (data.length === 0) {
        return null;
    }
    return (React.createElement(Container, Object.assign({}, container),
        data.length === 1 ? (React.createElement(Checklist, Object.assign({}, data[0]))) : (React.createElement(List, { textDirection: data[0].textDirection }, data.map((checklist, i) => (React.createElement("li", { key: `checklist-${i}` },
            React.createElement(Checklist, Object.assign({}, checklist))))))),
        footer && (React.createElement("footer", { dangerouslySetInnerHTML: { __html: purify(footer) } }))));
}
export default memo(Checklists);
//# sourceMappingURL=checklists.js.map