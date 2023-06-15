import React, { memo } from 'react';
import { Container, Subheader, Title, Elements, Element } from './components';
import Checkmark from '../../atoms/Checkmark';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
function Checklist({ header, checkmarkColor, data = [], textAlign, textDirection, eventParams, }) {
    return (React.createElement(Container, Object.assign({ textDirection: textDirection, textAlign: textAlign }, eventParamAttributes(eventParams)),
        header && (React.createElement("header", null,
            header.supheader && React.createElement(Subheader, null, header.supheader),
            React.createElement(Title, { as: "h1" }, header.text),
            header.subheader && React.createElement(Subheader, null, header.subheader))),
        React.createElement(Elements, null, data &&
            data.map((item, i) => (React.createElement(Element, { key: `item-${i}` },
                React.createElement(Checkmark, { checkmarkColor: checkmarkColor, textDirection: textDirection, size: 16, strokeWidth: "1.5", "aria-hidden": "true" }),
                item))))));
}
export default memo(Checklist);
//# sourceMappingURL=checklist.js.map