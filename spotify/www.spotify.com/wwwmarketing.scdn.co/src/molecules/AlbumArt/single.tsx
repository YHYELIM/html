import React, { memo } from 'react';
import { SingleWrapper as Wrapper, SingleImage as Image, SingleContent as Content, SingleHeader as Header, SingleText as Text, ButtonGroup, } from './components';
import Button from '../../atoms/Button';
import { deprecateImageField } from '../../utils/helpers';
function Single({ header, image, imageSources: imageSourcesProp, content, button = null, }) {
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
            button && (React.createElement(ButtonGroup, { role: "button" },
                React.createElement(Button, Object.assign({}, button)))))));
}
export default memo(Single);
//# sourceMappingURL=single.js.map