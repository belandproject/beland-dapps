"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEnabled = exports.getLocale = exports.isLoading = exports.getLoading = exports.getData = exports.getState = void 0;
const getState = state => state.translation;
exports.getState = getState;
const getData = state => (0, exports.getState)(state).data;
exports.getData = getData;
const getLoading = state => (0, exports.getState)(state).loading;
exports.getLoading = getLoading;
const isLoading = state => (0, exports.getLoading)(state).length > 0;
exports.isLoading = isLoading;
const getLocale = state => (0, exports.getState)(state).locale;
exports.getLocale = getLocale;
const isEnabled = state => !!(0, exports.getState)(state);
exports.isEnabled = isEnabled;
//# sourceMappingURL=selectors.js.map