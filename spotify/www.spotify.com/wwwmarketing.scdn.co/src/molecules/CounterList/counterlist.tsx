import React from 'react';
import { memo } from 'react';
import CounterLists from './counterlists';
function CounterList({ counters = [], label, container, counterColor, textDirection, eventParams, }) {
    return (React.createElement(CounterLists, Object.assign({}, container, textDirection, eventParams, { label: label, counterColor: counterColor, counters: counters })));
}
export default memo(CounterList);
//# sourceMappingURL=counterlist.js.map