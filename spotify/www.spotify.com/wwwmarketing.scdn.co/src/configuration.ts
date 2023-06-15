import { getDefinition, defineInternal, findPropertyRef, } from './define';
const JSON_SCHEMA_VERSION = '1';
defineInternal({
    name: '#v',
    description: 'Schema version of JSON serialized configuration.',
    default: '',
});
export var Configuration;
(function (Configuration) {
    class DefaultConfiguration {
        constructor(entries = []) {
            this.values = new Map(entries);
        }
        getValue(ref) {
            const property = getDefinition(ref);
            return this.values.has(ref)
                ? this.values.get(ref)
                : property.default;
        }
        toJSON(options = {}) {
            const json = {};
            if (!options.omitInternal)
                json['#v'] = JSON_SCHEMA_VERSION;
            for (const [ref, value] of this.values) {
                const property = getDefinition(ref);
                if (options.omitDefaults && value === property.default)
                    continue;
                if (options.omitInternal && property.type === 'internal')
                    continue;
                json[property.name] = value;
            }
            return json;
        }
    }
    function parseEntries(json) {
        if (typeof json === 'string') {
            json = JSON.parse(json);
        }
        if (typeof json !== 'object' || json === null) {
            throw new TypeError('Expected object');
        }
        migrateSchema(json);
        const entries = new Map();
        for (const [key, value] of Object.entries(json)) {
            const ref = findPropertyRef(key);
            if (!ref)
                continue;
            entries.set(ref, value);
        }
        return entries;
    }
    function fromJSON(json) {
        return new DefaultConfiguration(parseEntries(json));
    }
    Configuration.fromJSON = fromJSON;
    function builder(from) {
        return new Builder(from && parseEntries(from.toJSON()));
    }
    Configuration.builder = builder;
    function merge(...configs) {
        const mergedJson = {};
        for (const config of configs) {
            Object.assign(mergedJson, config.toJSON());
        }
        return Configuration.fromJSON(mergedJson);
    }
    Configuration.merge = merge;
    function empty() {
        return new DefaultConfiguration();
    }
    Configuration.empty = empty;
    class Builder extends DefaultConfiguration {
        setValues(other) {
            for (const [ref, value] of other) {
                this.setValue(ref, value);
            }
            return this;
        }
        [Symbol.iterator]() {
            return this.values.entries();
        }
        setValue(ref, value) {
            getDefinition(ref);
            this.values.set(ref, value);
            return this;
        }
        build() {
            return new DefaultConfiguration(this.values);
        }
        static fromJSON(json) {
            return new Builder(parseEntries(json));
        }
    }
    Configuration.Builder = Builder;
    class Delegate {
        constructor(provider) {
            this.provider = provider;
        }
        getValue(ref) {
            return this.provider().getValue(ref);
        }
        toJSON(options) {
            return this.provider().toJSON(options);
        }
    }
    Configuration.Delegate = Delegate;
})(Configuration || (Configuration = {}));
function migrateSchema(json) {
    if (json['#v'] === undefined) {
        json['#v'] = '1';
        if ('configurationAssignmentId' in json) {
            json['#configurationAssignmentId'] = json.configurationAssignmentId;
            delete json.configurationAssignmentId;
        }
        if ('rcsFetchTime' in json) {
            json['#fetchTimeMillis'] = Number(json.rcsFetchTime);
            delete json.rcsFetchTime;
        }
        if (typeof json.properties === 'object') {
            const groupIds = {};
            json['#groupIds'] = groupIds;
            for (const [name, { value, groupId }] of Object.entries(json.properties)) {
                json[name] = value;
                if (groupId) {
                    groupIds[name] = Number(groupId);
                }
            }
            delete json.properties;
        }
        delete json.clientFetchTime;
    }
    delete json['#v'];
}
//# sourceMappingURL=configuration.js.map