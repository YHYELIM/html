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
import { hashJsonValue } from '@spotify-internal/remote-config-common';
import * as proto from '../proto';
export var FetchType;
(function (FetchType) {
    FetchType["BLOCKING"] = "blocking";
    FetchType["BACKGROUND_SYNC"] = "background_sync";
    FetchType["DELAYED"] = "delayed";
})(FetchType || (FetchType = {}));
const knownContextMap = {
    username: {
        knownContext: proto.DynamicContext_KnownContext.KNOWN_CONTEXT_USER_ID,
        encode: (value) => value !== null && value !== void 0 ? value : '',
    },
    installationId: {
        knownContext: proto.DynamicContext_KnownContext.KNOWN_CONTEXT_INSTALLATION_ID,
        encode: (value) => value,
    },
    version: {
        knownContext: proto.DynamicContext_KnownContext.KNOWN_CONTEXT_VERSION,
        encode: (value) => value,
    },
};
export var KnownContext;
(function (KnownContext) {
    function extract(context) {
        return Object.entries(context)
            .filter(([key]) => key in knownContextMap)
            .reduce((acc, [key, value]) => (Object.assign(Object.assign({}, acc), { [key]: value })), {});
    }
    KnownContext.extract = extract;
    function hash(context) {
        return hashJsonValue(extract(context));
    }
    KnownContext.hash = hash;
})(KnownContext || (KnownContext = {}));
export var ResolveRequest;
(function (ResolveRequest) {
    function toPayload(_a) {
        var { propertySetId, fetchType = FetchType.BLOCKING } = _a, context = __rest(_a, ["propertySetId", "fetchType"]);
        return {
            propertySetId,
            context: payloadContext(context),
            fetchType: { type: payloadFetchType(fetchType) },
        };
    }
    ResolveRequest.toPayload = toPayload;
})(ResolveRequest || (ResolveRequest = {}));
function payloadContext(ctx) {
    return {
        context: Object.entries(ctx)
            .filter(([key]) => key in knownContextMap)
            .map(([key, value]) => {
            const { knownContext, encode } = knownContextMap[key];
            return {
                knownContext,
                value: encode(value),
            };
        }),
    };
}
function payloadFetchType(ft) {
    switch (ft) {
        case FetchType.BACKGROUND_SYNC:
            return proto.Fetch_Type.BACKGROUND_SYNC;
        case FetchType.BLOCKING:
            return proto.Fetch_Type.BLOCKING;
        case FetchType.DELAYED:
            return proto.Fetch_Type.DELAYED;
        default:
            throw new Error(`Unknown FetchType (${ft})`);
    }
}
//# sourceMappingURL=request.js.map