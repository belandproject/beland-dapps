"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
// import { RootDispatch } from '../../types'
const selectors_1 = require("../../modules/toast/selectors");
const actions_1 = require("../../modules/toast/actions");
const ToastProvider_1 = __importDefault(require("./ToastProvider"));
const mapState = (state) => ({
    toasts: selectors_1.getToasts(state)
});
const mapDispatch = (dispatch) => ({
    onClose: (id) => dispatch(actions_1.hideToast(id))
});
exports.default = react_redux_1.connect(mapState, mapDispatch)(ToastProvider_1.default);
//# sourceMappingURL=ToastProvider.container.js.map