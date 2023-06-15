import React, { memo } from 'react';
import StructuredData from './structuredData';
import Question from './question';
import Header from '../../atoms/Header';
import Container from '../../atoms/Container';
import { List } from './components';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
export function Faq(props) {
    const { data, container, header, eventParams } = props;
    return (React.createElement(Container, Object.assign({}, container, eventParamAttributes(eventParams)),
        React.createElement(StructuredData, { data: data }),
        header && React.createElement(Header, Object.assign({}, header)),
        React.createElement(List, null, data &&
            data.map((question, i) => (React.createElement(Question, Object.assign({ key: `question-${i}` }, question)))))));
}
export default memo(Faq);
//# sourceMappingURL=faq.js.map