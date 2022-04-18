"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideAllToasts = exports.HIDE_ALL_TOASTS = exports.hideToast = exports.HIDE_TOAST = exports.renderToast = exports.RENDER_TOAST = exports.showToast = exports.SHOW_TOAST = void 0;
const typesafe_actions_1 = require("typesafe-actions");
// Show Toast
exports.SHOW_TOAST = 'Show toast';
const showToast = (toast) => typesafe_actions_1.action(exports.SHOW_TOAST, { toast });
exports.showToast = showToast;
// Render Toast
exports.RENDER_TOAST = 'Render toast';
const renderToast = (id) => typesafe_actions_1.action(exports.RENDER_TOAST, { id });
exports.renderToast = renderToast;
// Hide Toast
exports.HIDE_TOAST = 'Hide toast';
const hideToast = (id) => typesafe_actions_1.action(exports.HIDE_TOAST, { id });
exports.hideToast = hideToast;
// Hide All Toasts
exports.HIDE_ALL_TOASTS = 'Hide all toasts';
const hideAllToasts = () => typesafe_actions_1.action(exports.HIDE_ALL_TOASTS);
exports.hideAllToasts = hideAllToasts;
//# sourceMappingURL=actions.js.map