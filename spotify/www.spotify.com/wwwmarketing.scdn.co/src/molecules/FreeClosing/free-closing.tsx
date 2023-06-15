import React, { memo } from 'react';
import { white, black } from '@spotify-internal/encore-web';
import { Wrapper, Content, SecondaryHeader, ButtonContainer, StyledButton, } from './components';
import { purify } from '../../utils/helpers';
export function FreeClosing(props) {
    const { secondaryHeader, button } = props;
    const buttonProps = Object.assign(Object.assign({}, button), { color: black, backgroundColor: white });
    return (React.createElement(Wrapper, null,
        React.createElement(Content, null,
            secondaryHeader && (React.createElement(SecondaryHeader, Object.assign({}, secondaryHeader, { dangerouslySetInnerHTML: {
                    __html: purify(secondaryHeader.text),
                } }))),
            React.createElement(ButtonContainer, null, button && React.createElement(StyledButton, Object.assign({ isPreloader: true }, buttonProps))))));
}
export default memo(FreeClosing);
//# sourceMappingURL=free-closing.js.map