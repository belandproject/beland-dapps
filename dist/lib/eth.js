"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainIdByNetwork = exports.isValidChainId = exports.isCoinbaseProvider = exports.isDapperProvider = exports.isCucumberProvider = exports.getConnectedProviderChainId = exports.getConnectedProviderType = exports.getConnectedProvider = exports.getNetworkProvider = void 0;
const connect_1 = require("@beland/connect");
const chain_id_1 = require("@beland/schemas/dist/dapps/chain-id");
const ethers_1 = require("ethers");
const provider_type_1 = require("@beland/schemas/dist/dapps/provider-type");
const chainConfiguration_1 = require("./chainConfiguration");
const utils_1 = require("./utils");
function getNetworkProvider(chainId) {
    return __awaiter(this, void 0, void 0, function* () {
        /*
          We check if the connected provider is from the same chainId, if so we return that one instead of creating one.
          This is to avoid using our own RPCs that much, and use the ones provided by the provider when possible.
        */
        const connectedProvider = yield getConnectedProvider();
        if (connectedProvider) {
            const connectedChainId = yield new ethers_1.providers.Web3Provider(connectedProvider)
                .getSigner()
                .getChainId();
            if (chainId === connectedChainId) {
                return connectedProvider;
            }
        }
        return connect_1.connection.createProvider(provider_type_1.ProviderType.NETWORK, chainId);
    });
}
exports.getNetworkProvider = getNetworkProvider;
function getConnectedProvider() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { provider } = yield connect_1.connection.tryPreviousConnection();
            return provider ? provider : null;
        }
        catch (error) {
            return null;
        }
    });
}
exports.getConnectedProvider = getConnectedProvider;
function getConnectedProviderType() {
    const connectionData = connect_1.connection.getConnectionData();
    return connectionData ? connectionData.providerType : null;
}
exports.getConnectedProviderType = getConnectedProviderType;
function getConnectedProviderChainId() {
    const connectionData = connect_1.connection.getConnectionData();
    return connectionData ? connectionData.chainId : null;
}
exports.getConnectedProviderChainId = getConnectedProviderChainId;
function isCucumberProvider() {
    const provider = window.ethereum;
    return (0, utils_1.isMobile)() && !!provider && !!provider.isCucumber;
}
exports.isCucumberProvider = isCucumberProvider;
function isDapperProvider() {
    const provider = window.ethereum;
    return !!provider && !!provider.isDapper;
}
exports.isDapperProvider = isDapperProvider;
function isCoinbaseProvider() {
    const provider = window.ethereum;
    return !!provider && !!provider.isToshi;
}
exports.isCoinbaseProvider = isCoinbaseProvider;
function isValidChainId(chainId) {
    return Object.values(chain_id_1.ChainId).includes(Number(chainId));
}
exports.isValidChainId = isValidChainId;
function getChainIdByNetwork(network) {
    const connectedChainId = getConnectedProviderChainId();
    if (!connectedChainId) {
        throw new Error('Could not get connected provider chain id');
    }
    const config = (0, chainConfiguration_1.getChainConfiguration)(connectedChainId);
    return config.networkMapping[network];
}
exports.getChainIdByNetwork = getChainIdByNetwork;
//# sourceMappingURL=eth.js.map