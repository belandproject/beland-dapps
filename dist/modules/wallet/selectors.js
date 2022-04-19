"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMana = exports.getAppChainId = exports.hasAcceptedNetworkPartialSupport = exports.getNetworks = exports.getNetwork = exports.getProviderType = exports.getChainId = exports.getAddress = exports.isEnabling = exports.isConnecting = exports.isConnected = exports.getError = exports.getLoading = exports.getData = exports.getState = void 0;
const network_1 = require("@beland/schemas/dist/dapps/network");
const selectors_1 = require("../loading/selectors");
const actions_1 = require("./actions");
const getState = state => state.wallet;
exports.getState = getState;
const getData = (state) => exports.getState(state).data;
exports.getData = getData;
const getLoading = (state) => exports.getState(state).loading;
exports.getLoading = getLoading;
const getError = (state) => exports.getState(state).error;
exports.getError = getError;
const isConnected = (state) => exports.getData(state) !== null;
exports.isConnected = isConnected;
const isConnecting = (state) => selectors_1.isLoadingType(exports.getLoading(state), actions_1.CONNECT_WALLET_REQUEST);
exports.isConnecting = isConnecting;
const isEnabling = (state) => selectors_1.isLoadingType(exports.getLoading(state), actions_1.ENABLE_WALLET_REQUEST);
exports.isEnabling = isEnabling;
const getAddress = (state) => exports.isConnected(state) ? exports.getData(state).address : undefined;
exports.getAddress = getAddress;
const getChainId = (state) => exports.isConnected(state) ? exports.getData(state).chainId : undefined;
exports.getChainId = getChainId;
const getProviderType = (state) => exports.isConnected(state) ? exports.getData(state).providerType : undefined;
exports.getProviderType = getProviderType;
const getNetwork = (state) => exports.isConnected(state) ? exports.getData(state).network : undefined;
exports.getNetwork = getNetwork;
const getNetworks = (state) => exports.isConnected(state) ? exports.getData(state).networks : undefined;
exports.getNetworks = getNetworks;
const hasAcceptedNetworkPartialSupport = (state) => exports.getState(state).hasAcceptedNetworkPartialSupport;
exports.hasAcceptedNetworkPartialSupport = hasAcceptedNetworkPartialSupport;
// Casting as ChainId since it will be initialized at the beginning
const getAppChainId = (state) => exports.getState(state).appChainId;
exports.getAppChainId = getAppChainId;
/**
 * @deprecated This method is deprecated, it only returns the MANA balance on Ethereum, use getNetworks() to get the MANA balances on all the networks.
 */
const getMana = (state) => {
    if (!exports.isConnected(state)) {
        return undefined;
    }
    const networks = exports.getNetworks(state);
    return networks[network_1.Network.ETHEREUM].mana;
};
exports.getMana = getMana;
//# sourceMappingURL=selectors.js.map