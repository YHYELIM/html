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
import { hashJsonValue, createDebugLogger, } from '@spotify-internal/remote-config-common';
const debug = createDebugLogger('properties:types');
export var Property;
(function (Property) {
    function match(matchers) {
        return (_a) => {
            var { type } = _a, rest = __rest(_a, ["type"]);
            return matchers[type](rest);
        };
    }
    Property.match = match;
    function assertValue(prop, value) {
        switch (prop.type) {
            case 'bool':
                if (typeof value !== 'boolean')
                    throw new TypeError('Expected boolean value');
                break;
            case 'enum':
                if (typeof value !== 'string')
                    throw new TypeError('Expected string value');
                if (prop.values.indexOf(value) < 0)
                    throw new TypeError(`Expected value to be ${prop.values.join('|')}`);
                break;
            case 'int':
                if (typeof value !== 'number' || !Number.isInteger(value))
                    throw new TypeError('Expected integer value');
                if (value < prop.lower || value > prop.upper)
                    throw new TypeError(`Expected value in range [${prop.lower},${prop.upper}]`);
                break;
            case 'internal':
                break;
            default:
                throw new TypeError(`Unknown property type "${prop.type}"`);
        }
    }
    Property.assertValue = assertValue;
    function validateValue(prop, value) {
        try {
            assertValue(prop, value);
            return true;
        }
        catch (_e) {
            return false;
        }
    }
    Property.validateValue = validateValue;
    function getPropertySetId(info, props) {
        const propsObj = Array.from(props).reduce((set, _a) => {
            var { name } = _a, rest = __rest(_a, ["name"]);
            return (Object.assign(Object.assign({}, set), { [name]: rest }));
        }, {});
        debug('Property Source', propsObj, info);
        return hashJsonValue([info, propsObj]);
    }
    Property.getPropertySetId = getPropertySetId;
})(Property || (Property = {}));
//# sourceMappingURL=property.js.map