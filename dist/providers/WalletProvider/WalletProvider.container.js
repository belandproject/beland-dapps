"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const selectors_1 = require("../../modules/wallet/selectors");
const actions_1 = require("../../modules/wallet/actions");
const WalletProvider_1 = __importDefault(require("./WalletProvider"));
const mapState = (state) => ({
    address: (0, selectors_1.getAddress)(state),
    chainId: (0, selectors_1.getChainId)(state),
    isConnected: (0, selectors_1.isConnected)(state),
    isConnecting: (0, selectors_1.isConnecting)(state)
});
const mapDispatch = (dispatch) => ({
    onConnect: () => dispatch((0, actions_1.connectWalletRequest)()),
    onChangeAccount: address => dispatch((0, actions_1.changeAccount)(address)),
    onChangeNetwork: network => dispatch((0, actions_1.changeNetwork)(network))
});
exports.default = (0, react_redux_1.connect)(mapState, mapDispatch)(WalletProvider_1.default);
//# sourceMappingURL=WalletProvider.container.js.map