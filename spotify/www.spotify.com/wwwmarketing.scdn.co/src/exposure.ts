import { createEventSender } from '@spotify-internal/event-sender';
import { createConfigurationApplied, createConfigurationAppliedNonAuth, createDefaultConfigurationApplied, createDefaultConfigurationAppliedNonAuth, } from './events';
import { ResolveResponse, } from '@spotify-internal/remote-config-core';
function defaultEventSender(transport) {
    if (!transport)
        throw new Error(`Either "transport" or "eventSender" must be provided.`);
    return createEventSender({ transport });
}
export function exposureMiddleware(next) {
    return ({ clientId, transport, eventSender = defaultEventSender(transport), }) => (req) => next(req)
        .then(res => {
        const authorize = Boolean(req.username);
        const eventData = createConfigAppliedEventData(clientId, req, res);
        eventSender.send(authorize
            ? createConfigurationApplied(eventData)
            : createConfigurationAppliedNonAuth(eventData), { authorize, flush: true });
        return res;
    })
        .catch((err) => {
        const authorize = Boolean(req.username);
        const reason = hasProperty(err, 'message')
            ? String(err.message)
            : undefined;
        const eventData = createDefaultConfigAppliedEventData(clientId, req, reason);
        eventSender.send(authorize
            ? createDefaultConfigurationApplied(eventData)
            : createDefaultConfigurationAppliedNonAuth(eventData), { authorize, flush: true });
        throw err;
    });
}
function createConfigAppliedEventData(clientId, req, res) {
    const configuration_assignment_id = res.getValue(ResolveResponse.configurationAssignmentId);
    const last_rcs_fetch_time = res.getValue(ResolveResponse.fetchTimeMillis);
    const policy_group_ids = unique(Object.values(res.getValue(ResolveResponse.groupIds) || {}));
    return {
        platform: 'WEB',
        rc_client_id: clientId,
        configuration_assignment_id,
        fetch_type: req.fetchType,
        installation_id: req.installationId,
        last_rcs_fetch_time,
        policy_group_ids,
    };
}
function createDefaultConfigAppliedEventData(clientId, req, reason) {
    return {
        installation_id: req.installationId,
        rc_client_id: clientId,
        platform: 'WEB',
        fetch_type: req.fetchType,
        reason,
    };
}
function unique(items) {
    return Array.from(new Set(items));
}
function hasProperty(obj, name) {
    return (((typeof obj === 'object' && obj !== null) || typeof obj === 'function') &&
        name in obj);
}
//# sourceMappingURL=exposure.js.map