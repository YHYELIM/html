import { v4 as uuid } from 'uuid';
import { Middleware } from '@spotify-internal/remote-config-core';
import cookie from 'js-cookie';
const INSTALLATION_ID_COOKIE_KEY = 'sp_t';
const INSTALLATION_ID_STORAGE_KEY = 'com.spotify.rcs.installationId';
function getUuid() {
    try {
        return uuid();
    }
    catch (err) {
        return uuid({
            rng: () => {
                const randomNumbers = new Array(16);
                let r;
                for (let i = 0; i < 16; i++) {
                    if ((i & 0x03) === 0)
                        r = Math.random() * 0x100000000;
                    randomNumbers[i] = (r >>> ((i & 0x03) << 3)) & 0xff;
                }
                return randomNumbers;
            },
        });
    }
}
export function isValidInstallationId(id) {
    return typeof id === 'string' && id.length > 5;
}
const yearInMs = () => 3600 * 24 * 366 * 1000;
export function getInstallationId(storage) {
    const sptFromCookie = cookie.get(INSTALLATION_ID_COOKIE_KEY);
    let effectiveInstallationId = sptFromCookie;
    if (effectiveInstallationId === undefined && storage) {
        const sptFromLs = storage.getItem(INSTALLATION_ID_STORAGE_KEY);
        if (isValidInstallationId(sptFromLs)) {
            effectiveInstallationId = sptFromLs;
        }
    }
    if (!isValidInstallationId(effectiveInstallationId)) {
        effectiveInstallationId = getUuid();
    }
    if (sptFromCookie !== effectiveInstallationId) {
        cookie.set(INSTALLATION_ID_COOKIE_KEY, effectiveInstallationId, {
            expires: Date.now() + yearInMs(),
            path: '/',
        });
    }
    return effectiveInstallationId;
}
export const installationIdMiddleware = Middleware.fromContextProvider(({ installationId }) => ({
    installationId: isValidInstallationId(installationId)
        ? installationId
        : getInstallationId(localStorage),
}));
//# sourceMappingURL=installationid.js.map