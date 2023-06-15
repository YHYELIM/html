import React, { memo } from 'react';
import { Wrapper, Title, Subheader, Supheader } from './components';
import { purify } from '../../utils/helpers';
function Header({ text, supheader, subheader, textAlign = 'center', disableEndMargin = false, className, headerColor, subheaderColor, }) {
    return (React.createElement(Wrapper, { className: className, textAlign: textAlign, disableEndMargin: disableEndMargin },
        supheader && (React.createElement(Supheader, { dangerouslySetInnerHTML: {
                __html: purify(supheader),
            } })),
        React.createElement(Title, { color: headerColor, dangerouslySetInnerHTML: { __html: purify(text) } }),
        subheader && (React.createElement(Subheader, { color: subheaderColor, dangerouslySetInnerHTML: {
                __html: purify(subheader),
            } }))));
}
export default memo(Header);
//# sourceMappingURL=header.js.map