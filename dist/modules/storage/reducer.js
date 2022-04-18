"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageReducer = exports.storageReducerWrapper = exports.INITIAL_STATE = void 0;
const storage = __importStar(require("redux-persistence"));
const actions_1 = require("./actions");
exports.INITIAL_STATE = {
    version: 1,
    loading: true
};
function storageReducerWrapper(reducer, merger) {
    return storage.reducer(reducer, merger);
}
exports.storageReducerWrapper = storageReducerWrapper;
function storageReducer(state = exports.INITIAL_STATE, action) {
    switch (action.type) {
        case actions_1.STORAGE_LOAD:
            return Object.assign(Object.assign({}, state), { loading: false });
        default:
            return state;
    }
}
exports.storageReducer = storageReducer;
//# sourceMappingURL=reducer.js.map