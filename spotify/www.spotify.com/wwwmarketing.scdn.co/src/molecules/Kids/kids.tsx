import React from 'react';
import { Wrapper, KidsContainer, Content, Body, Emphasis, Subheader, ImageContainer, ButtonWrapper, } from './components';
import Button from '../../atoms/Button';
import Image from '../../atoms/Image';
import { deprecateImageField } from '../../utils/helpers';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
export function Kids({ container, headerImage, body, emphasis, subheader, image, button, eventParams, imageSources: imageSourcesProp, headerImageSources: headerImageSourcesProp, }) {
    let imageSources;
    let headerImageSources;
    if (image) {
        imageSources = deprecateImageField({
            oldProp: 'image',
            newProp: 'imageSources',
            smallValue: image.mobile,
            mediumValue: image.tablet,
            largeValue: image.desktop,
        });
    }
    if (imageSourcesProp) {
        imageSources = imageSourcesProp;
    }
    if (headerImage) {
        headerImageSources = deprecateImageField({
            oldProp: 'headerImage',
            newProp: 'headerImageSources',
            smallValue: headerImage.src,
        });
    }
    if (headerImageSourcesProp) {
        headerImageSources = headerImageSourcesProp;
    }
    return (React.createElement(Wrapper, Object.assign({}, container, eventParamAttributes(eventParams)),
        React.createElement(KidsContainer, null,
            React.createElement(Content, null,
                headerImageSources && (React.createElement(Image, { useIntrinsicSizing: true, sources: headerImageSources })),
                React.createElement(Body, null, (body && body.text) || ''),
                React.createElement(Emphasis, { emphasis: emphasis || { color: 'transparent' } }, (emphasis && emphasis.text) || ''),
                subheader && (React.createElement(Subheader, { subheader: subheader || { color: 'transparent' } }, subheader.text || '')),
                button && (React.createElement(ButtonWrapper, null,
                    React.createElement(Button, Object.assign({ color: button.color, backgroundColor: button.backgroundColor }, button))))),
            imageSources && (React.createElement(ImageContainer, null,
                React.createElement(Image, { useIntrinsicSizing: true, sources: imageSources }))))));
}
export default Kids;
//# sourceMappingURL=kids.js.map