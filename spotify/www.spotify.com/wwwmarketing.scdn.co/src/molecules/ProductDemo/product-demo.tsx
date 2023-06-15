import React from 'react';
import { Wrapper, ProductDemoContainer, Content, Header, Text, ImageContainer, ImageWrapper, } from './components';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
import { deprecateImageField, purify } from '../../utils/helpers';
export function ProductDemo({ container, header, content, image, eventParams, imageSources: imageSourcesProp, }) {
    if (!header) {
        return null;
    }
    let imageSources = image
        ? deprecateImageField({
            oldProp: 'image',
            newProp: 'imageSources',
            smallValue: image,
        })
        : undefined;
    if (imageSourcesProp) {
        imageSources = imageSourcesProp;
    }
    return (React.createElement(Wrapper, Object.assign({}, container, eventParamAttributes(eventParams)),
        React.createElement(ProductDemoContainer, null,
            React.createElement(Content, null,
                header && (React.createElement(Header, { dangerouslySetInnerHTML: { __html: purify(header) } })),
                content && (React.createElement(Text, { dangerouslySetInnerHTML: { __html: purify(content) } }))),
            imageSources && (React.createElement(ImageWrapper, null,
                React.createElement(ImageContainer, { sources: imageSources }))))));
}
export default ProductDemo;
//# sourceMappingURL=product-demo.js.map