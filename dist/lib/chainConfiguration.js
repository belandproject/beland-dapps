"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChainConfiguration = exports.MANA_GRAPH_BY_CHAIN_ID = void 0;
const chain_id_1 = require("@beland/schemas/dist/dapps/chain-id");
const network_1 = require("@beland/schemas/dist/dapps/network");
const NetworkConnector_1 = require("@beland/connect/dist/connectors/NetworkConnector");
exports.MANA_GRAPH_BY_CHAIN_ID = {
    [chain_id_1.ChainId.ETHEREUM_MAINNET]: 'https://api.thegraph.com/subgraphs/name/decentraland/mana-ethereum-mainnet',
    [chain_id_1.ChainId.ETHEREUM_ROPSTEN]: 'https://api.thegraph.com/subgraphs/name/decentraland/mana-ethereum-ropsten',
    [chain_id_1.ChainId.ETHEREUM_GOERLI]: 'https://api.thegraph.com/subgraphs/name/decentraland/mana-ethereum-goerli',
    [chain_id_1.ChainId.ETHEREUM_RINKEBY]: 'https://api.thegraph.com/subgraphs/name/decentraland/mana-ethereum-rinkeby',
    [chain_id_1.ChainId.MATIC_MAINNET]: 'https://api.thegraph.com/subgraphs/name/decentraland/mana-matic-mainnet',
    [chain_id_1.ChainId.MATIC_MUMBAI]: 'https://api.thegraph.com/subgraphs/name/decentraland/mana-matic-mumbai'
};
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
        manaGraphURL: exports.MANA_GRAPH_BY_CHAIN_ID[chainId],
        rpcURL: NetworkConnector_1.RPC_URLS[chainId],
        networkMapping: NETWORK_MAPPING_BY_CHAIN_ID[chainId]
    };
}
exports.getChainConfiguration = getChainConfiguration;
//# sourceMappingURL=chainConfiguration.js.map