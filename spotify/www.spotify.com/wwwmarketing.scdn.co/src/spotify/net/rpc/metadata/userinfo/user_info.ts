import Long from 'long';
import _m0 from 'protobufjs/minimal';
export const protobufPackage = 'spotify.net.rpc.metadata.userinfo';
function createBaseUserInfo() {
    return {
        username: '',
        isEmployee: false,
        homeSite: '',
        country: '',
        appId: '',
        connectionId: 0,
        clientVersion: '',
        clientProduct: 0,
        clientPlatform: 0,
        clientIpAddr: new Uint8Array(),
        catalogueStr: '',
        userId: '',
        clientId: '',
        hasClientProduct: false,
        hasClientPlatform: false,
        permissions: [],
    };
}
export const UserInfo = {
    encode(message, writer = _m0.Writer.create()) {
        if (message.username !== '') {
            writer.uint32(10).string(message.username);
        }
        if (message.isEmployee === true) {
            writer.uint32(16).bool(message.isEmployee);
        }
        if (message.homeSite !== '') {
            writer.uint32(26).string(message.homeSite);
        }
        if (message.country !== '') {
            writer.uint32(34).string(message.country);
        }
        if (message.appId !== '') {
            writer.uint32(58).string(message.appId);
        }
        if (message.connectionId !== 0) {
            writer.uint32(64).uint64(message.connectionId);
        }
        if (message.clientVersion !== '') {
            writer.uint32(74).string(message.clientVersion);
        }
        if (message.clientProduct !== 0) {
            writer.uint32(80).int32(message.clientProduct);
        }
        if (message.clientPlatform !== 0) {
            writer.uint32(88).int32(message.clientPlatform);
        }
        if (message.clientIpAddr.length !== 0) {
            writer.uint32(98).bytes(message.clientIpAddr);
        }
        if (message.catalogueStr !== '') {
            writer.uint32(106).string(message.catalogueStr);
        }
        if (message.userId !== '') {
            writer.uint32(114).string(message.userId);
        }
        if (message.clientId !== '') {
            writer.uint32(122).string(message.clientId);
        }
        if (message.hasClientProduct === true) {
            writer.uint32(128).bool(message.hasClientProduct);
        }
        if (message.hasClientPlatform === true) {
            writer.uint32(136).bool(message.hasClientPlatform);
        }
        writer.uint32(146).fork();
        for (const v of message.permissions) {
            writer.uint32(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = createBaseUserInfo();
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.username = reader.string();
                    break;
                case 2:
                    message.isEmployee = reader.bool();
                    break;
                case 3:
                    message.homeSite = reader.string();
                    break;
                case 4:
                    message.country = reader.string();
                    break;
                case 7:
                    message.appId = reader.string();
                    break;
                case 8:
                    message.connectionId = longToNumber(reader.uint64());
                    break;
                case 9:
                    message.clientVersion = reader.string();
                    break;
                case 10:
                    message.clientProduct = reader.int32();
                    break;
                case 11:
                    message.clientPlatform = reader.int32();
                    break;
                case 12:
                    message.clientIpAddr = reader.bytes();
                    break;
                case 13:
                    message.catalogueStr = reader.string();
                    break;
                case 14:
                    message.userId = reader.string();
                    break;
                case 15:
                    message.clientId = reader.string();
                    break;
                case 16:
                    message.hasClientProduct = reader.bool();
                    break;
                case 17:
                    message.hasClientPlatform = reader.bool();
                    break;
                case 18:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.permissions.push(reader.uint32());
                        }
                    }
                    else {
                        message.permissions.push(reader.uint32());
                    }
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
            username: isSet(object.username) ? String(object.username) : '',
            isEmployee: isSet(object.isEmployee) ? Boolean(object.isEmployee) : false,
            homeSite: isSet(object.homeSite) ? String(object.homeSite) : '',
            country: isSet(object.country) ? String(object.country) : '',
            appId: isSet(object.appId) ? String(object.appId) : '',
            connectionId: isSet(object.connectionId)
                ? Number(object.connectionId)
                : 0,
            clientVersion: isSet(object.clientVersion)
                ? String(object.clientVersion)
                : '',
            clientProduct: isSet(object.clientProduct)
                ? Number(object.clientProduct)
                : 0,
            clientPlatform: isSet(object.clientPlatform)
                ? Number(object.clientPlatform)
                : 0,
            clientIpAddr: isSet(object.clientIpAddr)
                ? bytesFromBase64(object.clientIpAddr)
                : new Uint8Array(),
            catalogueStr: isSet(object.catalogueStr)
                ? String(object.catalogueStr)
                : '',
            userId: isSet(object.userId) ? String(object.userId) : '',
            clientId: isSet(object.clientId) ? String(object.clientId) : '',
            hasClientProduct: isSet(object.hasClientProduct)
                ? Boolean(object.hasClientProduct)
                : false,
            hasClientPlatform: isSet(object.hasClientPlatform)
                ? Boolean(object.hasClientPlatform)
                : false,
            permissions: Array.isArray(object === null || object === void 0 ? void 0 : object.permissions)
                ? object.permissions.map((e) => Number(e))
                : [],
        };
    },
    toJSON(message) {
        const obj = {};
        message.username !== undefined && (obj.username = message.username);
        message.isEmployee !== undefined && (obj.isEmployee = message.isEmployee);
        message.homeSite !== undefined && (obj.homeSite = message.homeSite);
        message.country !== undefined && (obj.country = message.country);
        message.appId !== undefined && (obj.appId = message.appId);
        message.connectionId !== undefined &&
            (obj.connectionId = Math.round(message.connectionId));
        message.clientVersion !== undefined &&
            (obj.clientVersion = message.clientVersion);
        message.clientProduct !== undefined &&
            (obj.clientProduct = Math.round(message.clientProduct));
        message.clientPlatform !== undefined &&
            (obj.clientPlatform = Math.round(message.clientPlatform));
        message.clientIpAddr !== undefined &&
            (obj.clientIpAddr = base64FromBytes(message.clientIpAddr !== undefined
                ? message.clientIpAddr
                : new Uint8Array()));
        message.catalogueStr !== undefined &&
            (obj.catalogueStr = message.catalogueStr);
        message.userId !== undefined && (obj.userId = message.userId);
        message.clientId !== undefined && (obj.clientId = message.clientId);
        message.hasClientProduct !== undefined &&
            (obj.hasClientProduct = message.hasClientProduct);
        message.hasClientPlatform !== undefined &&
            (obj.hasClientPlatform = message.hasClientPlatform);
        if (message.permissions) {
            obj.permissions = message.permissions.map(e => Math.round(e));
        }
        else {
            obj.permissions = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
        const message = createBaseUserInfo();
        message.username = (_a = object.username) !== null && _a !== void 0 ? _a : '';
        message.isEmployee = (_b = object.isEmployee) !== null && _b !== void 0 ? _b : false;
        message.homeSite = (_c = object.homeSite) !== null && _c !== void 0 ? _c : '';
        message.country = (_d = object.country) !== null && _d !== void 0 ? _d : '';
        message.appId = (_e = object.appId) !== null && _e !== void 0 ? _e : '';
        message.connectionId = (_f = object.connectionId) !== null && _f !== void 0 ? _f : 0;
        message.clientVersion = (_g = object.clientVersion) !== null && _g !== void 0 ? _g : '';
        message.clientProduct = (_h = object.clientProduct) !== null && _h !== void 0 ? _h : 0;
        message.clientPlatform = (_j = object.clientPlatform) !== null && _j !== void 0 ? _j : 0;
        message.clientIpAddr = (_k = object.clientIpAddr) !== null && _k !== void 0 ? _k : new Uint8Array();
        message.catalogueStr = (_l = object.catalogueStr) !== null && _l !== void 0 ? _l : '';
        message.userId = (_m = object.userId) !== null && _m !== void 0 ? _m : '';
        message.clientId = (_o = object.clientId) !== null && _o !== void 0 ? _o : '';
        message.hasClientProduct = (_p = object.hasClientProduct) !== null && _p !== void 0 ? _p : false;
        message.hasClientPlatform = (_q = object.hasClientPlatform) !== null && _q !== void 0 ? _q : false;
        message.permissions = ((_r = object.permissions) === null || _r === void 0 ? void 0 : _r.map(e => e)) || [];
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
const atob = globalThis.atob ||
    (b64 => globalThis.Buffer.from(b64, 'base64').toString('binary'));
function bytesFromBase64(b64) {
    const bin = atob(b64);
    const arr = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; ++i) {
        arr[i] = bin.charCodeAt(i);
    }
    return arr;
}
const btoa = globalThis.btoa ||
    (bin => globalThis.Buffer.from(bin, 'binary').toString('base64'));
function base64FromBytes(arr) {
    const bin = [];
    for (const byte of arr) {
        bin.push(String.fromCharCode(byte));
    }
    return btoa(bin.join(''));
}
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
//# sourceMappingURL=user_info.js.map