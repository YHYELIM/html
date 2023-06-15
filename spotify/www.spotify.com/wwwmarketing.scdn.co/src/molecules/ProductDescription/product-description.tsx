import React from 'react';
import { Header, HeaderTitle, HeaderSubheader, Content, Logo, Title, Description, Figure, } from './components';
import Container from '../../atoms/Container';
import { deprecateImageField, purify } from '../../utils/helpers';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
export function ProductDescription({ container, header: { text, subheader } = {}, logo, title, description, image, imageSources: imageSourcesProp, eventParams, }) {
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
    return (React.createElement(Container, Object.assign({}, container, eventParamAttributes(eventParams)),
        React.createElement(Header, null,
            React.createElement(HeaderTitle, { dangerouslySetInnerHTML: { __html: purify(text || '') } }),
            subheader && (React.createElement(HeaderSubheader, { dangerouslySetInnerHTML: { __html: purify(subheader || '') } }))),
        React.createElement(Content, null,
            logo && React.createElement(Logo, { src: logo, alt: title }),
            title && React.createElement(Title, { dangerouslySetInnerHTML: { __html: purify(title) } }),
            description && (React.createElement(Description, { dangerouslySetInnerHTML: { __html: purify(description) } })),
            imageSources && React.createElement(Figure, { sources: imageSources }))));
}
export default ProductDescription;
//# sourceMappingURL=product-description.js.map