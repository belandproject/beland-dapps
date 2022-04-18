"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransactionsByType = exports.getTransactionHistory = exports.getPendingTransactions = exports.getTransactions = exports.getTransactionsByStatus = exports.getTransaction = exports.getLoading = exports.getData = exports.getState = void 0;
const utils_1 = require("./utils");
const sortByTimestamp = (a, b) => a.timestamp > b.timestamp ? -1 : 1;
const getState = state => state.transaction;
exports.getState = getState;
const getData = state => (0, exports.getState)(state).data;
exports.getData = getData;
const getLoading = state => (0, exports.getState)(state).loading;
exports.getLoading = getLoading;
const getTransaction = (state, hash) => (0, exports.getData)(state).find(tx => tx.hash === hash);
exports.getTransaction = getTransaction;
const getTransactionsByStatus = (state, address, status) => (0, exports.getData)(state)
    .filter(tx => tx.from === address && tx.status === status)
    .sort(sortByTimestamp);
exports.getTransactionsByStatus = getTransactionsByStatus;
const getTransactions = (state, address) => (0, exports.getData)(state)
    .filter(tx => tx.from === address)
    .sort(sortByTimestamp);
exports.getTransactions = getTransactions;
const getPendingTransactions = (state, address) => (0, exports.getData)(state)
    .filter(tx => tx.from === address && (0, utils_1.isPending)(tx.status))
    .sort(sortByTimestamp);
exports.getPendingTransactions = getPendingTransactions;
const getTransactionHistory = (state, address) => (0, exports.getData)(state)
    .filter(tx => tx.from === address && !(0, utils_1.isPending)(tx.status))
    .sort(sortByTimestamp);
exports.getTransactionHistory = getTransactionHistory;
const getTransactionsByType = (state, address, type) => (0, exports.getData)(state)
    .filter(tx => tx.from === address && tx.actionType === type)
    .sort(sortByTimestamp);
exports.getTransactionsByType = getTransactionsByType;
//# sourceMappingURL=selectors.js.map