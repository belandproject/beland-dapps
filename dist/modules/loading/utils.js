"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatus = exports.getType = exports.removeLast = void 0;
function removeLast(actions, comparator) {
    // TODO: accomplish the same in one loop
    const last = actions.filter(comparator).pop();
    return actions.filter(action => action !== last);
}
exports.removeLast = removeLast;
const getType = (action) => action.type.slice(10);
exports.getType = getType;
const getStatus = (action) => action.type.slice(1, 8).toUpperCase();
exports.getStatus = getStatus;
//# sourceMappingURL=utils.js.map