import React, { memo } from 'react';
import { Wrapper, BenefitImage, BenefitContent, BenefitHeader, Text, } from './components';
import { deprecateImageField, purify } from '../../utils/helpers';
function Benefit({ header, image, imageSources: imageSourcesProp, content, size = 'medium', }) {
    let imageSources;
    if (image) {
        imageSources = deprecateImageField({
            oldProp: 'image',
            newProp: 'imageSources',
            smallValue: image,
        });
    }
    if (imageSourcesProp) {
        imageSources = imageSourcesProp;
    }
    return (React.createElement(Wrapper, { size: size },
        imageSources && React.createElement(BenefitImage, { sources: imageSources, size: size }),
        React.createElement(BenefitContent, null,
            header && (React.createElement(BenefitHeader, { dangerouslySetInnerHTML: { __html: purify(header) } })),
            content && (React.createElement(Text, { dangerouslySetInnerHTML: { __html: purify(content) } })))));
}
export default memo(Benefit);
//# sourceMappingURL=benefit.js.map