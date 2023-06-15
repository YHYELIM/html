export function authTransformEvent(isAuthenticated, authEvent, nonAuthEvent, eventPayload) {
    return isAuthenticated ? authEvent(eventPayload) : nonAuthEvent(eventPayload);
}
//# sourceMappingURL=authTransformEvent.js.map