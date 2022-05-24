"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const provider_type_1 = require("@beland/schemas/dist/dapps/provider-type");
const selectors_1 = require("../../modules/wallet/selectors");
const chainConfiguration_1 = require("../../lib/chainConfiguration");
const eth_1 = require("../../lib/eth");
const ChainProvider_1 = __importDefault(require("./ChainProvider"));
const mapState = (state) => {
    const chainId = (0, selectors_1.getChainId)(state) || null;
    const network = chainId && (0, chainConfiguration_1.getChainConfiguration)(chainId).network;
    const expectedChainId = (0, eth_1.getConnectedProviderChainId)();
    const providerType = (0, eth_1.getConnectedProviderType)();
    const config = expectedChainId && (0, chainConfiguration_1.getChainConfiguration)(expectedChainId);
    const isConnected = !!chainId && !!config;
    const isSupported = isConnected && chainId === expectedChainId;
    const isPartiallySupported = isConnected &&
        !isSupported &&
        providerType !== provider_type_1.ProviderType.WALLET_CONNECT &&
        Object.values(config.networkMapping).some(mappedChainId => mappedChainId === chainId);
    const isUnsupported = isConnected && !isSupported && !isPartiallySupported;
    return {
        chainId,
        network,
        isConnected,
        isSupported,
        isPartiallySupported,
        isUnsupported
    };
};
const mapDispatch = (_dispatch) => ({});
exports.default = (0, react_redux_1.connect)(mapState, mapDispatch)(ChainProvider_1.default);
//# sourceMappingURL=ChainProvider.container.js.map