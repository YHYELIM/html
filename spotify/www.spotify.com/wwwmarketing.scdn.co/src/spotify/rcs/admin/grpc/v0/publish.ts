import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'spotify.rcs.admin.grpc.v0';
export var PublishPropertySetResponse_Status;
(function (PublishPropertySetResponse_Status) {
    PublishPropertySetResponse_Status[PublishPropertySetResponse_Status["INVALID"] = 0] = "INVALID";
    PublishPropertySetResponse_Status[PublishPropertySetResponse_Status["CREATED"] = 1] = "CREATED";
    PublishPropertySetResponse_Status[PublishPropertySetResponse_Status["NOT_CHANGED"] = 2] = "NOT_CHANGED";
    PublishPropertySetResponse_Status[PublishPropertySetResponse_Status["VALIDATED"] = 3] = "VALIDATED";
    PublishPropertySetResponse_Status[PublishPropertySetResponse_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(PublishPropertySetResponse_Status || (PublishPropertySetResponse_Status = {}));
export function publishPropertySetResponse_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case 'INVALID':
            return PublishPropertySetResponse_Status.INVALID;
        case 1:
        case 'CREATED':
            return PublishPropertySetResponse_Status.CREATED;
        case 2:
        case 'NOT_CHANGED':
            return PublishPropertySetResponse_Status.NOT_CHANGED;
        case 3:
        case 'VALIDATED':
            return PublishPropertySetResponse_Status.VALIDATED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return PublishPropertySetResponse_Status.UNRECOGNIZED;
    }
}
export function publishPropertySetResponse_StatusToJSON(object) {
    switch (object) {
        case PublishPropertySetResponse_Status.INVALID:
            return 'INVALID';
        case PublishPropertySetResponse_Status.CREATED:
            return 'CREATED';
        case PublishPropertySetResponse_Status.NOT_CHANGED:
            return 'NOT_CHANGED';
        case PublishPropertySetResponse_Status.VALIDATED:
            return 'VALIDATED';
        default:
            return 'UNKNOWN';
    }
}
export var AppContext_StaticContext_AppPlatform;
(function (AppContext_StaticContext_AppPlatform) {
    AppContext_StaticContext_AppPlatform[AppContext_StaticContext_AppPlatform["APP_PLATFORM_UNKNOWN"] = 0] = "APP_PLATFORM_UNKNOWN";
    AppContext_StaticContext_AppPlatform[AppContext_StaticContext_AppPlatform["APP_PLATFORM_ANDROID"] = 1] = "APP_PLATFORM_ANDROID";
    AppContext_StaticContext_AppPlatform[AppContext_StaticContext_AppPlatform["APP_PLATFORM_IOS"] = 2] = "APP_PLATFORM_IOS";
    AppContext_StaticContext_AppPlatform[AppContext_StaticContext_AppPlatform["APP_PLATFORM_WEB"] = 3] = "APP_PLATFORM_WEB";
    AppContext_StaticContext_AppPlatform[AppContext_StaticContext_AppPlatform["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(AppContext_StaticContext_AppPlatform || (AppContext_StaticContext_AppPlatform = {}));
export function appContext_StaticContext_AppPlatformFromJSON(object) {
    switch (object) {
        case 0:
        case 'APP_PLATFORM_UNKNOWN':
            return AppContext_StaticContext_AppPlatform.APP_PLATFORM_UNKNOWN;
        case 1:
        case 'APP_PLATFORM_ANDROID':
            return AppContext_StaticContext_AppPlatform.APP_PLATFORM_ANDROID;
        case 2:
        case 'APP_PLATFORM_IOS':
            return AppContext_StaticContext_AppPlatform.APP_PLATFORM_IOS;
        case 3:
        case 'APP_PLATFORM_WEB':
            return AppContext_StaticContext_AppPlatform.APP_PLATFORM_WEB;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return AppContext_StaticContext_AppPlatform.UNRECOGNIZED;
    }
}
export function appContext_StaticContext_AppPlatformToJSON(object) {
    switch (object) {
        case AppContext_StaticContext_AppPlatform.APP_PLATFORM_UNKNOWN:
            return 'APP_PLATFORM_UNKNOWN';
        case AppContext_StaticContext_AppPlatform.APP_PLATFORM_ANDROID:
            return 'APP_PLATFORM_ANDROID';
        case AppContext_StaticContext_AppPlatform.APP_PLATFORM_IOS:
            return 'APP_PLATFORM_IOS';
        case AppContext_StaticContext_AppPlatform.APP_PLATFORM_WEB:
            return 'APP_PLATFORM_WEB';
        default:
            return 'UNKNOWN';
    }
}
export var DynamicContext_KnownContext;
(function (DynamicContext_KnownContext) {
    DynamicContext_KnownContext[DynamicContext_KnownContext["KNOWN_CONTEXT_INVALID"] = 0] = "KNOWN_CONTEXT_INVALID";
    DynamicContext_KnownContext[DynamicContext_KnownContext["KNOWN_CONTEXT_USER_ID"] = 1] = "KNOWN_CONTEXT_USER_ID";
    DynamicContext_KnownContext[DynamicContext_KnownContext["KNOWN_CONTEXT_INSTALLATION_ID"] = 2] = "KNOWN_CONTEXT_INSTALLATION_ID";
    DynamicContext_KnownContext[DynamicContext_KnownContext["KNOWN_CONTEXT_VERSION"] = 3] = "KNOWN_CONTEXT_VERSION";
    DynamicContext_KnownContext[DynamicContext_KnownContext["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DynamicContext_KnownContext || (DynamicContext_KnownContext = {}));
export function dynamicContext_KnownContextFromJSON(object) {
    switch (object) {
        case 0:
        case 'KNOWN_CONTEXT_INVALID':
            return DynamicContext_KnownContext.KNOWN_CONTEXT_INVALID;
        case 1:
        case 'KNOWN_CONTEXT_USER_ID':
            return DynamicContext_KnownContext.KNOWN_CONTEXT_USER_ID;
        case 2:
        case 'KNOWN_CONTEXT_INSTALLATION_ID':
            return DynamicContext_KnownContext.KNOWN_CONTEXT_INSTALLATION_ID;
        case 3:
        case 'KNOWN_CONTEXT_VERSION':
            return DynamicContext_KnownContext.KNOWN_CONTEXT_VERSION;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return DynamicContext_KnownContext.UNRECOGNIZED;
    }
}
export function dynamicContext_KnownContextToJSON(object) {
    switch (object) {
        case DynamicContext_KnownContext.KNOWN_CONTEXT_INVALID:
            return 'KNOWN_CONTEXT_INVALID';
        case DynamicContext_KnownContext.KNOWN_CONTEXT_USER_ID:
            return 'KNOWN_CONTEXT_USER_ID';
        case DynamicContext_KnownContext.KNOWN_CONTEXT_INSTALLATION_ID:
            return 'KNOWN_CONTEXT_INSTALLATION_ID';
        case DynamicContext_KnownContext.KNOWN_CONTEXT_VERSION:
            return 'KNOWN_CONTEXT_VERSION';
        default:
            return 'UNKNOWN';
    }
}
function createBasePublishPropertySetRequest() {
    return { propertySet: undefined, metadata: undefined, dryRun: false };
}
export const PublishPropertySetRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.propertySet !== undefined) {
            PropertySet.encode(message.propertySet, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            PublishPropertySetRequest_Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        if (message.dryRun === true) {
            writer.uint32(24).bool(message.dryRun);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublishPropertySetRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.propertySet = PropertySet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.metadata = PublishPropertySetRequest_Metadata.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.dryRun = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            propertySet: isSet(object.propertySet)
                ? PropertySet.fromJSON(object.propertySet)
                : undefined,
            metadata: isSet(object.metadata)
                ? PublishPropertySetRequest_Metadata.fromJSON(object.metadata)
                : undefined,
            dryRun: isSet(object.dryRun) ? Boolean(object.dryRun) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.propertySet !== undefined &&
            (obj.propertySet = message.propertySet
                ? PropertySet.toJSON(message.propertySet)
                : undefined);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? PublishPropertySetRequest_Metadata.toJSON(message.metadata)
                : undefined);
        message.dryRun !== undefined && (obj.dryRun = message.dryRun);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePublishPropertySetRequest();
        message.propertySet =
            object.propertySet !== undefined && object.propertySet !== null
                ? PropertySet.fromPartial(object.propertySet)
                : undefined;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? PublishPropertySetRequest_Metadata.fromPartial(object.metadata)
                : undefined;
        message.dryRun = (_a = object.dryRun) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBasePublishPropertySetRequest_Metadata() {
    return { integrationToken: undefined };
}
export const PublishPropertySetRequest_Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.integrationToken !== undefined) {
            PublishPropertySetRequest_Metadata_IntegrationToken.encode(message.integrationToken, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublishPropertySetRequest_Metadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.integrationToken =
                        PublishPropertySetRequest_Metadata_IntegrationToken.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            integrationToken: isSet(object.integrationToken)
                ? PublishPropertySetRequest_Metadata_IntegrationToken.fromJSON(object.integrationToken)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.integrationToken !== undefined &&
            (obj.integrationToken = message.integrationToken
                ? PublishPropertySetRequest_Metadata_IntegrationToken.toJSON(message.integrationToken)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePublishPropertySetRequest_Metadata();
        message.integrationToken =
            object.integrationToken !== undefined && object.integrationToken !== null
                ? PublishPropertySetRequest_Metadata_IntegrationToken.fromPartial(object.integrationToken)
                : undefined;
        return message;
    },
};
function createBasePublishPropertySetRequest_Metadata_IntegrationToken() {
    return { integrationToken: '' };
}
export const PublishPropertySetRequest_Metadata_IntegrationToken = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.integrationToken !== '') {
            writer.uint32(10).string(message.integrationToken);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublishPropertySetRequest_Metadata_IntegrationToken();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.integrationToken = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            integrationToken: isSet(object.integrationToken)
                ? String(object.integrationToken)
                : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.integrationToken !== undefined &&
            (obj.integrationToken = message.integrationToken);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePublishPropertySetRequest_Metadata_IntegrationToken();
        message.integrationToken = (_a = object.integrationToken) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBasePublishPropertySetResponse() {
    return { propertySet: undefined, status: 0 };
}
export const PublishPropertySetResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.propertySet !== undefined) {
            PropertySet.encode(message.propertySet, writer.uint32(10).fork()).ldelim();
        }
        if (message.status !== 0) {
            writer.uint32(16).int32(message.status);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePublishPropertySetResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.propertySet = PropertySet.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.status = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            propertySet: isSet(object.propertySet)
                ? PropertySet.fromJSON(object.propertySet)
                : undefined,
            status: isSet(object.status)
                ? publishPropertySetResponse_StatusFromJSON(object.status)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.propertySet !== undefined &&
            (obj.propertySet = message.propertySet
                ? PropertySet.toJSON(message.propertySet)
                : undefined);
        message.status !== undefined &&
            (obj.status = publishPropertySetResponse_StatusToJSON(message.status));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePublishPropertySetResponse();
        message.propertySet =
            object.propertySet !== undefined && object.propertySet !== null
                ? PropertySet.fromPartial(object.propertySet)
                : undefined;
        message.status = (_a = object.status) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBasePropertyDefinition() {
    return {
        id: undefined,
        metadata: undefined,
        boolSpec: undefined,
        intSpec: undefined,
        enumSpec: undefined,
    };
}
export const PropertyDefinition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.id !== undefined) {
            PropertyDefinition_Identifier.encode(message.id, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            PropertyDefinition_Metadata.encode(message.metadata, writer.uint32(34).fork()).ldelim();
        }
        if (message.boolSpec !== undefined) {
            PropertyDefinition_BoolSpec.encode(message.boolSpec, writer.uint32(42).fork()).ldelim();
        }
        if (message.intSpec !== undefined) {
            PropertyDefinition_IntSpec.encode(message.intSpec, writer.uint32(50).fork()).ldelim();
        }
        if (message.enumSpec !== undefined) {
            PropertyDefinition_EnumSpec.encode(message.enumSpec, writer.uint32(58).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePropertyDefinition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = PropertyDefinition_Identifier.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.metadata = PropertyDefinition_Metadata.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.boolSpec = PropertyDefinition_BoolSpec.decode(reader, reader.uint32());
                    break;
                case 6:
                    message.intSpec = PropertyDefinition_IntSpec.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.enumSpec = PropertyDefinition_EnumSpec.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id)
                ? PropertyDefinition_Identifier.fromJSON(object.id)
                : undefined,
            metadata: isSet(object.metadata)
                ? PropertyDefinition_Metadata.fromJSON(object.metadata)
                : undefined,
            boolSpec: isSet(object.boolSpec)
                ? PropertyDefinition_BoolSpec.fromJSON(object.boolSpec)
                : undefined,
            intSpec: isSet(object.intSpec)
                ? PropertyDefinition_IntSpec.fromJSON(object.intSpec)
                : undefined,
            enumSpec: isSet(object.enumSpec)
                ? PropertyDefinition_EnumSpec.fromJSON(object.enumSpec)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = message.id
                ? PropertyDefinition_Identifier.toJSON(message.id)
                : undefined);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? PropertyDefinition_Metadata.toJSON(message.metadata)
                : undefined);
        message.boolSpec !== undefined &&
            (obj.boolSpec = message.boolSpec
                ? PropertyDefinition_BoolSpec.toJSON(message.boolSpec)
                : undefined);
        message.intSpec !== undefined &&
            (obj.intSpec = message.intSpec
                ? PropertyDefinition_IntSpec.toJSON(message.intSpec)
                : undefined);
        message.enumSpec !== undefined &&
            (obj.enumSpec = message.enumSpec
                ? PropertyDefinition_EnumSpec.toJSON(message.enumSpec)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBasePropertyDefinition();
        message.id =
            object.id !== undefined && object.id !== null
                ? PropertyDefinition_Identifier.fromPartial(object.id)
                : undefined;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? PropertyDefinition_Metadata.fromPartial(object.metadata)
                : undefined;
        message.boolSpec =
            object.boolSpec !== undefined && object.boolSpec !== null
                ? PropertyDefinition_BoolSpec.fromPartial(object.boolSpec)
                : undefined;
        message.intSpec =
            object.intSpec !== undefined && object.intSpec !== null
                ? PropertyDefinition_IntSpec.fromPartial(object.intSpec)
                : undefined;
        message.enumSpec =
            object.enumSpec !== undefined && object.enumSpec !== null
                ? PropertyDefinition_EnumSpec.fromPartial(object.enumSpec)
                : undefined;
        return message;
    },
};
function createBasePropertyDefinition_Metadata() {
    return { componentId: '', description: '' };
}
export const PropertyDefinition_Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.componentId !== '') {
            writer.uint32(10).string(message.componentId);
        }
        if (message.description !== '') {
            writer.uint32(18).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePropertyDefinition_Metadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.componentId = reader.string();
                    break;
                case 2:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            componentId: isSet(object.componentId) ? String(object.componentId) : '',
            description: isSet(object.description) ? String(object.description) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.componentId !== undefined &&
            (obj.componentId = message.componentId);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePropertyDefinition_Metadata();
        message.componentId = (_a = object.componentId) !== null && _a !== void 0 ? _a : '';
        message.description = (_b = object.description) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
function createBasePropertyDefinition_Identifier() {
    return { scope: '', name: '' };
}
export const PropertyDefinition_Identifier = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.scope !== '') {
            writer.uint32(10).string(message.scope);
        }
        if (message.name !== '') {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePropertyDefinition_Identifier();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.scope = reader.string();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            scope: isSet(object.scope) ? String(object.scope) : '',
            name: isSet(object.name) ? String(object.name) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.scope !== undefined && (obj.scope = message.scope);
        message.name !== undefined && (obj.name = message.name);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePropertyDefinition_Identifier();
        message.scope = (_a = object.scope) !== null && _a !== void 0 ? _a : '';
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
function createBasePropertyDefinition_BoolSpec() {
    return { default: false };
}
export const PropertyDefinition_BoolSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.default === true) {
            writer.uint32(8).bool(message.default);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePropertyDefinition_BoolSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.default = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            default: isSet(object.default) ? Boolean(object.default) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.default !== undefined && (obj.default = message.default);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBasePropertyDefinition_BoolSpec();
        message.default = (_a = object.default) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBasePropertyDefinition_IntSpec() {
    return { default: 0, lower: 0, upper: 0 };
}
export const PropertyDefinition_IntSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.default !== 0) {
            writer.uint32(8).int32(message.default);
        }
        if (message.lower !== 0) {
            writer.uint32(16).int32(message.lower);
        }
        if (message.upper !== 0) {
            writer.uint32(24).int32(message.upper);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePropertyDefinition_IntSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.default = reader.int32();
                    break;
                case 2:
                    message.lower = reader.int32();
                    break;
                case 3:
                    message.upper = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            default: isSet(object.default) ? Number(object.default) : 0,
            lower: isSet(object.lower) ? Number(object.lower) : 0,
            upper: isSet(object.upper) ? Number(object.upper) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.default !== undefined &&
            (obj.default = Math.round(message.default));
        message.lower !== undefined && (obj.lower = Math.round(message.lower));
        message.upper !== undefined && (obj.upper = Math.round(message.upper));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBasePropertyDefinition_IntSpec();
        message.default = (_a = object.default) !== null && _a !== void 0 ? _a : 0;
        message.lower = (_b = object.lower) !== null && _b !== void 0 ? _b : 0;
        message.upper = (_c = object.upper) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBasePropertyDefinition_EnumSpec() {
    return { default: '', values: [] };
}
export const PropertyDefinition_EnumSpec = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.default !== '') {
            writer.uint32(10).string(message.default);
        }
        for (const v of message.values) {
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePropertyDefinition_EnumSpec();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.default = reader.string();
                    break;
                case 2:
                    message.values.push(reader.string());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            default: isSet(object.default) ? String(object.default) : '',
            values: Array.isArray(object === null || object === void 0 ? void 0 : object.values)
                ? object.values.map((e) => String(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.default !== undefined && (obj.default = message.default);
        if (message.values) {
            obj.values = message.values.map(e => e);
        }
        else {
            obj.values = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePropertyDefinition_EnumSpec();
        message.default = (_a = object.default) !== null && _a !== void 0 ? _a : '';
        message.values = ((_b = object.values) === null || _b === void 0 ? void 0 : _b.map(e => e)) || [];
        return message;
    },
};
function createBasePropertySet() {
    return {
        propertySetId: '',
        propertyDefinitions: [],
        backendContext: undefined,
        appContext: undefined,
    };
}
export const PropertySet = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.propertySetId !== '') {
            writer.uint32(10).string(message.propertySetId);
        }
        for (const v of message.propertyDefinitions) {
            PropertyDefinition.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.backendContext !== undefined) {
            BackendContext.encode(message.backendContext, writer.uint32(26).fork()).ldelim();
        }
        if (message.appContext !== undefined) {
            AppContext.encode(message.appContext, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBasePropertySet();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.propertySetId = reader.string();
                    break;
                case 2:
                    message.propertyDefinitions.push(PropertyDefinition.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.backendContext = BackendContext.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.appContext = AppContext.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            propertySetId: isSet(object.propertySetId)
                ? String(object.propertySetId)
                : '',
            propertyDefinitions: Array.isArray(object === null || object === void 0 ? void 0 : object.propertyDefinitions)
                ? object.propertyDefinitions.map((e) => PropertyDefinition.fromJSON(e))
                : [],
            backendContext: isSet(object.backendContext)
                ? BackendContext.fromJSON(object.backendContext)
                : undefined,
            appContext: isSet(object.appContext)
                ? AppContext.fromJSON(object.appContext)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.propertySetId !== undefined &&
            (obj.propertySetId = message.propertySetId);
        if (message.propertyDefinitions) {
            obj.propertyDefinitions = message.propertyDefinitions.map(e => e ? PropertyDefinition.toJSON(e) : undefined);
        }
        else {
            obj.propertyDefinitions = [];
        }
        message.backendContext !== undefined &&
            (obj.backendContext = message.backendContext
                ? BackendContext.toJSON(message.backendContext)
                : undefined);
        message.appContext !== undefined &&
            (obj.appContext = message.appContext
                ? AppContext.toJSON(message.appContext)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBasePropertySet();
        message.propertySetId = (_a = object.propertySetId) !== null && _a !== void 0 ? _a : '';
        message.propertyDefinitions =
            ((_b = object.propertyDefinitions) === null || _b === void 0 ? void 0 : _b.map(e => PropertyDefinition.fromPartial(e))) ||
                [];
        message.backendContext =
            object.backendContext !== undefined && object.backendContext !== null
                ? BackendContext.fromPartial(object.backendContext)
                : undefined;
        message.appContext =
            object.appContext !== undefined && object.appContext !== null
                ? AppContext.fromPartial(object.appContext)
                : undefined;
        return message;
    },
};
function createBaseAppContext() {
    return {
        staticContext: undefined,
        dynamicContext: undefined,
        surfaceMetadata: undefined,
    };
}
export const AppContext = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.staticContext !== undefined) {
            AppContext_StaticContext.encode(message.staticContext, writer.uint32(10).fork()).ldelim();
        }
        if (message.dynamicContext !== undefined) {
            DynamicContext.encode(message.dynamicContext, writer.uint32(18).fork()).ldelim();
        }
        if (message.surfaceMetadata !== undefined) {
            AppContext_SurfaceMetadata.encode(message.surfaceMetadata, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.staticContext = AppContext_StaticContext.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.dynamicContext = DynamicContext.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.surfaceMetadata = AppContext_SurfaceMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            staticContext: isSet(object.staticContext)
                ? AppContext_StaticContext.fromJSON(object.staticContext)
                : undefined,
            dynamicContext: isSet(object.dynamicContext)
                ? DynamicContext.fromJSON(object.dynamicContext)
                : undefined,
            surfaceMetadata: isSet(object.surfaceMetadata)
                ? AppContext_SurfaceMetadata.fromJSON(object.surfaceMetadata)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.staticContext !== undefined &&
            (obj.staticContext = message.staticContext
                ? AppContext_StaticContext.toJSON(message.staticContext)
                : undefined);
        message.dynamicContext !== undefined &&
            (obj.dynamicContext = message.dynamicContext
                ? DynamicContext.toJSON(message.dynamicContext)
                : undefined);
        message.surfaceMetadata !== undefined &&
            (obj.surfaceMetadata = message.surfaceMetadata
                ? AppContext_SurfaceMetadata.toJSON(message.surfaceMetadata)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseAppContext();
        message.staticContext =
            object.staticContext !== undefined && object.staticContext !== null
                ? AppContext_StaticContext.fromPartial(object.staticContext)
                : undefined;
        message.dynamicContext =
            object.dynamicContext !== undefined && object.dynamicContext !== null
                ? DynamicContext.fromPartial(object.dynamicContext)
                : undefined;
        message.surfaceMetadata =
            object.surfaceMetadata !== undefined && object.surfaceMetadata !== null
                ? AppContext_SurfaceMetadata.fromPartial(object.surfaceMetadata)
                : undefined;
        return message;
    },
};
function createBaseAppContext_StaticContext() {
    return { platform: 0, bundleClientId: '', oauthClientId: '' };
}
export const AppContext_StaticContext = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.platform !== 0) {
            writer.uint32(8).int32(message.platform);
        }
        if (message.bundleClientId !== '') {
            writer.uint32(26).string(message.bundleClientId);
        }
        if (message.oauthClientId !== '') {
            writer.uint32(34).string(message.oauthClientId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppContext_StaticContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.platform = reader.int32();
                    break;
                case 3:
                    message.bundleClientId = reader.string();
                    break;
                case 4:
                    message.oauthClientId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            platform: isSet(object.platform)
                ? appContext_StaticContext_AppPlatformFromJSON(object.platform)
                : 0,
            bundleClientId: isSet(object.bundleClientId)
                ? String(object.bundleClientId)
                : '',
            oauthClientId: isSet(object.oauthClientId)
                ? String(object.oauthClientId)
                : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.platform !== undefined &&
            (obj.platform = appContext_StaticContext_AppPlatformToJSON(message.platform));
        message.bundleClientId !== undefined &&
            (obj.bundleClientId = message.bundleClientId);
        message.oauthClientId !== undefined &&
            (obj.oauthClientId = message.oauthClientId);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseAppContext_StaticContext();
        message.platform = (_a = object.platform) !== null && _a !== void 0 ? _a : 0;
        message.bundleClientId = (_b = object.bundleClientId) !== null && _b !== void 0 ? _b : '';
        message.oauthClientId = (_c = object.oauthClientId) !== null && _c !== void 0 ? _c : '';
        return message;
    },
};
function createBaseAppContext_SurfaceMetadata() {
    return { version: '' };
}
export const AppContext_SurfaceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.version !== '') {
            writer.uint32(10).string(message.version);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseAppContext_SurfaceMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.version = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            version: isSet(object.version) ? String(object.version) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.version !== undefined && (obj.version = message.version);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseAppContext_SurfaceMetadata();
        message.version = (_a = object.version) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseBackendContext() {
    return {
        system: '',
        serviceName: '',
        staticContext: undefined,
        dynamicContext: undefined,
        surfaceMetadata: undefined,
    };
}
export const BackendContext = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.system !== '') {
            writer.uint32(10).string(message.system);
        }
        if (message.serviceName !== '') {
            writer.uint32(18).string(message.serviceName);
        }
        if (message.staticContext !== undefined) {
            BackendContext_StaticContext.encode(message.staticContext, writer.uint32(26).fork()).ldelim();
        }
        if (message.dynamicContext !== undefined) {
            DynamicContext.encode(message.dynamicContext, writer.uint32(34).fork()).ldelim();
        }
        if (message.surfaceMetadata !== undefined) {
            BackendContext_SurfaceMetadata.encode(message.surfaceMetadata, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBackendContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.system = reader.string();
                    break;
                case 2:
                    message.serviceName = reader.string();
                    break;
                case 3:
                    message.staticContext = BackendContext_StaticContext.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.dynamicContext = DynamicContext.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.surfaceMetadata = BackendContext_SurfaceMetadata.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            system: isSet(object.system) ? String(object.system) : '',
            serviceName: isSet(object.serviceName) ? String(object.serviceName) : '',
            staticContext: isSet(object.staticContext)
                ? BackendContext_StaticContext.fromJSON(object.staticContext)
                : undefined,
            dynamicContext: isSet(object.dynamicContext)
                ? DynamicContext.fromJSON(object.dynamicContext)
                : undefined,
            surfaceMetadata: isSet(object.surfaceMetadata)
                ? BackendContext_SurfaceMetadata.fromJSON(object.surfaceMetadata)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.system !== undefined && (obj.system = message.system);
        message.serviceName !== undefined &&
            (obj.serviceName = message.serviceName);
        message.staticContext !== undefined &&
            (obj.staticContext = message.staticContext
                ? BackendContext_StaticContext.toJSON(message.staticContext)
                : undefined);
        message.dynamicContext !== undefined &&
            (obj.dynamicContext = message.dynamicContext
                ? DynamicContext.toJSON(message.dynamicContext)
                : undefined);
        message.surfaceMetadata !== undefined &&
            (obj.surfaceMetadata = message.surfaceMetadata
                ? BackendContext_SurfaceMetadata.toJSON(message.surfaceMetadata)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBackendContext();
        message.system = (_a = object.system) !== null && _a !== void 0 ? _a : '';
        message.serviceName = (_b = object.serviceName) !== null && _b !== void 0 ? _b : '';
        message.staticContext =
            object.staticContext !== undefined && object.staticContext !== null
                ? BackendContext_StaticContext.fromPartial(object.staticContext)
                : undefined;
        message.dynamicContext =
            object.dynamicContext !== undefined && object.dynamicContext !== null
                ? DynamicContext.fromPartial(object.dynamicContext)
                : undefined;
        message.surfaceMetadata =
            object.surfaceMetadata !== undefined && object.surfaceMetadata !== null
                ? BackendContext_SurfaceMetadata.fromPartial(object.surfaceMetadata)
                : undefined;
        return message;
    },
};
function createBaseBackendContext_StaticContext() {
    return { system: '', serviceName: '' };
}
export const BackendContext_StaticContext = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.system !== '') {
            writer.uint32(10).string(message.system);
        }
        if (message.serviceName !== '') {
            writer.uint32(18).string(message.serviceName);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBackendContext_StaticContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.system = reader.string();
                    break;
                case 2:
                    message.serviceName = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            system: isSet(object.system) ? String(object.system) : '',
            serviceName: isSet(object.serviceName) ? String(object.serviceName) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.system !== undefined && (obj.system = message.system);
        message.serviceName !== undefined &&
            (obj.serviceName = message.serviceName);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseBackendContext_StaticContext();
        message.system = (_a = object.system) !== null && _a !== void 0 ? _a : '';
        message.serviceName = (_b = object.serviceName) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
function createBaseBackendContext_SurfaceMetadata() {
    return { backendSdkVersion: '' };
}
export const BackendContext_SurfaceMetadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.backendSdkVersion !== '') {
            writer.uint32(10).string(message.backendSdkVersion);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseBackendContext_SurfaceMetadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.backendSdkVersion = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            backendSdkVersion: isSet(object.backendSdkVersion)
                ? String(object.backendSdkVersion)
                : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.backendSdkVersion !== undefined &&
            (obj.backendSdkVersion = message.backendSdkVersion);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseBackendContext_SurfaceMetadata();
        message.backendSdkVersion = (_a = object.backendSdkVersion) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseDynamicContext() {
    return { contextDefinition: [] };
}
export const DynamicContext = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.contextDefinition) {
            DynamicContext_ContextDefinition.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDynamicContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.contextDefinition.push(DynamicContext_ContextDefinition.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            contextDefinition: Array.isArray(object === null || object === void 0 ? void 0 : object.contextDefinition)
                ? object.contextDefinition.map((e) => DynamicContext_ContextDefinition.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.contextDefinition) {
            obj.contextDefinition = message.contextDefinition.map(e => e ? DynamicContext_ContextDefinition.toJSON(e) : undefined);
        }
        else {
            obj.contextDefinition = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDynamicContext();
        message.contextDefinition =
            ((_a = object.contextDefinition) === null || _a === void 0 ? void 0 : _a.map(e => DynamicContext_ContextDefinition.fromPartial(e))) || [];
        return message;
    },
};
function createBaseDynamicContext_ContextDefinition() {
    return { knownContext: undefined };
}
export const DynamicContext_ContextDefinition = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.knownContext !== undefined) {
            writer.uint32(8).int32(message.knownContext);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseDynamicContext_ContextDefinition();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.knownContext = reader.int32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        return {
            knownContext: isSet(object.knownContext)
                ? dynamicContext_KnownContextFromJSON(object.knownContext)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.knownContext !== undefined &&
            (obj.knownContext =
                message.knownContext !== undefined
                    ? dynamicContext_KnownContextToJSON(message.knownContext)
                    : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseDynamicContext_ContextDefinition();
        message.knownContext = (_a = object.knownContext) !== null && _a !== void 0 ? _a : undefined;
        return message;
    },
};
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=publish.js.map