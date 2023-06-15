import React, { memo } from 'react';
import Album from './album';
import Single from './single';
import Header from '../../atoms/Header';
import { Container, ContainerContent } from './components';
import { eventParamAttributes, } from '@spotify-internal/touchdown-analytics';
export function AlbumArt({ header, data, container, eventParams, }) {
    if (!data) {
        return null;
    }
    return (React.createElement(Container, Object.assign({}, eventParamAttributes(eventParams), container),
        header && React.createElement(Header, Object.assign({}, header)),
        React.createElement(ContainerContent, null, data.length === 1 ? (React.createElement(Single, Object.assign({}, data[0]))) : (data.map((album, i) => React.createElement(Album, Object.assign({ key: i }, album)))))));
}
export default memo(AlbumArt);
//# sourceMappingURL=album-art.js.map