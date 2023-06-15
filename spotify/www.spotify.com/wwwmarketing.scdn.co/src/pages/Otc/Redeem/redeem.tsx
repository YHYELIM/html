import { createBasicColorSet } from '@spotify-internal/encore-web';
import React, { useState } from 'react';
import { Wrapper, Main, Header, Headline } from '../components';
import { ButtonWrapper, Input, Error, Button } from './components';
function Redeem(props) {
    const { headline, logo, subheadline, ctaText, ctaUrl, placeholder, error = '', } = props;
    const [code, setCode] = useState('');
    function handleRedeem() {
        if (code.length > 0) {
            window.location.href = `${ctaUrl}?code=${code}`;
        }
    }
    function handleSubmit(e) {
        e.preventDefault();
        handleRedeem();
    }
    return (React.createElement(Wrapper, null,
        logo && React.createElement(Header, { logo: logo }),
        React.createElement(Main, null,
            headline && React.createElement(Headline, null, headline),
            subheadline && React.createElement("p", null, subheadline),
            React.createElement("form", { onSubmit: handleSubmit },
                React.createElement(Input, { type: "text", placeholder: placeholder, onChange: (e) => setCode(e.currentTarget.value) }),
                error && code === '' && React.createElement(Error, { colorSet: "negative" }, error),
                ctaUrl && ctaText && (React.createElement(ButtonWrapper, null,
                    React.createElement(Button, { type: "submit", UNSAFE_colorSet: createBasicColorSet('#000'), buttonLegacy: true, disabled: code.length === 0 }, ctaText)))))));
}
export default Redeem;
//# sourceMappingURL=redeem.js.map