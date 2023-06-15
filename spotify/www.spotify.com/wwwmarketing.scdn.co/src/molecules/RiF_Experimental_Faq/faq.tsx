import React, { memo } from 'react';
import StructuredData from './structuredData';
import Question from './question';
import { List, FaqText, CustomFaqHeader, FaqImageContainer, } from './components';
import { eventParamAttributes, inViewEventAttributes, } from '@spotify-internal/touchdown-analytics';
import { purify } from '../../utils/helpers';
export function RiF_Experimental_Faq(props) {
    const { data, container, header, text, eventParams } = props;
    return (React.createElement(FaqImageContainer, Object.assign({}, container, eventParamAttributes(eventParams), inViewEventAttributes()),
        React.createElement(StructuredData, { data: data }),
        header && React.createElement(CustomFaqHeader, Object.assign({}, header)),
        React.createElement(List, null, data &&
            data.map((question, i) => (React.createElement(Question, Object.assign({ key: `question-${i}` }, question))))),
        React.createElement(FaqText, { dangerouslySetInnerHTML: {
                __html: purify(text),
            } })));
}
export default memo(RiF_Experimental_Faq);
//# sourceMappingURL=faq.js.map