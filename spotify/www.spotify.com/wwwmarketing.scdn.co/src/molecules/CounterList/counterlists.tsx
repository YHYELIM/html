import React, { memo } from 'react';
import Counter from '../../atoms/Counter';
import { CounterListWrapper, StyledContainer } from './components';
function CounterLists({ counters = [], label, container, counterColor, textDirection, eventParams, }) {
    return (React.createElement(StyledContainer, Object.assign({ textDirection: textDirection }, container, eventParams),
        React.createElement(CounterListWrapper, { "aria-label": label, tabIndex: 0 }, counters.map((counter, i) => (React.createElement(Counter, { key: i, counterColor: counterColor, textDirection: textDirection, text: counter.text, label: counter.label }))))));
}
export default memo(CounterLists);
//# sourceMappingURL=counterlists.js.map