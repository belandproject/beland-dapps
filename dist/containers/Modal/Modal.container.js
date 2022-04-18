"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Modal_1 = __importDefault(require("./Modal"));
const actions_1 = require("../../modules/modal/actions");
const mapState = (_) => ({});
const mapDispatch = (dispatch) => ({
    onCloseModal: (name) => dispatch(actions_1.closeModal(name))
});
const mergeProps = (stateProps, dispatchProps, ownProps) => (Object.assign(Object.assign(Object.assign({}, stateProps), dispatchProps), ownProps));
exports.default = react_redux_1.connect(mapState, mapDispatch, mergeProps)(Modal_1.default);
//# sourceMappingURL=Modal.container.js.map