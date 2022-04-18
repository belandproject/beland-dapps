import { AnyAction } from 'redux';
import { Transaction, AnyTransaction } from './types';
export declare const FETCH_TRANSACTION_REQUEST = "[Request] Fetch Transaction";
export declare const FETCH_TRANSACTION_SUCCESS = "[Success] Fetch Transaction";
export declare const FETCH_TRANSACTION_FAILURE = "[Failure] Fetch Transaction";
export declare const fetchTransactionRequest: (address: string, hash: string, actionObject: AnyAction) => import("typesafe-actions/dist/types").PayloadAction<"[Request] Fetch Transaction", {
    address: string;
    hash: string;
    action: AnyAction;
}>;
export declare const fetchTransactionSuccess: (transaction: Transaction) => import("typesafe-actions/dist/types").PayloadAction<"[Success] Fetch Transaction", {
    transaction: Transaction;
}>;
export declare const fetchTransactionFailure: (hash: string, status: AnyTransaction['status'], message: string, transaction: Transaction) => import("typesafe-actions/dist/types").PayloadAction<"[Failure] Fetch Transaction", {
    hash: string;
    status: import("./types").TransactionStatus;
    message: string;
    transaction: Transaction;
}>;
export declare type FetchTransactionRequestAction = ReturnType<typeof fetchTransactionRequest>;
export declare type FetchTransactionSuccessAction = ReturnType<typeof fetchTransactionSuccess>;
export declare type FetchTransactionFailureAction = ReturnType<typeof fetchTransactionFailure>;
export declare const WATCH_PENDING_TRANSACTIONS = "Watch Pending Transactions";
export declare const watchPendingTransactions: () => import("typesafe-actions/dist/types").PayloadAction<"Watch Pending Transactions", {}>;
export declare type WatchPendingTransactionsAction = ReturnType<typeof watchPendingTransactions>;
export declare const UPDATE_TRANSACTION_STATUS = "Update Transaction Status";
export declare const updateTransactionStatus: (hash: string, status: AnyTransaction['status'] | null) => import("typesafe-actions/dist/types").PayloadAction<"Update Transaction Status", {
    hash: string;
    status: import("./types").TransactionStatus | null;
}>;
export declare type UpdateTransactionStatusAction = ReturnType<typeof updateTransactionStatus>;
export declare const UPDATE_TRANSACTION_NONCE = "Update Transaction Nonce";
export declare const updateTransactionNonce: (hash: string, nonce: number) => import("typesafe-actions/dist/types").PayloadAction<"Update Transaction Nonce", {
    hash: string;
    nonce: number;
}>;
export declare type UpdateTransactionNonceAction = ReturnType<typeof updateTransactionNonce>;
export declare const WATCH_DROPPED_TRANSACTIONS = "Watch Dropped Transactions";
export declare const watchDroppedTransactions: () => import("typesafe-actions/dist/types").PayloadAction<"Watch Dropped Transactions", {}>;
export declare type WatchDroppedTransactionsAction = ReturnType<typeof watchDroppedTransactions>;
export declare const WATCH_REVERTED_TRANSACTION = "Watch Reverted Transaction";
export declare const watchRevertedTransaction: (hash: string) => import("typesafe-actions/dist/types").PayloadAction<"Watch Reverted Transaction", {
    hash: string;
}>;
export declare type WatchRevertedTransactionAction = ReturnType<typeof watchRevertedTransaction>;
export declare const FIX_REVERTED_TRANSACTION = "Fix Reverted Transaction";
export declare const fixRevertedTransaction: (hash: string) => import("typesafe-actions/dist/types").PayloadAction<"Fix Reverted Transaction", {
    hash: string;
}>;
export declare type FixRevertedTransactionAction = ReturnType<typeof fixRevertedTransaction>;
export declare const REPLACE_TRANSACTION_REQUEST = "[Request] Replace Transaction";
export declare const REPLACE_TRANSACTION_SUCCESS = "[Success] Replace Transaction";
export declare const REPLACE_TRANSACTION_FAILURE = "[Failure] Replace Transaction";
export declare const replaceTransactionRequest: (hash: string, nonce: number) => import("typesafe-actions/dist/types").PayloadAction<"[Request] Replace Transaction", {
    hash: string;
    nonce: number;
}>;
export declare const replaceTransactionSuccess: (hash: string, replaceBy: string) => import("typesafe-actions/dist/types").PayloadAction<"[Success] Replace Transaction", {
    hash: string;
    replaceBy: string;
}>;
export declare const replaceTransactionFailure: (hash: string, error: string) => import("typesafe-actions/dist/types").PayloadAction<"[Failure] Replace Transaction", {
    hash: string;
    error: string;
}>;
export declare type ReplaceTransactionRequestAction = ReturnType<typeof replaceTransactionRequest>;
export declare type ReplaceTransactionSuccessAction = ReturnType<typeof replaceTransactionSuccess>;
export declare type ReplaceTransactionFailureAction = ReturnType<typeof replaceTransactionFailure>;
export declare const CLEAR_TRANSACTIONS = "Clear Transactions";
export declare const clearTransactions: (address: string, clearPendings?: boolean) => import("typesafe-actions/dist/types").PayloadAction<"Clear Transactions", {
    address: string;
    clearPendings: boolean;
}>;
export declare type ClearTransactionsAction = ReturnType<typeof clearTransactions>;
export declare const CLEAR_TRANSACTION = "Clear Transaction";
export declare const clearTransaction: (hash: string) => import("typesafe-actions/dist/types").PayloadAction<"Clear Transaction", {
    hash: string;
}>;
export declare type ClearTransactionAction = ReturnType<typeof clearTransaction>;
