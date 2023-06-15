var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { AppStoreBadge } from './components';
const DEFAULT_BADGE_LANG = 'en';
const APPLE_SUPPORTED_BADGE_LANGS = [
    'ar',
    'az',
    'bg',
    'cs_CZ',
    'da',
    'de',
    'ee',
    'el',
    'en',
    'es_mx',
    'es',
    'fi',
    'fp',
    'fr_ca',
    'fr',
    'he',
    'hu',
    'id',
    'it',
    'ja',
    'ko',
    'lt',
    'lv',
    'ms',
    'mt',
    'nb',
    'nl',
    'pl',
    'pt_br',
    'pt',
    'ro',
    'ru',
    'sk',
    'sl',
    'sv',
    'th_TH',
    'tr',
    'vi_VN',
    'zh_HANS',
    'zh_HANT',
];
const GOOGLE_SUPPORTED_BADGE_LANGS = [
    'af',
    'am',
    'ar',
    'az',
    'be',
    'bg',
    'bn',
    'bs',
    'ca',
    'cr',
    'cs_CZ',
    'da',
    'de',
    'el',
    'en',
    'es_419',
    'es',
    'et',
    'eu',
    'fa',
    'fi',
    'fp',
    'fr_ca',
    'fr',
    'gl',
    'gu',
    'he',
    'hi',
    'hr',
    'hu',
    'hy',
    'id',
    'is',
    'it',
    'ja',
    'ka',
    'kk',
    'km',
    'kn',
    'ko',
    'ky',
    'lo',
    'lt',
    'lv',
    'mk',
    'ml',
    'mn',
    'mr',
    'ms',
    'my',
    'nb',
    'ne',
    'nl',
    'pa',
    'pl',
    'pt_br',
    'pt',
    'ro',
    'ru',
    'si',
    'sk',
    'sl',
    'sq',
    'sr',
    'sv',
    'sw',
    'ta',
    'te',
    'th_TH',
    'tr',
    'ua',
    'ur',
    'uz',
    'vi_VN',
    'zh_HANS',
    'zh_HANT',
    'zh_hk',
    'zu',
];
const APPLE_DEFAULT_ALT = 'Download on the App Store';
const GOOGLE_DEFAULT_ALT = 'Get it on Google Play';
export var Platform;
(function (Platform) {
    Platform["APPLE"] = "apple";
    Platform["GOOGLE"] = "google";
})(Platform || (Platform = {}));
export function getBadgeLang(platform, language) {
    const supported = platform === Platform.APPLE
        ? APPLE_SUPPORTED_BADGE_LANGS
        : GOOGLE_SUPPORTED_BADGE_LANGS;
    return supported.includes(language) ? language : DEFAULT_BADGE_LANG;
}
export function getBadgeSrc(platform, language) {
    return `https://www-growth.scdn.co/static/badges/svgs/${platform}/badge-${getBadgeLang(platform, language)}.svg`;
}
function AppStoreBadgeComponent(props) {
    const { platform, href, alt = platform === Platform.APPLE ? APPLE_DEFAULT_ALT : GOOGLE_DEFAULT_ALT, appStoreBadgeLang = 'en', dataEventAction, dataEventCategory, dataEventLabel } = props, rest = __rest(props, ["platform", "href", "alt", "appStoreBadgeLang", "dataEventAction", "dataEventCategory", "dataEventLabel"]);
    return (React.createElement(AppStoreBadge, Object.assign({ key: href, href: href, "data-testid": "apple-store-badge", "data-ga-action": dataEventAction, "data-ga-category": dataEventCategory, "data-ga-label": dataEventLabel, rel: "noopener noreferrer", platform: platform }, rest),
        React.createElement("img", { src: getBadgeSrc(platform, appStoreBadgeLang), alt: alt })));
}
export default AppStoreBadgeComponent;
//# sourceMappingURL=app-store-badge.js.map