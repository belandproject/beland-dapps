"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasSucceeded = exports.hasFailed = exports.isPending = exports.getTransactionOrigin = exports.getTransactionHref = exports.buildTransactionWithReceiptPayload = exports.buildTransactionPayload = exports.getTransactionHashFromAction = exports.getTransactionFromAction = exports.isTransactionAction = exports.buildActionRef = exports.TRANSACTION_ACTION_FLAG = void 0;
const chain_id_1 = require("@beland/schemas/dist/dapps/chain-id");
const types_1 = require("./types");
// Special flag used to determine transaction hashes to be monitored
exports.TRANSACTION_ACTION_FLAG = '_watch_tx';
function buildActionRef(transaction) {
    const { actionType, withReceipt, payload } = transaction;
    const buildFunction = withReceipt
        ? buildTransactionWithReceiptPayload
        : buildTransactionPayload;
    return {
        type: actionType,
        payload: buildFunction(transaction.chainId, transaction.hash, payload)
    };
}
exports.buildActionRef = buildActionRef;
function isTransactionAction(action) {
    return !!getTransactionFromAction(action);
}
exports.isTransactionAction = isTransactionAction;
function getTransactionFromAction(action) {
    return action.payload && action.payload[exports.TRANSACTION_ACTION_FLAG];
}
exports.getTransactionFromAction = getTransactionFromAction;
function getTransactionHashFromAction(action) {
    return getTransactionFromAction(action).hash;
}
exports.getTransactionHashFromAction = getTransactionHashFromAction;
function buildTransactionPayload(chainId, hash, payload = {}) {
    return {
        [exports.TRANSACTION_ACTION_FLAG]: {
            chainId,
            hash,
            payload
        }
    };
}
exports.buildTransactionPayload = buildTransactionPayload;
function buildTransactionWithReceiptPayload(chainId, hash, payload = {}) {
    const txPayload = buildTransactionPayload(chainId, hash, payload);
    txPayload[exports.TRANSACTION_ACTION_FLAG].withReceipt = true;
    return txPayload;
}
exports.buildTransactionWithReceiptPayload = buildTransactionWithReceiptPayload;
function getTransactionHref({ txHash, address, blockNumber }, network) {
    const pathname = address
        ? `/address/${address}`
        : blockNumber
            ? `/block/${blockNumber}`
            : `/tx/${txHash}`;
    return `${getTransactionOrigin(network)}${pathname}`;
}
exports.getTransactionHref = getTransactionHref;
function getTransactionOrigin(chainId = chain_id_1.ChainId.ETHEREUM_MAINNET) {
    switch (chainId) {
        case chain_id_1.ChainId.ETHEREUM_ROPSTEN:
            return 'https://ropsten.etherscan.io';
        case chain_id_1.ChainId.ETHEREUM_RINKEBY:
            return 'https://rinkeby.etherscan.io';
        case chain_id_1.ChainId.ETHEREUM_GOERLI:
            return 'https://goerli.etherscan.io';
        case chain_id_1.ChainId.MATIC_MAINNET:
            return 'https://explorer-mainnet.maticvigil.com';
        case chain_id_1.ChainId.MATIC_MUMBAI:
            return 'https://explorer-mumbai.maticvigil.com';
        default:
            return 'https://etherscan.io';
    }
}
exports.getTransactionOrigin = getTransactionOrigin;
function isPending(status) {
    return !types_1.FINISHED_STATUS.includes(status);
}
exports.isPending = isPending;
function hasFailed(status) {
    return types_1.FAILED_STATUS.includes(status);
}
exports.hasFailed = hasFailed;
function hasSucceeded(status) {
    return types_1.SUCCESS_STATUS.includes(status);
}
exports.hasSucceeded = hasSucceeded;
//# sourceMappingURL=utils.js.map