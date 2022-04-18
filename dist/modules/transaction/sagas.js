"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FailedTransactionError = exports.transactionSaga = void 0;
const eth_1 = require("web3x/eth");
const effects_1 = require("redux-saga/effects");
const types_1 = require("./types");
const actions_1 = require("./actions");
const actions_2 = require("../wallet/actions");
const selectors_1 = require("./selectors");
const utils_1 = require("./utils");
const txUtils_1 = require("./txUtils");
const selectors_2 = require("../wallet/selectors");
const eth_2 = require("../../lib/eth");
function* transactionSaga() {
    yield effects_1.takeEvery(actions_1.FETCH_TRANSACTION_REQUEST, handleFetchTransactionRequest);
    yield effects_1.takeEvery(actions_1.REPLACE_TRANSACTION_REQUEST, handleReplaceTransactionRequest);
    yield effects_1.takeEvery(actions_1.WATCH_PENDING_TRANSACTIONS, handleWatchPendingTransactions);
    yield effects_1.takeEvery(actions_1.WATCH_DROPPED_TRANSACTIONS, handleWatchDroppedTransactions);
    yield effects_1.takeEvery(actions_1.WATCH_REVERTED_TRANSACTION, handleWatchRevertedTransaction);
    yield effects_1.takeEvery(actions_2.CONNECT_WALLET_SUCCESS, handleConnectWalletSuccess);
}
exports.transactionSaga = transactionSaga;
const BLOCKS_DEPTH = 100;
const PENDING_TRANSACTION_THRESHOLD = 72 * 60 * 60 * 1000; // 72 hours
const REVERTED_TRANSACTION_THRESHOLD = 24 * 60 * 60 * 1000; // 24 hours
const TRANSACTION_FETCH_DELAY = 2 * 1000; // 2 seconds
const isExpired = (transaction, threshold) => Date.now() - transaction.timestamp > threshold;
const watchPendingIndex = {
// hash: true
};
const watchDroppedIndex = {
// hash: true
};
class FailedTransactionError extends Error {
    constructor(hash, status) {
        super(`[${hash}] ${status}`); // 'Error' breaks prototype chain here
        this.hash = hash;
        this.status = status;
        Object.setPrototypeOf(this, new.target.prototype); // restore prototype chain
    }
}
exports.FailedTransactionError = FailedTransactionError;
function* handleFetchTransactionRequest(action) {
    const { hash } = action.payload;
    const transaction = yield effects_1.select(state => selectors_1.getTransaction(state, hash));
    if (!transaction) {
        console.warn(`Could not find a valid transaction for hash ${hash}`);
        return;
    }
    try {
        const address = yield effects_1.select(state => selectors_2.getAddress(state));
        watchPendingIndex[hash] = true;
        let tx = yield effects_1.call(() => txUtils_1.getTransaction(address, transaction.chainId, hash));
        let isUnknown = tx == null;
        // loop while tx is pending
        while (isUnknown ||
            utils_1.isPending(tx.status) ||
            tx.status === types_1.TransactionStatus.REPLACED // let replaced transactions be kept in the loop so it can be picked up as dropped
        ) {
            const txInState = yield effects_1.select(state => selectors_1.getTransaction(state, hash));
            // update nonce
            const nonceInState = txInState == null ? null : txInState.nonce;
            const nonceInNetwork = isUnknown ? null : tx.nonce;
            if (nonceInNetwork != null && nonceInState == null) {
                yield effects_1.put(actions_1.updateTransactionNonce(hash, nonceInNetwork));
            }
            // update status
            const statusInState = txInState == null ? null : txInState.status;
            const statusInNetwork = isUnknown ? null : tx.status;
            const nonce = nonceInState || nonceInNetwork;
            if (statusInState !== statusInNetwork && nonce != null) {
                // check if dropped or replaced
                const isDropped = statusInState != null && statusInNetwork == null;
                const isReplaced = statusInNetwork === types_1.TransactionStatus.REPLACED;
                if (isDropped || isReplaced) {
                    // mark tx as dropped even if it was returned with a 'replaced' status, let the saga find its replacement
                    yield effects_1.put(actions_1.replaceTransactionRequest(hash, nonce));
                    throw new FailedTransactionError(hash, types_1.TransactionStatus.DROPPED);
                }
                yield effects_1.put(actions_1.updateTransactionStatus(hash, statusInNetwork));
            }
            // sleep
            yield effects_1.delay(TRANSACTION_FETCH_DELAY);
            // update tx status from network
            tx = yield effects_1.call(() => txUtils_1.getTransaction(address, transaction.chainId, hash));
            isUnknown = tx == null;
        }
        delete watchPendingIndex[hash];
        if (tx.status === types_1.TransactionStatus.CONFIRMED) {
            yield effects_1.put(actions_1.fetchTransactionSuccess(Object.assign(Object.assign({}, transaction), { status: tx.status, receipt: {
                    logs: transaction.withReceipt ? tx.receipt.logs : []
                } })));
        }
        else {
            if (tx.status === types_1.TransactionStatus.REVERTED) {
                yield effects_1.put(actions_1.watchRevertedTransaction(tx.hash));
            }
            throw new FailedTransactionError(tx.hash, tx.status);
        }
    }
    catch (error) {
        yield effects_1.put(actions_1.fetchTransactionFailure(error.hash, error.status, error.message, transaction));
    }
}
function* handleReplaceTransactionRequest(action) {
    const { hash, nonce } = action.payload;
    const transaction = yield effects_1.select(state => selectors_1.getTransaction(state, hash));
    if (!transaction) {
        console.warn(`Could not find a valid transaction for hash ${hash}`);
        return;
    }
    const provider = yield effects_1.call(() => eth_2.getConnectedProvider());
    if (!provider) {
        console.warn('Could not connect to ethereum');
        return;
    }
    const eth = new eth_1.Eth(provider);
    const accounts = yield effects_1.call(() => eth.getAccounts());
    if (accounts.length === 0) {
        console.warn('Could not get accounts');
        return;
    }
    const account = accounts[0].toString();
    let checkpoint = null;
    watchDroppedIndex[hash] = true;
    while (true) {
        // check if tx has status, this is to recover from a tx that is dropped momentarily
        const tx = yield effects_1.call(() => txUtils_1.getTransaction(account, transaction.chainId, hash));
        if (tx != null) {
            const txInState = yield effects_1.select(state => selectors_1.getTransaction(state, hash));
            yield effects_1.put(actions_1.fetchTransactionRequest(account, hash, utils_1.buildActionRef(txInState)));
            break;
        }
        // get latest block
        const blockNumber = yield effects_1.call(() => eth.getBlockNumber());
        let highestNonce = 0;
        let replacedBy = null;
        // loop through the last blocks
        const startBlock = blockNumber;
        const endBlock = checkpoint || blockNumber - BLOCKS_DEPTH;
        for (let i = startBlock; i > endBlock; i--) {
            let block = yield effects_1.call(() => eth.getBlock(i, true));
            const transactions = block != null && block.transactions != null ? block.transactions : [];
            // look for a replacement tx, if so break the loop
            replacedBy = transactions.find(tx => tx.nonce === nonce && tx.from.toString() === account);
            if (replacedBy)
                break;
            // if no replacement is found, keep track of the highest nonce for the account
            highestNonce = transactions
                .filter(tx => tx.from.toString() === account)
                .reduce((max, tx) => Math.max(max, tx.nonce), highestNonce);
        }
        checkpoint = blockNumber;
        // if a replacement tx was found, replace it
        if (replacedBy) {
            // this is a tx that was wrongly marked as replaced
            // could be due to a race condition when fetching the account nonce
            // it will be sent back to the pending tx saga that will mark it as confirmed/reverted
            if (hash === replacedBy.hash) {
                const txInState = yield effects_1.select(state => selectors_1.getTransaction(state, hash));
                yield effects_1.put(actions_1.fetchTransactionRequest(account, hash, utils_1.buildActionRef(txInState)));
            }
            else {
                // replacement found!
                yield effects_1.put(actions_1.replaceTransactionSuccess(hash, replacedBy.hash));
            }
            break;
        }
        // if there was nonce higher to than the one in the tx, we can mark it as replaced (altough we don't know which tx replaced it)
        if (highestNonce >= nonce) {
            yield effects_1.put(actions_1.updateTransactionStatus(action.payload.hash, types_1.TransactionStatus.REPLACED));
            break;
        }
        // sleep
        yield effects_1.delay(TRANSACTION_FETCH_DELAY);
    }
    delete watchDroppedIndex[action.payload.hash];
}
function* handleWatchPendingTransactions() {
    const transactions = yield effects_1.select(selectors_1.getData);
    const pendingTransactions = transactions.filter(transaction => utils_1.isPending(transaction.status));
    for (const tx of pendingTransactions) {
        if (!watchPendingIndex[tx.hash]) {
            // don't watch transactions that are too old
            if (!isExpired(tx, PENDING_TRANSACTION_THRESHOLD)) {
                yield effects_1.fork(handleFetchTransactionRequest, actions_1.fetchTransactionRequest(tx.from, tx.hash, utils_1.buildActionRef(tx)));
            }
            else {
                // mark it as dropped if it's too old
                yield effects_1.put(actions_1.updateTransactionStatus(tx.hash, types_1.TransactionStatus.DROPPED));
            }
        }
    }
}
function* handleWatchDroppedTransactions() {
    const transactions = yield effects_1.select(selectors_1.getData);
    const droppedTransactions = transactions.filter(transaction => transaction.status === types_1.TransactionStatus.DROPPED &&
        transaction.nonce != null);
    for (const tx of droppedTransactions) {
        if (!watchDroppedIndex[tx.hash]) {
            yield effects_1.fork(handleReplaceTransactionRequest, actions_1.replaceTransactionRequest(tx.hash, tx.nonce));
        }
    }
}
function* handleWatchRevertedTransaction(action) {
    const { hash } = action.payload;
    const txInState = yield effects_1.select(state => selectors_1.getTransaction(state, hash));
    const address = yield effects_1.select(state => selectors_2.getAddress(state));
    do {
        yield effects_1.delay(TRANSACTION_FETCH_DELAY);
        const txInNetwork = yield effects_1.call(() => txUtils_1.getTransaction(address, txInState.chainId, hash));
        if (txInNetwork != null &&
            txInNetwork.status === types_1.TransactionStatus.CONFIRMED) {
            yield effects_1.put(actions_1.fixRevertedTransaction(hash));
            return;
        }
        else if (txInNetwork == null && txInState.nonce) {
            yield effects_1.put(actions_1.replaceTransactionRequest(hash, txInState.nonce));
            return;
        }
    } while (!isExpired(txInState, REVERTED_TRANSACTION_THRESHOLD));
}
function* handleConnectWalletSuccess(_) {
    yield effects_1.put(actions_1.watchPendingTransactions());
    yield effects_1.put(actions_1.watchDroppedTransactions());
    // find reverted transactions and watch the latest ones
    const address = yield effects_1.select(state => selectors_2.getAddress(state));
    const transactions = yield effects_1.select(state => selectors_1.getTransactions(state, address));
    const revertedTransactions = transactions.filter(transaction => transaction.status === types_1.TransactionStatus.REVERTED &&
        !isExpired(transaction, REVERTED_TRANSACTION_THRESHOLD));
    for (const transaction of revertedTransactions) {
        yield effects_1.put(actions_1.watchRevertedTransaction(transaction.hash));
    }
}
//# sourceMappingURL=sagas.js.map