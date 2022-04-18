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
const React = __importStar(require("react"));
class ModalProvider extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.getCloseHandler = (name) => {
            return () => this.props.onClose(name);
        };
    }
    render() {
        const { children, components, modals } = this.props;
        const ModalComponents = [];
        for (const name in modals) {
            const modal = modals[name];
            if (!modal.open) {
                continue;
            }
            const Component = components[name];
            if (!Component) {
                throw new Error(`Couldn't find a modal Component named "${name}"`);
            }
            const onClose = this.getCloseHandler(modal.name);
            ModalComponents.push(React.createElement(Component, { key: name, name: name, metadata: modal.metadata, onClose: onClose }));
        }
        return (React.createElement(React.Fragment, null,
            children,
            ModalComponents));
    }
}
exports.default = ModalProvider;
ModalProvider.defaultProps = {
    children: null
};
//# sourceMappingURL=ModalProvider.js.map