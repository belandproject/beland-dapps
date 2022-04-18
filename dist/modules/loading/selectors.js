"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLoadingType = exports.isLoading = void 0;
const isLoading = state => state.length > 0;
exports.isLoading = isLoading;
const isLoadingType = (state, type) => state.some((action) => action.type === type);
exports.isLoadingType = isLoadingType;
//# sourceMappingURL=selectors.js.map