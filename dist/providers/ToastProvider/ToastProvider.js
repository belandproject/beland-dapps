"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Toasts_1 = require("@beland/uikit/dist/components/Toasts/Toasts");
const Toast_1 = require("@beland/uikit/dist/components/Toast/Toast");
class ToastProvider extends react_1.default.PureComponent {
    constructor() {
        super(...arguments);
        this.getCloseHandler = (id) => {
            return () => this.props.onClose(id);
        };
    }
    render() {
        const { children, toasts, position } = this.props;
        const ToastComponents = [];
        for (const id in toasts) {
            const toast = toasts[id];
            if (!toast) {
                throw new Error(`Couldn't find a toast for id "${id}"`);
            }
            ToastComponents.push(react_1.default.createElement(Toast_1.Toast, { key: id, type: toast.type, title: toast.title, body: toast.body, closable: toast.closable, timeout: toast.timeout, onClose: this.getCloseHandler(toast.id) }));
        }
        return (react_1.default.createElement(react_1.default.Fragment, null,
            children,
            react_1.default.createElement(Toasts_1.Toasts, { position: position }, ToastComponents)));
    }
}
exports.default = ToastProvider;
ToastProvider.defaultProps = {
    children: null
};
//# sourceMappingURL=ToastProvider.js.map