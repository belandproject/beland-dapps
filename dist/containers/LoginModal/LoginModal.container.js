"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const selectors_1 = require("../../modules/wallet/selectors");
const actions_1 = require("../../modules/wallet/actions");
const selectors_2 = require("../../modules/translation/selectors");
const LoginModal_1 = __importDefault(require("./LoginModal"));
const mapState = (state) => ({
    hasError: !!selectors_1.getError(state),
    isLoading: selectors_1.isEnabling(state) || selectors_1.isConnecting(state),
    hasTranslations: selectors_2.isEnabled(state)
});
const mapDispatch = (dispatch) => ({
    onConnect: providerType => dispatch(actions_1.enableWalletRequest(providerType))
});
const mergeProps = (stateProps, dispatchProps, ownProps) => (Object.assign(Object.assign(Object.assign({}, stateProps), dispatchProps), ownProps));
exports.default = react_redux_1.connect(mapState, mapDispatch, mergeProps)(LoginModal_1.default);
//# sourceMappingURL=LoginModal.container.js.map