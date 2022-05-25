"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const selectors_1 = require("../../modules/wallet/selectors");
const selectors_2 = require("../../modules/translation/selectors");
const actions_1 = require("../../modules/wallet/actions");
const Navbar_1 = __importDefault(require("./Navbar"));
const mapState = (state) => ({
    chainId: (0, selectors_1.getChainId)(state),
    bean: (0, selectors_1.getBean)(state),
    address: (0, selectors_1.getAddress)(state),
    isConnected: (0, selectors_1.isConnected)(state),
    isConnecting: (0, selectors_1.isConnecting)(state),
    hasTranslations: (0, selectors_2.isEnabled)(state),
    hasAcceptedNetworkPartialSupport: (0, selectors_1.hasAcceptedNetworkPartialSupport)(state)
});
const mapDispatch = (dispatch) => ({
    onSwitchNetwork: chainId => dispatch((0, actions_1.switchNetworkRequest)(chainId)),
    onSignOut: () => dispatch((0, actions_1.disconnectWallet)()),
    onAcceptNetworkPartialSupport: () => dispatch((0, actions_1.acceptNetworkPartialSupport)())
});
const mergeProps = (stateProps, dispatchProps, ownProps) => (Object.assign(Object.assign(Object.assign({}, stateProps), dispatchProps), ownProps));
exports.default = (0, react_redux_1.connect)(mapState, mapDispatch, mergeProps)(Navbar_1.default);
//# sourceMappingURL=Navbar.container.js.map