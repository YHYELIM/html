import React, { useContext } from 'react';
import { purify } from '../../utils/helpers';
import { Type } from '@spotify-internal/encore-web';
import DeviceContext from '../../configuration/context/device';
function LegalTerms(props) {
    const { className } = props;
    let { text } = props;
    const device = useContext(DeviceContext);
    const targetRegex = /href="([^"]*)"/gim;
    if (device.platform === 'ios' || device.platform === 'android') {
        text = text.replace(targetRegex, (_target, match) => {
            return match.includes('/legal/')
                ? `href="${match}${match.endsWith('/') ? '' : '/'}plain/"`
                : `href="${match}"`;
        });
    }
    return (React.createElement(Type.p, { className: className, variant: "finale", dangerouslySetInnerHTML: {
            __html: purify(text),
        } }));
}
export default LegalTerms;
//# sourceMappingURL=legalTerms.js.map