"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateStorage = exports.getDefaultState = exports.getLocalStorage = exports.hasLocalStorage = void 0;
function hasLocalStorage() {
    try {
        // https://gist.github.com/paulirish/5558557
        const localStorage = window.localStorage;
        const val = 'val';
        localStorage.setItem(val, val);
        localStorage.removeItem(val);
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.hasLocalStorage = hasLocalStorage;
function getLocalStorage() {
    return hasLocalStorage()
        ? window.localStorage
        : {
            getItem: () => null,
            setItem: () => null,
            removeItem: () => null
        };
}
exports.getLocalStorage = getLocalStorage;
function getDefaultState(migrations) {
    const keys = Object.keys(migrations);
    const version = keys.length === 0
        ? 1
        : Object.keys(migrations)
            .map(Number)
            .filter(num => !isNaN(num))
            .sort((a, b) => b - a)[0];
    return { storage: { version } };
}
exports.getDefaultState = getDefaultState;
function migrateStorage(key, migrations) {
    let version = 1;
    const localStorage = getLocalStorage();
    const dataString = localStorage.getItem(key);
    if (dataString) {
        let data = JSON.parse(dataString);
        if (data.storage && data.storage.version) {
            version = parseInt(data.storage.version, 10);
        }
        let nextVersion = version + 1;
        while (migrations[nextVersion]) {
            data = migrations[nextVersion](data);
            if (!data.storage) {
                data.storage = {};
            }
            data.storage.version = nextVersion;
            nextVersion++;
        }
        return data;
    }
    return getDefaultState(migrations);
}
exports.migrateStorage = migrateStorage;
//# sourceMappingURL=localStorage.js.map