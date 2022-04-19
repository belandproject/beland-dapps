"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoading = exports.getState = void 0;
const getState = state => state.storage;
exports.getState = getState;
const isLoading = state => exports.getState(state).loading;
exports.isLoading = isLoading;
//# sourceMappingURL=selectors.js.map