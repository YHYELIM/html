import React, { memo } from 'react';
import { CondensedContainer, Content, VideoWrapper, TextContainer, Header, Element, Elements, } from './components';
import Checkmark from '../../atoms/Checkmark';
import Video from '../../atoms/Video';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import { purify } from '../../utils/helpers';
export function VideoList({ container, header, checkmarkColor, data = [], src, title, eventParams, }) {
    return (React.createElement(CondensedContainer, Object.assign({}, container, eventParamAttributes(eventParams)),
        React.createElement(Content, null,
            React.createElement(VideoWrapper, null,
                React.createElement(Video, { src: src, title: title })),
            React.createElement(TextContainer, { checkmarkColor: checkmarkColor },
                header && (React.createElement(Header, { dangerouslySetInnerHTML: { __html: purify(header) } })),
                React.createElement(Elements, { checkmarkColor: checkmarkColor }, data &&
                    data.map((item, i) => (React.createElement(Element, { checkmarkColor: checkmarkColor, key: `item-${i}` },
                        checkmarkColor && (React.createElement(Checkmark, { checkmarkColor: checkmarkColor })),
                        item))))))));
}
export default memo(VideoList);
//# sourceMappingURL=video-list.js.map