var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import * as dataLayer from '../snippets/dataLayer';
import * as gtm from '../snippets/gtm';
import * as ot from '../snippets/onetrust';
import * as optimize from '../snippets/optimize';
export function track(trackParams) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!trackParams)
            return Promise.resolve();
        const actions = getActions(trackParams);
        pushInitialDataToDataLayer(Object.assign(Object.assign({}, actions), trackParams));
        return yield loadScripts(Object.assign(Object.assign({}, actions), trackParams));
    });
}
function getActions(trackParams) {
    const { dataLayerPushInitial, googleOptimizeId, googleTagManagerId, language, market, oneTrust, } = trackParams;
    return {
        loadGoogleOptimize: !!googleOptimizeId,
        loadGoogleTagManager: !!googleTagManagerId,
        loadOneTrust: oneTrust && market,
        pushInitialData: dataLayerPushInitial && language && market,
    };
}
function pushInitialDataToDataLayer({ language, loggedIn = false, pushInitialData, market, userCountry = '', }) {
    if (pushInitialData) {
        dataLayer.push({
            language: language,
            loggedIn,
            market: market,
            userCountry,
        });
    }
}
function loadScripts({ loadGoogleOptimize, loadGoogleTagManager, loadOneTrust, googleOptimizeId, googleOptimizeTimeout, googleTagManagerId, googleTagManagerAdditionalData, oneTrustDomainScript, }) {
    return __awaiter(this, void 0, void 0, function* () {
        const loaders = [];
        if (loadGoogleOptimize) {
            loaders.push(optimize.load({ id: googleOptimizeId, timeout: googleOptimizeTimeout }));
        }
        if (loadGoogleTagManager && loadOneTrust) {
            loaders.push(ot.load({ oneTrustDomainScript }).then(() => gtm.load({
                id: googleTagManagerId,
                additionalData: googleTagManagerAdditionalData,
            })));
        }
        else if (loadOneTrust) {
            loaders.push(ot.load({ oneTrustDomainScript }));
        }
        else if (loadGoogleTagManager) {
            loaders.push(gtm.load({
                id: googleTagManagerId,
                additionalData: googleTagManagerAdditionalData,
            }));
        }
        return Promise.all(loaders);
    });
}
//# sourceMappingURL=index.js.map