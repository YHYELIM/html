var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { insertExternalScript } from '../../util/insertScript';
import { GLOBAL_SRC } from './scriptSrc';
import { getCookie } from '../../util/getCookie';
import { push as dataLayerPush, gtag as dataLayerGtag } from './../dataLayer';
const DOMAIN_SCRIPT_ID = '50da44be-0564-43df-b139-329aedcf267b';
export function load({ timeout = 5000, oneTrustDomainScript, }) {
    return __awaiter(this, void 0, void 0, function* () {
        let loadTimer;
        window.OptanonWrapper = handleLoad;
        return new Promise((resolve, reject) => {
            insertExternalScript({
                dataset: {
                    domainScript: oneTrustDomainScript
                        ? oneTrustDomainScript
                        : DOMAIN_SCRIPT_ID,
                    documentLanguage: 'true',
                },
                onError: reject,
                onLoad: resolve,
                src: GLOBAL_SRC,
            });
            loadTimer = setTimeout(reject, timeout);
        }).then(() => clearTimeout(loadTimer));
    });
}
export function handleLoad() {
    if (!window.gtag) {
        window.gtag = dataLayerGtag;
    }
    const consentParam = getCookie('OptanonConsent')
        .split('&')
        .filter(kv => kv.split('=')[0] === 'consentId')[0];
    if ((window.__cmp || window.__tcfapi) &&
        window.OptanonActiveGroups &&
        consentParam) {
        handleLoadSuccess(consentParam);
    }
}
function handleLoadSuccess(consentParam) {
    const consentId = consentParam.split('=')[1];
    if (window.__tcfapi) {
        window.__tcfapi('getTCData', 2, handleVendorConsentsV2(consentId));
    }
    else {
        window.__cmp('getVendorConsents', {}, handleVendorConsentsV1(consentId));
    }
}
function handleVendorConsentsV1(consentId) {
    return function handleConsents(data) {
        const consentData = JSON.stringify({
            id: consentId,
            iab: data.metadata,
            cate: window.OptanonActiveGroups,
        });
        setConsentCookie();
        dataLayerPush({ consentData });
    };
}
function handleVendorConsentsV2(consentId) {
    return function handleConsents(data, success) {
        if (!success) {
            return;
        }
        const consentData = JSON.stringify({
            id: consentId,
            iab: data.tcString,
            cate: window.OptanonActiveGroups,
        });
        setConsentCookie();
        dataLayerPush({ consentData });
    };
}
const CONSENT_COOKIE_NAME = 'sp_consent';
const CONSENT_COOKIE_MAX_AGE = -1000;
function setConsentCookie() {
    document.cookie = [
        `${CONSENT_COOKIE_NAME}=`,
        `max-age=${CONSENT_COOKIE_MAX_AGE}`,
        'domain=.spotify.com',
        'path=/',
    ].join('; ');
}
//# sourceMappingURL=index.js.map