import { createDebugLogger } from '@spotify-internal/remote-config-common';
import { Middleware } from '@spotify-internal/remote-config-core';
import { getDefinition, getDefinitions, Property, } from '@spotify-internal/remote-config-properties';
const debug = createDebugLogger('middleware:properties');
export const propertiesMiddleware = Middleware.fromContextProvider(({ clientId, properties }) => ctx => {
    const propertySpecs = properties
        ? properties.map(getDefinition)
        : getDefinitions();
    const propertySetId = Property.getPropertySetId({ clientId }, propertySpecs);
    debug('Property Set ID', propertySetId);
    debug('Properties', propertySpecs);
    return Object.assign(Object.assign({}, ctx), { propertySetId });
});
//# sourceMappingURL=properties.js.map