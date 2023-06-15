import React, { memo } from 'react';
import { ListItem, QuestionTitle, QuestionTitleText, QuestionContent, QuestionContainer, ExpandIcon, } from './components';
import { purify } from '../../utils/helpers';
function Question(props) {
    const { header, content, dataEventAction, dataEventCategory, dataEventLabel, } = props;
    return (React.createElement(ListItem, null,
        React.createElement(QuestionContainer, null,
            React.createElement(QuestionTitle, { "data-event-category": dataEventCategory, "data-event-action": dataEventAction, "data-event-label": dataEventLabel },
                React.createElement(QuestionTitleText, null, header),
                React.createElement(ExpandIcon, { "aria-hidden": "true" })),
            React.createElement(QuestionContent, { dangerouslySetInnerHTML: { __html: purify(content) } }))));
}
export default memo(Question);
//# sourceMappingURL=question.js.map