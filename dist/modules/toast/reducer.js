"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toastReducer = void 0;
const actions_1 = require("./actions");
const INITIAL_STATE = [];
function toastReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions_1.RENDER_TOAST: {
            const { id } = action.payload;
            return [...state, id];
        }
        case actions_1.HIDE_TOAST: {
            const { id } = action.payload;
            return state.filter(stateId => stateId !== id);
        }
        case actions_1.HIDE_ALL_TOASTS: {
            return [];
        }
        default:
            return state;
    }
}
exports.toastReducer = toastReducer;
//# sourceMappingURL=reducer.js.map