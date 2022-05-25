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
exports.getAddEthereumChainParameters = exports.sendTransaction = exports.transactionEvents = exports.TransactionEventType = exports.getTargetNetworkProvider = exports.buildWallet = exports.fetchBeanBalance = void 0;
const events_1 = require("events");
const ethers_1 = require("ethers");
const eth_1 = require("web3x/eth");
const transactions_1 = require("@beland/transactions");
const chain_id_1 = require("@beland/schemas/dist/dapps/chain-id");
const eth_2 = require("../../lib/eth");
const chainConfiguration_1 = require("../../lib/chainConfiguration");
function fetchBeanBalance(chainId, address) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const provider = yield (0, eth_2.getNetworkProvider)(chainId);
            const contract = (0, transactions_1.getContract)(transactions_1.ContractName.BEAN, chainId);
            const bean = new ethers_1.Contract(contract.address, contract.abi, new ethers_1.providers.Web3Provider(provider));
            const balance = yield bean.balanceOf(address);
            return parseFloat(ethers_1.utils.formatEther(balance));
        }
        catch (error) {
            return 0;
        }
    });
}
exports.fetchBeanBalance = fetchBeanBalance;
function buildWallet() {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = yield (0, eth_2.getConnectedProvider)();
        if (!provider) {
            // This could happen if metamask is not installed
            throw new Error('Could not connect to Ethereum');
        }
        const eth = new eth_1.Eth(provider);
        const accounts = yield eth.getAccounts();
        if (accounts.length === 0) {
            // This could happen if metamask was not enabled
            throw new Error('Could not get address');
        }
        const address = accounts[0].toString();
        const chainId = yield eth.getId();
        const chainConfig = (0, chainConfiguration_1.getChainConfiguration)(chainId);
        const expectedChainId = (0, eth_2.getConnectedProviderChainId)();
        const expectedChainConfig = (0, chainConfiguration_1.getChainConfiguration)(expectedChainId);
        const networks = {};
        for (const network of Object.keys(expectedChainConfig.networkMapping)) {
            const networkChainId = expectedChainConfig.networkMapping[network];
            networks[network] = {
                chainId: networkChainId,
                bean: yield fetchBeanBalance(networkChainId, address)
            };
        }
        return {
            address: address.toLowerCase(),
            providerType: (0, eth_2.getConnectedProviderType)(),
            networks: networks,
            network: chainConfig.network,
            chainId: expectedChainId
        };
    });
}
exports.buildWallet = buildWallet;
function getTargetNetworkProvider(chainId) {
    return __awaiter(this, void 0, void 0, function* () {
        const networkProvider = yield (0, eth_2.getNetworkProvider)(chainId);
        return new ethers_1.providers.Web3Provider(networkProvider);
    });
}
exports.getTargetNetworkProvider = getTargetNetworkProvider;
var TransactionEventType;
(function (TransactionEventType) {
    TransactionEventType["ERROR"] = "error";
    TransactionEventType["SUCCESS"] = "success";
})(TransactionEventType = exports.TransactionEventType || (exports.TransactionEventType = {}));
exports.transactionEvents = new events_1.EventEmitter();
function sendTransaction(...args) {
    return __awaiter(this, void 0, void 0, function* () {
        const [contract, contractMethodNameOrGetPopulatedTransaction, ...contractArguments] = args;
        try {
            // get connected provider
            const connectedProvider = yield (0, eth_2.getConnectedProvider)();
            if (!connectedProvider) {
                throw new Error('Provider not connected');
            }
            // get a provider for the target network
            const targetNetworkProvider = yield getTargetNetworkProvider(contract.chainId);
            // intantiate the contract
            const contractInstance = new ethers_1.Contract(contract.address, contract.abi, targetNetworkProvider);
            // populate the transaction data
            const unsignedTx = yield (typeof contractMethodNameOrGetPopulatedTransaction ===
                'function'
                ? contractMethodNameOrGetPopulatedTransaction(contractInstance.populateTransaction)
                : contractInstance.populateTransaction[contractMethodNameOrGetPopulatedTransaction](...contractArguments));
            const signer = targetNetworkProvider.getSigner();
            const tx = yield signer.sendTransaction(unsignedTx);
            yield tx.wait();
            exports.transactionEvents.emit(TransactionEventType.SUCCESS, { txHash: tx.hash });
            return tx.hash;
        }
        catch (error) {
            const data = {
                type: TransactionEventType.ERROR,
                error: error
            };
            exports.transactionEvents.emit(TransactionEventType.ERROR, data);
            throw error;
        }
    });
}
exports.sendTransaction = sendTransaction;
function getAddEthereumChainParameters(chainId) {
    const hexChainId = '0x' + chainId.toString(16);
    const chainName = (0, chain_id_1.getChainName)(chainId);
    const config = (0, chainConfiguration_1.getChainConfiguration)(chainId);
    switch (chainId) {
        case chain_id_1.ChainId.KAI_MAINNET:
            return {
                chainId: hexChainId,
                chainName,
                nativeCurrency: {
                    name: 'KardiaChain',
                    symbol: 'KAI',
                    decimals: 18
                },
                rpcUrls: [config.rpcURL],
                blockExplorerUrls: ['https://explorer.kardiachain.io']
            };
        default:
            throw new Error('get add ethereum chain error');
    }
}
exports.getAddEthereumChainParameters = getAddEthereumChainParameters;
//# sourceMappingURL=utils.js.map