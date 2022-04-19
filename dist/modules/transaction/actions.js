"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearTransaction = exports.CLEAR_TRANSACTION = exports.clearTransactions = exports.CLEAR_TRANSACTIONS = exports.replaceTransactionFailure = exports.replaceTransactionSuccess = exports.replaceTransactionRequest = exports.REPLACE_TRANSACTION_FAILURE = exports.REPLACE_TRANSACTION_SUCCESS = exports.REPLACE_TRANSACTION_REQUEST = exports.fixRevertedTransaction = exports.FIX_REVERTED_TRANSACTION = exports.watchRevertedTransaction = exports.WATCH_REVERTED_TRANSACTION = exports.watchDroppedTransactions = exports.WATCH_DROPPED_TRANSACTIONS = exports.updateTransactionNonce = exports.UPDATE_TRANSACTION_NONCE = exports.updateTransactionStatus = exports.UPDATE_TRANSACTION_STATUS = exports.watchPendingTransactions = exports.WATCH_PENDING_TRANSACTIONS = exports.fetchTransactionFailure = exports.fetchTransactionSuccess = exports.fetchTransactionRequest = exports.FETCH_TRANSACTION_FAILURE = exports.FETCH_TRANSACTION_SUCCESS = exports.FETCH_TRANSACTION_REQUEST = void 0;
const typesafe_actions_1 = require("typesafe-actions");
// Fetch transaction
exports.FETCH_TRANSACTION_REQUEST = '[Request] Fetch Transaction';
exports.FETCH_TRANSACTION_SUCCESS = '[Success] Fetch Transaction';
exports.FETCH_TRANSACTION_FAILURE = '[Failure] Fetch Transaction';
const fetchTransactionRequest = (address, hash, actionObject) => typesafe_actions_1.action(exports.FETCH_TRANSACTION_REQUEST, {
    address,
    hash,
    action: actionObject
});
exports.fetchTransactionRequest = fetchTransactionRequest;
const fetchTransactionSuccess = (transaction) => typesafe_actions_1.action(exports.FETCH_TRANSACTION_SUCCESS, { transaction });
exports.fetchTransactionSuccess = fetchTransactionSuccess;
const fetchTransactionFailure = (hash, status, message, transaction) => typesafe_actions_1.action(exports.FETCH_TRANSACTION_FAILURE, {
    hash,
    status,
    message,
    transaction
});
exports.fetchTransactionFailure = fetchTransactionFailure;
// Watch pending transactions
exports.WATCH_PENDING_TRANSACTIONS = 'Watch Pending Transactions';
const watchPendingTransactions = () => typesafe_actions_1.action(exports.WATCH_PENDING_TRANSACTIONS, {});
exports.watchPendingTransactions = watchPendingTransactions;
// Update transaction status
exports.UPDATE_TRANSACTION_STATUS = 'Update Transaction Status';
const updateTransactionStatus = (hash, status) => typesafe_actions_1.action(exports.UPDATE_TRANSACTION_STATUS, { hash, status });
exports.updateTransactionStatus = updateTransactionStatus;
// Update transaction nonce
exports.UPDATE_TRANSACTION_NONCE = 'Update Transaction Nonce';
const updateTransactionNonce = (hash, nonce) => typesafe_actions_1.action(exports.UPDATE_TRANSACTION_NONCE, { hash, nonce });
exports.updateTransactionNonce = updateTransactionNonce;
// Watch dropped transactions
exports.WATCH_DROPPED_TRANSACTIONS = 'Watch Dropped Transactions';
const watchDroppedTransactions = () => typesafe_actions_1.action(exports.WATCH_DROPPED_TRANSACTIONS, {});
exports.watchDroppedTransactions = watchDroppedTransactions;
// Watch reverted transaction
exports.WATCH_REVERTED_TRANSACTION = 'Watch Reverted Transaction';
const watchRevertedTransaction = (hash) => typesafe_actions_1.action(exports.WATCH_REVERTED_TRANSACTION, { hash });
exports.watchRevertedTransaction = watchRevertedTransaction;
// Fix reverted transaction
exports.FIX_REVERTED_TRANSACTION = 'Fix Reverted Transaction';
const fixRevertedTransaction = (hash) => typesafe_actions_1.action(exports.FIX_REVERTED_TRANSACTION, { hash });
exports.fixRevertedTransaction = fixRevertedTransaction;
// Replace transaction
exports.REPLACE_TRANSACTION_REQUEST = '[Request] Replace Transaction';
exports.REPLACE_TRANSACTION_SUCCESS = '[Success] Replace Transaction';
exports.REPLACE_TRANSACTION_FAILURE = '[Failure] Replace Transaction';
const replaceTransactionRequest = (hash, nonce) => typesafe_actions_1.action(exports.REPLACE_TRANSACTION_REQUEST, {
    hash,
    nonce
});
exports.replaceTransactionRequest = replaceTransactionRequest;
const replaceTransactionSuccess = (hash, replaceBy) => typesafe_actions_1.action(exports.REPLACE_TRANSACTION_SUCCESS, { hash, replaceBy });
exports.replaceTransactionSuccess = replaceTransactionSuccess;
const replaceTransactionFailure = (hash, error) => typesafe_actions_1.action(exports.REPLACE_TRANSACTION_FAILURE, {
    hash,
    error
});
exports.replaceTransactionFailure = replaceTransactionFailure;
// Clear Transactions (multiple)
exports.CLEAR_TRANSACTIONS = 'Clear Transactions';
const clearTransactions = (address, clearPendings = false) => typesafe_actions_1.action(exports.CLEAR_TRANSACTIONS, {
    address,
    clearPendings
});
exports.clearTransactions = clearTransactions;
// Clear Transaction (single)
exports.CLEAR_TRANSACTION = 'Clear Transaction';
const clearTransaction = (hash) => typesafe_actions_1.action(exports.CLEAR_TRANSACTION, {
    hash
});
exports.clearTransaction = clearTransaction;
//# sourceMappingURL=actions.js.map