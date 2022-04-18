"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modalReducer = void 0;
const actions_1 = require("./actions");
const INITIAL_STATE = {};
function modalReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions_1.OPEN_MODAL: {
            const { name, metadata } = action.payload;
            return Object.assign(Object.assign({}, state), { [name]: {
                    open: true,
                    name,
                    metadata
                } });
        }
        case actions_1.CLOSE_MODAL: {
            const { name } = action.payload;
            if (state[name]) {
                return Object.assign(Object.assign({}, state), { [name]: Object.assign(Object.assign({}, state[name]), { open: false }) });
            }
            else {
                // Invalid modal name
                return state;
            }
        }
        case actions_1.TOGGLE_MODAL: {
            const { name } = action.payload;
            const modal = state[name] || { open: false };
            return Object.assign(Object.assign({}, state), { [name]: Object.assign(Object.assign({}, modal), { open: !modal.open }) });
        }
        case actions_1.CLOSE_ALL_MODALS: {
            const newState = {};
            for (const name in state) {
                newState[name] = Object.assign(Object.assign({}, state[name]), { open: false });
            }
            return newState;
        }
        default:
            return state;
    }
}
exports.modalReducer = modalReducer;
//# sourceMappingURL=reducer.js.map