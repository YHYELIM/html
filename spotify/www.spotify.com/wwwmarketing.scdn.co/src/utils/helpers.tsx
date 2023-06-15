import { Deprecation } from 'deprecation';
import { getFlatCamelCaseMap, cssColorVar, } from '@spotify-internal/encore-web';
import xss from 'xss';
const KEYCODE_ENTER = 13;
const KEYCODE_SPACE = 32;
export const responsiveSize = (minSize, maxSize, minViewport, maxViewport) => `clamp(${minSize}px, calc(${minSize}px + (${maxSize} - ${minSize}) * ((100vw - ${minViewport}px) / (${maxViewport} - ${minViewport}))), ${maxSize}px)`;
export const deprecateImageField = ({ oldProp, newProp, smallValue, mediumValue, largeValue, }) => {
    if (process.env.NODE_ENV !== 'production') {
        console.warn(new Deprecation(`"${oldProp}" field is deprecated, please use "${newProp}" instead: https://sites.spotify.net/spa/%40spotify-internal-landing-page-library/?path=/docs/benefits--basic-benefits#v750`));
    }
    const migratedObject = {
        small: { '1x': smallValue },
    };
    if (mediumValue)
        migratedObject.medium = { '1x': mediumValue };
    if (largeValue)
        migratedObject.large = { '1x': largeValue };
    return migratedObject;
};
export const handleKeyUp = ({ e, callback, }) => {
    if (e.keyCode === KEYCODE_ENTER || e.keyCode === KEYCODE_SPACE) {
        e.preventDefault();
        callback();
    }
};
export const purify = (input) => {
    const options = {
        whiteList: {
            a: ['class', 'style', 'href'],
            b: [],
            br: [],
            div: ['class', 'style'],
            em: [],
            i: [],
            li: [],
            ol: [],
            p: [],
            span: ['class', 'style'],
            strong: [],
            sup: [],
            ul: [],
        },
    };
    return typeof input !== 'string' ? '' : xss(input, options);
};
export const isArabicMarket = (market, direction) => {
    return (market === null || market === void 0 ? void 0 : market.includes('-ar')) && direction === 'rtl';
};
export const printThemeVars = ({ values }) => {
    const output = [];
    const themeProps = getFlatCamelCaseMap(values);
    for (const [key, value] of Object.entries(themeProps)) {
        output.push(`${cssColorVar(key)}: ${value}`);
    }
    return `${output.join(';')};`;
};
export const hexToRgba = ({ opacity, hex, }) => {
    if (!hex)
        return null;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
        ? `rgba(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)}, ${opacity})`
        : null;
};
export const pxStringToInt = (str) => parseInt(str.split('px')[0], 10);
export const getProportionalSize = (fontSize, proportion) => fontSize * proportion;
//# sourceMappingURL=helpers.js.map