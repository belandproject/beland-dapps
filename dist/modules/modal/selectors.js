"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOpenModals = exports.getState = void 0;
const getState = state => state.modal;
exports.getState = getState;
const getOpenModals = state => {
    const openModals = {};
    const modals = exports.getState(state);
    for (const name in modals) {
        const modal = modals[name];
        if (modal.open) {
            openModals[name] = modal;
        }
    }
    return openModals;
};
exports.getOpenModals = getOpenModals;
//# sourceMappingURL=selectors.js.map