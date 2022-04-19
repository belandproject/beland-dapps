"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const selectors_1 = require("../../modules/modal/selectors");
const actions_1 = require("../../modules/modal/actions");
const ModalProvider_1 = __importDefault(require("./ModalProvider"));
const mapState = (state) => ({
    modals: selectors_1.getState(state)
});
const mapDispatch = (dispatch) => ({
    onClose: (name) => dispatch(actions_1.closeModal(name))
});
exports.default = react_redux_1.connect(mapState, mapDispatch)(ModalProvider_1.default);
//# sourceMappingURL=ModalProvider.container.js.map