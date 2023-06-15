import React, { memo } from 'react';
import { AlbumWrapper as Wrapper, AlbumImage as Image, AlbumContent as Content, AlbumHeader as Header, AlbumText as Text, } from './components';
import Button from '../../atoms/Button';
import { deprecateImageField } from '../../utils/helpers';
function Album({ header, image, imageSources: imageSourcesProp, content, button = null, }) {
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
    return (React.createElement(Wrapper, null,
        imageSources && React.createElement(Image, { sources: imageSources }),
        React.createElement(Content, null,
            React.createElement(Header, null, header),
            React.createElement(Text, null, content),
            button && React.createElement(Button, Object.assign({}, button)))));
}
export default memo(Album);
//# sourceMappingURL=album.js.map