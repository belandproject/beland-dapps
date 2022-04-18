"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionReducer = void 0;
const types_1 = require("./types");
const utils_1 = require("./utils");
const reducer_1 = require("../loading/reducer");
const actions_1 = require("./actions");
const INITIAL_STATE = {
    data: [],
    loading: [],
    error: null
};
function transactionReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions_1.FETCH_TRANSACTION_REQUEST: {
            const actionRef = action.payload.action;
            const transaction = utils_1.getTransactionFromAction(actionRef);
            const otherTransactions = state.data.filter(otherTransaction => otherTransaction.hash !== transaction.hash);
            return {
                loading: reducer_1.loadingReducer(state.loading, action),
                error: null,
                data: [
                    ...otherTransactions,
                    Object.assign(Object.assign({}, transaction), { timestamp: Date.now(), from: action.payload.address.toLowerCase(), actionType: actionRef.type, 
                        // these always start as null, and they get updated by the saga
                        status: null, nonce: null, replacedBy: null })
                ]
            };
        }
        case actions_1.FETCH_TRANSACTION_SUCCESS: {
            const actionTransaction = action.payload.transaction;
            return {
                loading: reducer_1.loadingReducer(state.loading, action),
                error: null,
                data: state.data.map((transaction) => 
                // prettier-ignore
                actionTransaction.hash === transaction.hash
                    ? Object.assign(Object.assign({}, transaction), actionTransaction) : transaction)
            };
        }
        case actions_1.FETCH_TRANSACTION_FAILURE: {
            const { hash, status, message } = action.payload;
            return {
                loading: reducer_1.loadingReducer(state.loading, action),
                error: message,
                data: state.data.map((transaction) => 
                // prettier-ignore
                hash === transaction.hash
                    ? Object.assign(Object.assign({}, transaction), { status }) : transaction)
            };
        }
        case actions_1.UPDATE_TRANSACTION_STATUS: {
            return {
                loading: reducer_1.loadingReducer(state.loading, action),
                error: null,
                data: state.data.map((transaction) => 
                // prettier-ignore
                action.payload.hash === transaction.hash
                    ? Object.assign(Object.assign({}, transaction), { status: action.payload.status }) : transaction)
            };
        }
        case actions_1.FIX_REVERTED_TRANSACTION: {
            return {
                loading: reducer_1.loadingReducer(state.loading, action),
                error: null,
                data: state.data.map((transaction) => 
                // prettier-ignore
                action.payload.hash === transaction.hash
                    ? Object.assign(Object.assign({}, transaction), { status: types_1.TransactionStatus.CONFIRMED }) : transaction)
            };
        }
        case actions_1.UPDATE_TRANSACTION_NONCE: {
            return {
                loading: reducer_1.loadingReducer(state.loading, action),
                error: null,
                data: state.data.map((transaction) => action.payload.hash === transaction.hash
                    ? Object.assign(Object.assign({}, transaction), { nonce: action.payload.nonce }) : transaction)
            };
        }
        case actions_1.REPLACE_TRANSACTION_SUCCESS: {
            return {
                loading: reducer_1.loadingReducer(state.loading, action),
                error: null,
                data: state.data.map((transaction) => action.payload.hash === transaction.hash
                    ? Object.assign(Object.assign({}, transaction), { status: types_1.TransactionStatus.REPLACED, replacedBy: action.payload.replaceBy }) : transaction)
            };
        }
        case actions_1.CLEAR_TRANSACTIONS: {
            return Object.assign(Object.assign({}, state), { data: state.data.filter(transaction => transaction.from.toLowerCase() !==
                    action.payload.address.toLowerCase() &&
                    (action.payload.clearPendings || !utils_1.isPending(transaction.status))) });
        }
        case actions_1.CLEAR_TRANSACTION: {
            return Object.assign(Object.assign({}, state), { data: state.data.filter(transaction => transaction.hash !== action.payload.hash) });
        }
        default:
            return state;
    }
}
exports.transactionReducer = transactionReducer;
//# sourceMappingURL=reducer.js.map