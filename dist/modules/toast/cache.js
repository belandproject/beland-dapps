"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAll = exports.remove = exports.get = exports.set = void 0;
const cache = {};
function set(id, toast) {
    cache[id] = Object.assign(Object.assign({}, toast), { id });
}
exports.set = set;
function get(id) {
    if (!(id in cache)) {
        throw new Error(`Invalid toast id ${id}. Did you close it already?`);
    }
    return cache[id];
}
exports.get = get;
function remove(id) {
    return delete cache[id];
}
exports.remove = remove;
function getAll() {
    return Object.values(cache);
}
exports.getAll = getAll;
//# sourceMappingURL=cache.js.map