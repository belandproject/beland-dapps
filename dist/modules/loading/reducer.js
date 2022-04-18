"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadingReducer = exports.INITIAL_STATE = void 0;
const utils_1 = require("./utils");
exports.INITIAL_STATE = [];
function loadingReducer(state = exports.INITIAL_STATE, action) {
    const type = (0, utils_1.getType)(action); // ie. "Fetch Address Parcels"
    const status = (0, utils_1.getStatus)(action); // REQUEST, SUCCESS, FAILURE
    switch (status) {
        case 'REQUEST': {
            return [...state, action];
        }
        case 'FAILURE':
        case 'SUCCESS': {
            return (0, utils_1.removeLast)(state, actionItem => (0, utils_1.getType)(actionItem) === type);
        }
        default:
            return state;
    }
}
exports.loadingReducer = loadingReducer;
//# sourceMappingURL=reducer.js.map