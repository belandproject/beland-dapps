"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBean = exports.getAppChainId = exports.hasAcceptedNetworkPartialSupport = exports.getNetworks = exports.getNetwork = exports.getProviderType = exports.getChainId = exports.getAddress = exports.isEnabling = exports.isConnecting = exports.isConnected = exports.getError = exports.getLoading = exports.getData = exports.getState = void 0;
const network_1 = require("@beland/schemas/dist/dapps/network");
const selectors_1 = require("../loading/selectors");
const actions_1 = require("./actions");
const getState = state => state.wallet;
exports.getState = getState;
const getData = (state) => (0, exports.getState)(state).data;
exports.getData = getData;
const getLoading = (state) => (0, exports.getState)(state).loading;
exports.getLoading = getLoading;
const getError = (state) => (0, exports.getState)(state).error;
exports.getError = getError;
const isConnected = (state) => (0, exports.getData)(state) !== null;
exports.isConnected = isConnected;
const isConnecting = (state) => (0, selectors_1.isLoadingType)((0, exports.getLoading)(state), actions_1.CONNECT_WALLET_REQUEST);
exports.isConnecting = isConnecting;
const isEnabling = (state) => (0, selectors_1.isLoadingType)((0, exports.getLoading)(state), actions_1.ENABLE_WALLET_REQUEST);
exports.isEnabling = isEnabling;
const getAddress = (state) => (0, exports.isConnected)(state) ? (0, exports.getData)(state).address : undefined;
exports.getAddress = getAddress;
const getChainId = (state) => (0, exports.isConnected)(state) ? (0, exports.getData)(state).chainId : undefined;
exports.getChainId = getChainId;
const getProviderType = (state) => (0, exports.isConnected)(state) ? (0, exports.getData)(state).providerType : undefined;
exports.getProviderType = getProviderType;
const getNetwork = (state) => (0, exports.isConnected)(state) ? (0, exports.getData)(state).network : undefined;
exports.getNetwork = getNetwork;
const getNetworks = (state) => (0, exports.isConnected)(state) ? (0, exports.getData)(state).networks : undefined;
exports.getNetworks = getNetworks;
const hasAcceptedNetworkPartialSupport = (state) => (0, exports.getState)(state).hasAcceptedNetworkPartialSupport;
exports.hasAcceptedNetworkPartialSupport = hasAcceptedNetworkPartialSupport;
// Casting as ChainId since it will be initialized at the beginning
const getAppChainId = (state) => (0, exports.getState)(state).appChainId;
exports.getAppChainId = getAppChainId;
/**
 * @deprecated This method is deprecated, it only returns the bean balance on Ethereum, use getNetworks() to get the bean balances on all the networks.
 */
const getBean = (state) => {
    if (!(0, exports.isConnected)(state)) {
        return undefined;
    }
    const networks = (0, exports.getNetworks)(state);
    return networks[network_1.Network.KAI].bean;
};
exports.getBean = getBean;
//# sourceMappingURL=selectors.js.map