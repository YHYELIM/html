import React from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import { screenSmMin, screenLgMin } from '@spotify-internal/encore-web';
const hiresMediaQuery = `
only screen and ( min-device-pixel-ratio: 1.25),
only screen and ( min-resolution: 200dpi),
only screen and ( min-resolution: 1.25dppx)`;
const generateBackgroundsFromProps = function generateBackgrounds(sources) {
    const backgrounds = [];
    backgrounds.push(`background-image: url("${encodeURI(sources.small['1x'])}");`);
    if (sources.small['2x']) {
        backgrounds.push(`
      html:not([data-prefers-reduced-data]) & {
        @media ${hiresMediaQuery} { background-image: url("${encodeURI(sources.small['2x'])}"); }
      }
  `);
    }
    if (sources.medium) {
        backgrounds.push(`@media screen and (min-width: ${screenSmMin}) {`);
        backgrounds.push(`background-image: url("${encodeURI(sources.medium['1x'])}");`);
        if (sources.medium['2x']) {
            backgrounds.push(`
        html:not([data-prefers-reduced-data]) & {
          @media ${hiresMediaQuery} { background-image: url("${encodeURI(sources.medium['2x'])}"); }
        }
    `);
        }
        backgrounds.push(`}`);
    }
    if (sources.large) {
        backgrounds.push(`@media screen and (min-width: ${screenLgMin}) {`);
        backgrounds.push(`background-image: url("${encodeURI(sources.large['1x'])}");`);
        if (sources.large['2x']) {
            backgrounds.push(`
        html:not([data-prefers-reduced-data]) & {
          @media ${hiresMediaQuery} { background-image: url("${encodeURI(sources.large['2x'])}"); }
        }
    `);
        }
        backgrounds.push(`}`);
    }
    return backgrounds.join('\n');
};
const BaseImage = styled.div `
  display: inline-block;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  html.no-js &&,
  &[data-in-view='true'] {
    ${({ sources }) => generateBackgroundsFromProps(sources)};
  }
`;
const PictureImage = styled.picture `
  display: flex;
`;
function Image(props) {
    var _a;
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: '200px',
    });
    if (props.useIntrinsicSizing) {
        return (React.createElement(PictureImage, null,
            props.sources.large && (React.createElement("source", { srcSet: `${encodeURI(props.sources.large['1x'])}${props.sources.large['2x']
                    ? `, ${encodeURI(props.sources.large['2x'])} 2x`
                    : ''}`, media: `(min-width: ${screenLgMin})` })),
            props.sources.medium && (React.createElement("source", { srcSet: `${encodeURI(props.sources.medium['1x'])}${props.sources.medium['2x']
                    ? `, ${encodeURI(props.sources.medium['2x'])} 2x`
                    : ''}`, media: `(min-width: ${screenSmMin})` })),
            React.createElement("img", { className: props.className, src: encodeURI(props.sources.small['1x']), srcSet: props.sources.small['2x']
                    ? `${encodeURI(props.sources.small['2x'])} 2x`
                    : undefined, alt: (_a = props.label) !== null && _a !== void 0 ? _a : '', loading: "lazy" })));
    }
    return React.createElement(BaseImage, Object.assign({ ref: ref, "data-in-view": inView }, props));
}
export default Image;
//# sourceMappingURL=image.js.map