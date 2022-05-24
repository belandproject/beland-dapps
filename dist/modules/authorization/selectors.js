"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getApproveTransactions = exports.getAllowTransactions = exports.getTransactions = exports.getError = exports.isLoading = exports.getLoading = exports.getData = exports.getState = void 0;
const selectors_1 = require("../transaction/selectors");
const selectors_2 = require("../wallet/selectors");
const actions_1 = require("./actions");
const types_1 = require("./types");
const getState = state => state.authorization;
exports.getState = getState;
const getData = (state) => (0, exports.getState)(state).data;
exports.getData = getData;
const getLoading = (state) => (0, exports.getState)(state).loading;
exports.getLoading = getLoading;
const isLoading = (state) => (0, exports.getLoading)(state).length > 0;
exports.isLoading = isLoading;
const getError = (state) => (0, exports.getState)(state).error;
exports.getError = getError;
const getTransactions = (state) => (0, selectors_1.getTransactionsByType)(state, (0, selectors_2.getAddress)(state) || '', actions_1.GRANT_TOKEN_SUCCESS);
exports.getTransactions = getTransactions;
const getAllowTransactions = (state) => (0, exports.getTransactions)(state).filter(transaction => transaction.payload.authorization.type === types_1.AuthorizationType.ALLOWANCE);
exports.getAllowTransactions = getAllowTransactions;
const getApproveTransactions = (state) => (0, exports.getTransactions)(state).filter(transaction => transaction.payload.authorization.type === types_1.AuthorizationType.APPROVAL);
exports.getApproveTransactions = getApproveTransactions;
//# sourceMappingURL=selectors.js.map