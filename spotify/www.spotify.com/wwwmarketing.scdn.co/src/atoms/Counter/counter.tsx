import React, { memo } from 'react';
import styled from 'styled-components';
import { black, white } from '@spotify-internal/encore-web';
import { purify, responsiveSize } from '../../utils/helpers';
const Wrapper = styled.li `
  font-size: ${responsiveSize(18, 24, 320, 1440)};
  display: flex;
  flex-direction: row;
  text-align: left;

  li:active,
  li:focus {
    border: 5px solid black;
  }
`;
const CounterText = styled.div `
  > a {
    color: #14833b;
  }
`;
const CounterCircleWrapper = styled.div `
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 50%;
  ${({ textDirection }) => textDirection !== 'rtl' ? 'margin-right: 20px' : '  margin-left: 20px'};
  font-size: ${responsiveSize(18, 32, 320, 1440)};
  height: ${responsiveSize(44, 60, 320, 1440)};
  color: ${({ counterTextColor }) => counterTextColor ? counterTextColor : white};
  background-color: ${({ counterBackgroundColor }) => counterBackgroundColor ? counterBackgroundColor : black};
  text-align: center;
`;
function Counter(props) {
    const { counterColor, text, textDirection, label } = props;
    return textDirection !== 'rtl' ? (React.createElement(Wrapper, { "aria-label": label, tabIndex: 0, role: "listitem" },
        React.createElement(CounterCircleWrapper, { className: "counter-number", counterBackgroundColor: counterColor, textDirection: textDirection }),
        React.createElement(CounterText, { dangerouslySetInnerHTML: { __html: purify(text) } }))) : (React.createElement(Wrapper, { "aria-label": label, tabIndex: 0, role: "listitem" },
        React.createElement(CounterText, { dangerouslySetInnerHTML: { __html: purify(text) } }),
        React.createElement(CounterCircleWrapper, { className: "counter-number", counterBackgroundColor: counterColor, textDirection: textDirection })));
}
export default memo(Counter);
//# sourceMappingURL=counter.js.map