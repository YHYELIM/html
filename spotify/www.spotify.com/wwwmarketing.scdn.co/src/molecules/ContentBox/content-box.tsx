import React, { memo } from 'react';
import { StyledContainer, TextContainer, ImageContainer, Content, Header, Body, Image, } from './components';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import { purify } from '../../utils/helpers';
export function ContentBox({ container, image, content, eventParams, }) {
    return (React.createElement(StyledContainer, Object.assign({}, container, eventParamAttributes(eventParams)), image && image.position && (React.createElement(Content, { desktopPosition: image.position.desktop, mobilePosition: image.position.mobile },
        content && (React.createElement(TextContainer, { contentAlign: content.contentAlign || '' },
            content.header && (React.createElement(Header, { margin: content.margin || '', dangerouslySetInnerHTML: { __html: purify(content.header) }, weight: "bold" })),
            content.body && (React.createElement(Body, { dangerouslySetInnerHTML: { __html: purify(content.body) } })))),
        React.createElement(ImageContainer, { desktopPosition: image.position.desktop },
            React.createElement(Image, { role: "img", "aria-label": image.alt, desktop: image.src.desktop, tablet: image.src.tablet, mobile: image.src.mobile, mobilePosition: image.position.mobile }))))));
}
export default memo(ContentBox);
//# sourceMappingURL=content-box.js.map