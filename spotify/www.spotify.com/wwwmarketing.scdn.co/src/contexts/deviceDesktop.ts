"use strict";
// Copied from https://ghe.spotify.net/datainfra/event-definitions-ts/blob/master/src/contexts/createDeviceDesktop.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeviceDesktopContext = void 0;
/**
 * A builder for DeviceDesktop
 *
 * @param data - The event data
 * @return The formatted event data for DeviceDesktopContext
 */
function createDeviceDesktopContext(data) {
    return function () {
        return {
            name: 'context_device_desktop',
            data: data,
        };
    };
}
exports.createDeviceDesktopContext = createDeviceDesktopContext;
//# sourceMappingURL=deviceDesktop.js.map