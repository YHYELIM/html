import React, { memo } from 'react';
import { Wrapper, ListenTogetherContainer, Content, Header, SecondaryHeader, ImageContainer, } from './components';
import { deprecateImageField, purify } from '../../utils/helpers';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
export function ListenTogether({ container, header, subheader, imageSources: imageSourcesProp, image, eventParams, }) {
    var _a, _b;
    let imageSources;
    if (image === null || image === void 0 ? void 0 : image.mobile) {
        imageSources = deprecateImageField({
            oldProp: 'image',
            newProp: 'imageSources',
            smallValue: image.mobile,
            mediumValue: (_a = image.tablet) !== null && _a !== void 0 ? _a : undefined,
            largeValue: (_b = image.desktop) !== null && _b !== void 0 ? _b : undefined,
        });
    }
    if (imageSourcesProp) {
        imageSources = imageSourcesProp;
    }
    return (React.createElement(Wrapper, Object.assign({}, container, eventParamAttributes(eventParams)),
        React.createElement(ListenTogetherContainer, null,
            React.createElement(Content, null,
                header && (React.createElement(Header, { dangerouslySetInnerHTML: {
                        __html: purify(header.text),
                    } })),
                subheader && (React.createElement(SecondaryHeader, { dangerouslySetInnerHTML: {
                        __html: purify(subheader.text),
                    } }))),
            imageSources && React.createElement(ImageContainer, { sources: imageSources }))));
}
export default memo(ListenTogether);
//# sourceMappingURL=listen-together.js.map