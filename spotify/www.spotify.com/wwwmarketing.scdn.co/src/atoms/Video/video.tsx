import React, { memo } from 'react';
import styled from 'styled-components';
export const VideoContainer = styled.div `
  position: relative;
  padding-bottom: 56.25%; /* 16:9 */
  height: 0;
  overflow: hidden;
  width: 100%;

  & > iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;
export function Video({ src, title }) {
    return (React.createElement(VideoContainer, null,
        React.createElement("iframe", { src: src, title: title, frameBorder: "0", allowFullScreen: true })));
}
export default memo(Video);
//# sourceMappingURL=video.js.map