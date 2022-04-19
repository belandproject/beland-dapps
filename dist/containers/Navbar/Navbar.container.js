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
    chainId: selectors_1.getChainId(state),
    mana: selectors_1.getMana(state),
    address: selectors_1.getAddress(state),
    isConnected: selectors_1.isConnected(state),
    isConnecting: selectors_1.isConnecting(state),
    hasTranslations: selectors_2.isEnabled(state),
    hasAcceptedNetworkPartialSupport: selectors_1.hasAcceptedNetworkPartialSupport(state)
});
const mapDispatch = (dispatch) => ({
    onSwitchNetwork: chainId => dispatch(actions_1.switchNetworkRequest(chainId)),
    onSignOut: () => dispatch(actions_1.disconnectWallet()),
    onAcceptNetworkPartialSupport: () => dispatch(actions_1.acceptNetworkPartialSupport())
});
const mergeProps = (stateProps, dispatchProps, ownProps) => (Object.assign(Object.assign(Object.assign({}, stateProps), dispatchProps), ownProps));
exports.default = react_redux_1.connect(mapState, mapDispatch, mergeProps)(Navbar_1.default);
//# sourceMappingURL=Navbar.container.js.map