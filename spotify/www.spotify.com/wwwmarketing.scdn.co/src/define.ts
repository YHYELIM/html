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
import equal from 'fast-deep-equal';
const properties = new Map();
function defineProperty(spec) {
    const specId = spec.name;
    if (spec.type === 'internal') {
        if (spec.name[0] !== '#')
            throw new TypeError('Internal property names must begin with "#"');
    }
    else {
        if (spec.name[0] === '#')
            throw new TypeError('Property names must not begin with "#"');
    }
    if (properties.has(specId)) {
        if (!equal(properties.get(specId), spec))
            throw new Error(`A different property was already defined for "${spec.name}"`);
    }
    else {
        properties.set(specId, spec);
    }
    return specId;
}
export function* getDefinitions(options = {}) {
    for (const def of properties.values()) {
        if (!options.includeInternal && def.type === 'internal')
            continue;
        yield def;
    }
}
export function getDefinition(ref) {
    const def = properties.get(ref);
    if (!def)
        throw new Error(`Unknown property "${ref}"`);
    return def;
}
export function findPropertyRef(propertyId) {
    for (const [ref, { name }] of properties) {
        if (name === propertyId)
            return ref;
    }
    return undefined;
}
export function defineBool(def) {
    return defineProperty(Object.assign(Object.assign({}, def), { type: 'bool' }));
}
export function defineInt(def) {
    return defineProperty(Object.assign(Object.assign({}, def), { type: 'int' }));
}
export function defineEnum(_a) {
    var { values: enumDef } = _a, def = __rest(_a, ["values"]);
    const values = typeof enumDef === 'string' ? enumDef.split('|') : Object.values(enumDef);
    values.sort();
    return defineProperty(Object.assign(Object.assign({}, def), { values, type: 'enum' }));
}
export function defineInternal(def) {
    return defineProperty(Object.assign(Object.assign({}, def), { type: 'internal' }));
}
//# sourceMappingURL=define.js.map