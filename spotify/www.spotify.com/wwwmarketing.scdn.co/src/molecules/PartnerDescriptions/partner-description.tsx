import React, { memo } from 'react';
import { Container, Logo, Title, Content, Images, Image } from './components';
import { deprecateImageField } from '../../utils/helpers';
function PartnerDescription({ logo, logoSources: logoSourcesProp, header, content, images, imageSources: imageSourcesProp, }) {
    let logoSources;
    let imageSources;
    if (logo) {
        logoSources = deprecateImageField({
            oldProp: 'logo',
            newProp: 'logoSources',
            smallValue: logo,
        });
    }
    if (logoSourcesProp) {
        logoSources = logoSourcesProp;
    }
    if (images) {
        imageSources = images.map(image => deprecateImageField({
            oldProp: 'images',
            newProp: 'imageSources',
            smallValue: image,
        }));
    }
    if (imageSourcesProp) {
        imageSources = imageSourcesProp;
    }
    return (React.createElement(Container, null,
        React.createElement("header", null,
            logoSources && React.createElement(Logo, { sources: logoSources, label: header }),
            React.createElement(Title, null, header),
            React.createElement(Content, null, content)),
        React.createElement(Images, null, imageSources &&
            imageSources.map(image => React.createElement(Image, { sources: image, label: header })))));
}
export default memo(PartnerDescription);
//# sourceMappingURL=partner-description.js.map