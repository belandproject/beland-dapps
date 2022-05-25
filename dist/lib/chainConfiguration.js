"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainConfiguration = exports.BEAN_GRAPH_BY_CHAIN_ID = void 0;
const chain_id_1 = require("@beland/schemas/dist/dapps/chain-id");
const network_1 = require("@beland/schemas/dist/dapps/network");
const NetworkConnector_1 = require("@beland/connect/dist/connectors/NetworkConnector");
exports.BEAN_GRAPH_BY_CHAIN_ID = {};
const NETWORK_MAPPING_BY_CHAIN_ID = {
    [chain_id_1.ChainId.ETHEREUM_MAINNET]: {
        [network_1.Network.ETHEREUM]: chain_id_1.ChainId.ETHEREUM_MAINNET,
        [network_1.Network.MATIC]: chain_id_1.ChainId.MATIC_MAINNET
    },
    [chain_id_1.ChainId.ETHEREUM_ROPSTEN]: {
        [network_1.Network.ETHEREUM]: chain_id_1.ChainId.ETHEREUM_ROPSTEN,
        [network_1.Network.MATIC]: chain_id_1.ChainId.MATIC_MUMBAI
    },
    [chain_id_1.ChainId.ETHEREUM_GOERLI]: {
        [network_1.Network.ETHEREUM]: chain_id_1.ChainId.ETHEREUM_GOERLI,
        [network_1.Network.MATIC]: chain_id_1.ChainId.MATIC_MUMBAI
    },
    [chain_id_1.ChainId.ETHEREUM_RINKEBY]: {
        [network_1.Network.ETHEREUM]: chain_id_1.ChainId.ETHEREUM_RINKEBY,
        [network_1.Network.MATIC]: chain_id_1.ChainId.MATIC_MUMBAI
    },
    [chain_id_1.ChainId.MATIC_MAINNET]: {
        [network_1.Network.ETHEREUM]: chain_id_1.ChainId.MATIC_MAINNET,
        [network_1.Network.MATIC]: chain_id_1.ChainId.MATIC_MAINNET
    },
    [chain_id_1.ChainId.MATIC_MUMBAI]: {
        [network_1.Network.ETHEREUM]: chain_id_1.ChainId.MATIC_MUMBAI,
        [network_1.Network.MATIC]: chain_id_1.ChainId.MATIC_MUMBAI
    },
    [chain_id_1.ChainId.KAI_MAINNET]: {
        [network_1.Network.ETHEREUM]: chain_id_1.ChainId.KAI_MAINNET,
        [network_1.Network.KAI]: chain_id_1.ChainId.KAI_MAINNET
    }
};
const NETWORK_BY_CHAIN_ID = {
    [chain_id_1.ChainId.ETHEREUM_MAINNET]: network_1.Network.ETHEREUM,
    [chain_id_1.ChainId.ETHEREUM_ROPSTEN]: network_1.Network.ETHEREUM,
    [chain_id_1.ChainId.ETHEREUM_GOERLI]: network_1.Network.ETHEREUM,
    [chain_id_1.ChainId.ETHEREUM_KOVAN]: network_1.Network.ETHEREUM,
    [chain_id_1.ChainId.ETHEREUM_RINKEBY]: network_1.Network.ETHEREUM,
    [chain_id_1.ChainId.MATIC_MAINNET]: network_1.Network.MATIC,
    [chain_id_1.ChainId.MATIC_MUMBAI]: network_1.Network.MATIC,
    [chain_id_1.ChainId.KAI_MAINNET]: network_1.Network.KAI
};
function getChainConfiguration(chainId) {
    return {
        network: NETWORK_BY_CHAIN_ID[chainId],
        beanGraphURL: exports.BEAN_GRAPH_BY_CHAIN_ID[chainId],
        rpcURL: NetworkConnector_1.RPC_URLS[chainId],
        networkMapping: NETWORK_MAPPING_BY_CHAIN_ID[chainId]
    };
}
exports.getChainConfiguration = getChainConfiguration;
//# sourceMappingURL=chainConfiguration.js.map