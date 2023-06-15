import { h64 } from 'xxhashjs';
export function hashJsonValue(value) {
    let empty = true;
    const hash = h64();
    pushValue(chunk => {
        hash.update(chunk);
        empty = false;
    }, value);
    return !empty ? hash.digest().toString(16) : undefined;
}
function pushValue(sink, value) {
    switch (typeof value) {
        case 'boolean':
            pushBoolean(sink, value);
            break;
        case 'number':
            pushNumber(sink, value);
            break;
        case 'string':
            pushString(sink, value);
            break;
        case 'object':
            if (value === null) {
                pushNull(sink);
                break;
            }
            if (Array.isArray(value)) {
                pushArray(sink, value);
                break;
            }
            if (typeof value.toJSON === 'function') {
                pushValue(sink, value.toJSON());
                break;
            }
            pushObject(sink, value);
            break;
        default:
            break;
    }
}
function pushNull(sink) {
    sink('null');
}
function pushNumber(sink, value) {
    sink(`number:${value}`);
}
function pushString(sink, value) {
    sink(`string:${value.length}:${value}`);
}
function pushBoolean(sink, value) {
    sink(`boolean:${value}`);
}
function pushObject(sink, value) {
    const keys = Object.keys(value).filter(key => typeof value[key] !== 'undefined');
    keys.sort();
    sink(`object:${keys.length}:`);
    for (const key of keys) {
        sink(`${key}:`);
        pushValue(sink, value[key]);
    }
}
function pushArray(sink, value) {
    sink(`array:${value.length}:`);
    for (const item of value) {
        if (typeof item === 'undefined') {
            pushNull(sink);
        }
        else {
            pushValue(sink, item);
        }
    }
}
//# sourceMappingURL=hash.js.map