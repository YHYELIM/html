import Long from 'long';
import _m0 from 'protobufjs/minimal';
import { PropertyDefinition_Identifier, BackendContext, dynamicContext_KnownContextFromJSON, dynamicContext_KnownContextToJSON, } from '../../../../../spotify/rcs/admin/grpc/v0/publish';
export const protobufPackage = 'spotify.rcs.resolver.grpc.v0';
export var Fetch_Type;
(function (Fetch_Type) {
    Fetch_Type[Fetch_Type["BLOCKING"] = 0] = "BLOCKING";
    Fetch_Type[Fetch_Type["BACKGROUND_SYNC"] = 1] = "BACKGROUND_SYNC";
    Fetch_Type[Fetch_Type["DELAYED"] = 2] = "DELAYED";
    Fetch_Type[Fetch_Type["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Fetch_Type || (Fetch_Type = {}));
export function fetch_TypeFromJSON(object) {
    switch (object) {
        case 0:
        case 'BLOCKING':
            return Fetch_Type.BLOCKING;
        case 1:
        case 'BACKGROUND_SYNC':
            return Fetch_Type.BACKGROUND_SYNC;
        case 2:
        case 'DELAYED':
            return Fetch_Type.DELAYED;
        case -1:
        case 'UNRECOGNIZED':
        default:
            return Fetch_Type.UNRECOGNIZED;
    }
}
export function fetch_TypeToJSON(object) {
    switch (object) {
        case Fetch_Type.BLOCKING:
            return 'BLOCKING';
        case Fetch_Type.BACKGROUND_SYNC:
            return 'BACKGROUND_SYNC';
        case Fetch_Type.DELAYED:
            return 'DELAYED';
        default:
            return 'UNKNOWN';
    }
}
function createBaseResolveRequest() {
    return {
        propertySetId: '',
        fetchType: undefined,
        context: undefined,
        backendContext: undefined,
    };
}
export const ResolveRequest = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.propertySetId !== '') {
            writer.uint32(10).string(message.propertySetId);
        }
        if (message.fetchType !== undefined) {
            Fetch.encode(message.fetchType, writer.uint32(18).fork()).ldelim();
        }
        if (message.context !== undefined) {
            Context.encode(message.context, writer.uint32(90).fork()).ldelim();
        }
        if (message.backendContext !== undefined) {
            BackendContext.encode(message.backendContext, writer.uint32(98).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResolveRequest();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.propertySetId = reader.string();
                    break;
                case 2:
                    message.fetchType = Fetch.decode(reader, reader.uint32());
                    break;
                case 11:
                    message.context = Context.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.backendContext = BackendContext.decode(reader, reader.uint32());
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
            fetchType: isSet(object.fetchType)
                ? Fetch.fromJSON(object.fetchType)
                : undefined,
            context: isSet(object.context)
                ? Context.fromJSON(object.context)
                : undefined,
            backendContext: isSet(object.backendContext)
                ? BackendContext.fromJSON(object.backendContext)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.propertySetId !== undefined &&
            (obj.propertySetId = message.propertySetId);
        message.fetchType !== undefined &&
            (obj.fetchType = message.fetchType
                ? Fetch.toJSON(message.fetchType)
                : undefined);
        message.context !== undefined &&
            (obj.context = message.context
                ? Context.toJSON(message.context)
                : undefined);
        message.backendContext !== undefined &&
            (obj.backendContext = message.backendContext
                ? BackendContext.toJSON(message.backendContext)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseResolveRequest();
        message.propertySetId = (_a = object.propertySetId) !== null && _a !== void 0 ? _a : '';
        message.fetchType =
            object.fetchType !== undefined && object.fetchType !== null
                ? Fetch.fromPartial(object.fetchType)
                : undefined;
        message.context =
            object.context !== undefined && object.context !== null
                ? Context.fromPartial(object.context)
                : undefined;
        message.backendContext =
            object.backendContext !== undefined && object.backendContext !== null
                ? BackendContext.fromPartial(object.backendContext)
                : undefined;
        return message;
    },
};
function createBaseResolveResponse() {
    return { configuration: undefined };
}
export const ResolveResponse = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.configuration !== undefined) {
            Configuration.encode(message.configuration, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseResolveResponse();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configuration = Configuration.decode(reader, reader.uint32());
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
            configuration: isSet(object.configuration)
                ? Configuration.fromJSON(object.configuration)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.configuration !== undefined &&
            (obj.configuration = message.configuration
                ? Configuration.toJSON(message.configuration)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseResolveResponse();
        message.configuration =
            object.configuration !== undefined && object.configuration !== null
                ? Configuration.fromPartial(object.configuration)
                : undefined;
        return message;
    },
};
function createBaseConfiguration() {
    return {
        configurationAssignmentId: '',
        fetchTimeMillis: 0,
        assignedValues: [],
    };
}
export const Configuration = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.configurationAssignmentId !== '') {
            writer.uint32(10).string(message.configurationAssignmentId);
        }
        if (message.fetchTimeMillis !== 0) {
            writer.uint32(16).int64(message.fetchTimeMillis);
        }
        for (const v of message.assignedValues) {
            Configuration_AssignedValue.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.configurationAssignmentId = reader.string();
                    break;
                case 2:
                    message.fetchTimeMillis = longToNumber(reader.int64());
                    break;
                case 3:
                    message.assignedValues.push(Configuration_AssignedValue.decode(reader, reader.uint32()));
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
            configurationAssignmentId: isSet(object.configurationAssignmentId)
                ? String(object.configurationAssignmentId)
                : '',
            fetchTimeMillis: isSet(object.fetchTimeMillis)
                ? Number(object.fetchTimeMillis)
                : 0,
            assignedValues: Array.isArray(object === null || object === void 0 ? void 0 : object.assignedValues)
                ? object.assignedValues.map((e) => Configuration_AssignedValue.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.configurationAssignmentId !== undefined &&
            (obj.configurationAssignmentId = message.configurationAssignmentId);
        message.fetchTimeMillis !== undefined &&
            (obj.fetchTimeMillis = Math.round(message.fetchTimeMillis));
        if (message.assignedValues) {
            obj.assignedValues = message.assignedValues.map(e => e ? Configuration_AssignedValue.toJSON(e) : undefined);
        }
        else {
            obj.assignedValues = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseConfiguration();
        message.configurationAssignmentId = (_a = object.configurationAssignmentId) !== null && _a !== void 0 ? _a : '';
        message.fetchTimeMillis = (_b = object.fetchTimeMillis) !== null && _b !== void 0 ? _b : 0;
        message.assignedValues =
            ((_c = object.assignedValues) === null || _c === void 0 ? void 0 : _c.map(e => Configuration_AssignedValue.fromPartial(e))) || [];
        return message;
    },
};
function createBaseConfiguration_AssignedValue() {
    return {
        propertyId: undefined,
        metadata: undefined,
        boolValue: undefined,
        intValue: undefined,
        enumValue: undefined,
    };
}
export const Configuration_AssignedValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.propertyId !== undefined) {
            PropertyDefinition_Identifier.encode(message.propertyId, writer.uint32(10).fork()).ldelim();
        }
        if (message.metadata !== undefined) {
            Configuration_AssignedValue_Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
        }
        if (message.boolValue !== undefined) {
            Configuration_AssignedValue_BoolValue.encode(message.boolValue, writer.uint32(26).fork()).ldelim();
        }
        if (message.intValue !== undefined) {
            Configuration_AssignedValue_IntValue.encode(message.intValue, writer.uint32(34).fork()).ldelim();
        }
        if (message.enumValue !== undefined) {
            Configuration_AssignedValue_EnumValue.encode(message.enumValue, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_AssignedValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.propertyId = PropertyDefinition_Identifier.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.metadata = Configuration_AssignedValue_Metadata.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.boolValue = Configuration_AssignedValue_BoolValue.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.intValue = Configuration_AssignedValue_IntValue.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.enumValue = Configuration_AssignedValue_EnumValue.decode(reader, reader.uint32());
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
            propertyId: isSet(object.propertyId)
                ? PropertyDefinition_Identifier.fromJSON(object.propertyId)
                : undefined,
            metadata: isSet(object.metadata)
                ? Configuration_AssignedValue_Metadata.fromJSON(object.metadata)
                : undefined,
            boolValue: isSet(object.boolValue)
                ? Configuration_AssignedValue_BoolValue.fromJSON(object.boolValue)
                : undefined,
            intValue: isSet(object.intValue)
                ? Configuration_AssignedValue_IntValue.fromJSON(object.intValue)
                : undefined,
            enumValue: isSet(object.enumValue)
                ? Configuration_AssignedValue_EnumValue.fromJSON(object.enumValue)
                : undefined,
        };
    },
    toJSON(message) {
        const obj = {};
        message.propertyId !== undefined &&
            (obj.propertyId = message.propertyId
                ? PropertyDefinition_Identifier.toJSON(message.propertyId)
                : undefined);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? Configuration_AssignedValue_Metadata.toJSON(message.metadata)
                : undefined);
        message.boolValue !== undefined &&
            (obj.boolValue = message.boolValue
                ? Configuration_AssignedValue_BoolValue.toJSON(message.boolValue)
                : undefined);
        message.intValue !== undefined &&
            (obj.intValue = message.intValue
                ? Configuration_AssignedValue_IntValue.toJSON(message.intValue)
                : undefined);
        message.enumValue !== undefined &&
            (obj.enumValue = message.enumValue
                ? Configuration_AssignedValue_EnumValue.toJSON(message.enumValue)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = createBaseConfiguration_AssignedValue();
        message.propertyId =
            object.propertyId !== undefined && object.propertyId !== null
                ? PropertyDefinition_Identifier.fromPartial(object.propertyId)
                : undefined;
        message.metadata =
            object.metadata !== undefined && object.metadata !== null
                ? Configuration_AssignedValue_Metadata.fromPartial(object.metadata)
                : undefined;
        message.boolValue =
            object.boolValue !== undefined && object.boolValue !== null
                ? Configuration_AssignedValue_BoolValue.fromPartial(object.boolValue)
                : undefined;
        message.intValue =
            object.intValue !== undefined && object.intValue !== null
                ? Configuration_AssignedValue_IntValue.fromPartial(object.intValue)
                : undefined;
        message.enumValue =
            object.enumValue !== undefined && object.enumValue !== null
                ? Configuration_AssignedValue_EnumValue.fromPartial(object.enumValue)
                : undefined;
        return message;
    },
};
function createBaseConfiguration_AssignedValue_Metadata() {
    return { policyId: 0, externalRealm: '', externalRealmId: 0 };
}
export const Configuration_AssignedValue_Metadata = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.policyId !== 0) {
            writer.uint32(8).int64(message.policyId);
        }
        if (message.externalRealm !== '') {
            writer.uint32(18).string(message.externalRealm);
        }
        if (message.externalRealmId !== 0) {
            writer.uint32(24).int64(message.externalRealmId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_AssignedValue_Metadata();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.policyId = longToNumber(reader.int64());
                    break;
                case 2:
                    message.externalRealm = reader.string();
                    break;
                case 3:
                    message.externalRealmId = longToNumber(reader.int64());
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
            policyId: isSet(object.policyId) ? Number(object.policyId) : 0,
            externalRealm: isSet(object.externalRealm)
                ? String(object.externalRealm)
                : '',
            externalRealmId: isSet(object.externalRealmId)
                ? Number(object.externalRealmId)
                : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.policyId !== undefined &&
            (obj.policyId = Math.round(message.policyId));
        message.externalRealm !== undefined &&
            (obj.externalRealm = message.externalRealm);
        message.externalRealmId !== undefined &&
            (obj.externalRealmId = Math.round(message.externalRealmId));
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = createBaseConfiguration_AssignedValue_Metadata();
        message.policyId = (_a = object.policyId) !== null && _a !== void 0 ? _a : 0;
        message.externalRealm = (_b = object.externalRealm) !== null && _b !== void 0 ? _b : '';
        message.externalRealmId = (_c = object.externalRealmId) !== null && _c !== void 0 ? _c : 0;
        return message;
    },
};
function createBaseConfiguration_AssignedValue_BoolValue() {
    return { value: false };
}
export const Configuration_AssignedValue_BoolValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value === true) {
            writer.uint32(8).bool(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_AssignedValue_BoolValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.bool();
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
            value: isSet(object.value) ? Boolean(object.value) : false,
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseConfiguration_AssignedValue_BoolValue();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
function createBaseConfiguration_AssignedValue_IntValue() {
    return { value: 0 };
}
export const Configuration_AssignedValue_IntValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== 0) {
            writer.uint32(8).int32(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_AssignedValue_IntValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.int32();
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
            value: isSet(object.value) ? Number(object.value) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = Math.round(message.value));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseConfiguration_AssignedValue_IntValue();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseConfiguration_AssignedValue_EnumValue() {
    return { value: '' };
}
export const Configuration_AssignedValue_EnumValue = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.value !== '') {
            writer.uint32(10).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseConfiguration_AssignedValue_EnumValue();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.value = reader.string();
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
            value: isSet(object.value) ? String(object.value) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseConfiguration_AssignedValue_EnumValue();
        message.value = (_a = object.value) !== null && _a !== void 0 ? _a : '';
        return message;
    },
};
function createBaseFetch() {
    return { type: 0 };
}
export const Fetch = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseFetch();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.type = reader.int32();
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
            type: isSet(object.type) ? fetch_TypeFromJSON(object.type) : 0,
        };
    },
    toJSON(message) {
        const obj = {};
        message.type !== undefined && (obj.type = fetch_TypeToJSON(message.type));
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseFetch();
        message.type = (_a = object.type) !== null && _a !== void 0 ? _a : 0;
        return message;
    },
};
function createBaseContext() {
    return { context: [] };
}
export const Context = {
    encode(message, writer = _m0.Writer.create()) {
        for (const v of message.context) {
            Context_ContextEntry.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContext();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.context.push(Context_ContextEntry.decode(reader, reader.uint32()));
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
            context: Array.isArray(object === null || object === void 0 ? void 0 : object.context)
                ? object.context.map((e) => Context_ContextEntry.fromJSON(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        if (message.context) {
            obj.context = message.context.map(e => e ? Context_ContextEntry.toJSON(e) : undefined);
        }
        else {
            obj.context = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = createBaseContext();
        message.context =
            ((_a = object.context) === null || _a === void 0 ? void 0 : _a.map(e => Context_ContextEntry.fromPartial(e))) || [];
        return message;
    },
};
function createBaseContext_ContextEntry() {
    return { knownContext: undefined, value: '' };
}
export const Context_ContextEntry = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.knownContext !== undefined) {
            writer.uint32(8).int32(message.knownContext);
        }
        if (message.value !== '') {
            writer.uint32(82).string(message.value);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseContext_ContextEntry();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.knownContext = reader.int32();
                    break;
                case 10:
                    message.value = reader.string();
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
            value: isSet(object.value) ? String(object.value) : '',
        };
    },
    toJSON(message) {
        const obj = {};
        message.knownContext !== undefined &&
            (obj.knownContext =
                message.knownContext !== undefined
                    ? dynamicContext_KnownContextToJSON(message.knownContext)
                    : undefined);
        message.value !== undefined && (obj.value = message.value);
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = createBaseContext_ContextEntry();
        message.knownContext = (_a = object.knownContext) !== null && _a !== void 0 ? _a : undefined;
        message.value = (_b = object.value) !== null && _b !== void 0 ? _b : '';
        return message;
    },
};
var globalThis = (() => {
    if (typeof globalThis !== 'undefined')
        return globalThis;
    if (typeof self !== 'undefined')
        return self;
    if (typeof window !== 'undefined')
        return window;
    if (typeof global !== 'undefined')
        return global;
    throw 'Unable to locate global object';
})();
function longToNumber(long) {
    if (long.gt(Number.MAX_SAFE_INTEGER)) {
        throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
    }
    return long.toNumber();
}
if (_m0.util.Long !== Long) {
    _m0.util.Long = Long;
    _m0.configure();
}
function isSet(value) {
    return value !== null && value !== undefined;
}
//# sourceMappingURL=resolver.js.map