import { Transaction } from './types';
import { LoadingState } from '../loading/reducer';
import { FetchTransactionRequestAction, FetchTransactionSuccessAction, FetchTransactionFailureAction, UpdateTransactionStatusAction, UpdateTransactionNonceAction, ReplaceTransactionSuccessAction, ClearTransactionsAction, ClearTransactionAction, FixRevertedTransactionAction } from './actions';
export declare type TransactionState = {
    data: Transaction[];
    loading: LoadingState;
    error: string | null;
};
export declare type TransactionReducerAction = FetchTransactionRequestAction | FetchTransactionSuccessAction | FetchTransactionFailureAction | UpdateTransactionStatusAction | UpdateTransactionNonceAction | ReplaceTransactionSuccessAction | FixRevertedTransactionAction | ClearTransactionsAction | ClearTransactionAction;
export declare function transactionReducer(state: TransactionState | undefined, action: TransactionReducerAction): TransactionState;
