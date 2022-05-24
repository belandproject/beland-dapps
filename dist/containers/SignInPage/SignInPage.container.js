"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const selectors_1 = require("../../modules/translation/selectors");
const selectors_2 = require("../../modules/wallet/selectors");
const actions_1 = require("../../modules/wallet/actions");
const SignInPage_1 = __importDefault(require("./SignInPage"));
const mapState = (state) => ({
    isConnecting: (0, selectors_2.isConnecting)(state),
    isConnected: (0, selectors_2.isConnected)(state),
    hasError: !!(0, selectors_2.getError)(state),
    hasTranslations: (0, selectors_1.isEnabled)(state)
});
const mapDispatch = (dispatch) => ({
    onConnect: providerType => dispatch((0, actions_1.enableWalletRequest)(providerType))
});
const mergeProps = (stateProps, dispatchProps, ownProps) => (Object.assign(Object.assign(Object.assign({}, stateProps), dispatchProps), ownProps));
exports.default = (0, react_redux_1.connect)(mapState, mapDispatch, mergeProps)(SignInPage_1.default);
//# sourceMappingURL=SignInPage.container.js.map