"use strict";
// Copied from https://ghe.spotify.net/datainfra/event-definitions-ts/blob/master/src/contexts/createApplicationDesktop.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApplicationDesktopContext = void 0;
/**
 * A builder for ApplicationDesktop
 *
 * @param data - The event data
 * @return The formatted event data for ApplicationDesktopContext
 */
function createApplicationDesktopContext(data) {
    return function () {
        return {
            name: 'context_application_desktop',
            data: data,
        };
    };
}
exports.createApplicationDesktopContext = createApplicationDesktopContext;
//# sourceMappingURL=applicationDesktop.js.map