import { Configuration, defineInternal, findPropertyRef, } from '@spotify-internal/remote-config-properties';
import * as proto from '../proto';
export var ResolveResponse;
(function (ResolveResponse) {
    ResolveResponse.Payload = proto.ResolveResponse;
    ResolveResponse.configurationAssignmentId = defineInternal({
        name: '#configurationAssignmentId',
        description: 'Unique ID for the specific resolver call this configuration originates from.',
        default: '',
    });
    ResolveResponse.fetchTimeMillis = defineInternal({
        name: '#fetchTimeMillis',
        description: 'Server reported time when this configuration was fetched.',
        default: 0,
    });
    ResolveResponse.groupIds = defineInternal({
        name: '#groupIds',
        description: 'An object mapping property name to group-id.',
        default: undefined,
    });
    function toConfiguration({ configuration, }) {
        if (!configuration)
            throw new Error('Bad response payload');
        const builder = Configuration.builder();
        const groupIdRecord = {};
        for (const { propertyId, metadata, boolValue, intValue, enumValue, } of configuration.assignedValues) {
            const propertyName = propertyId.name;
            const ref = findPropertyRef(propertyName);
            if (!ref)
                continue;
            if (metadata) {
                groupIdRecord[propertyName] = metadata.externalRealmId;
            }
            if (boolValue) {
                builder.setValue(ref, boolValue.value);
            }
            else if (intValue) {
                builder.setValue(ref, intValue.value);
            }
            else if (enumValue) {
                builder.setValue(ref, enumValue.value);
            }
        }
        builder.setValue(ResolveResponse.configurationAssignmentId, configuration.configurationAssignmentId);
        builder.setValue(ResolveResponse.groupIds, groupIdRecord);
        builder.setValue(ResolveResponse.fetchTimeMillis, configuration.fetchTimeMillis);
        return builder;
    }
    ResolveResponse.toConfiguration = toConfiguration;
})(ResolveResponse || (ResolveResponse = {}));
//# sourceMappingURL=response.js.map