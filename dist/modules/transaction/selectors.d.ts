import { Transaction, TransactionStatus } from './types';
import { TransactionState } from './reducer';
export declare const getState: (state: any) => TransactionState;
export declare const getData: (state: any) => TransactionState['data'];
export declare const getLoading: (state: any) => TransactionState['loading'];
export declare const getTransaction: (state: any, hash: string) => Transaction | undefined;
export declare const getTransactionsByStatus: (state: any, address: string, status: TransactionStatus) => Transaction[];
export declare const getTransactions: (state: any, address: string) => Transaction[];
export declare const getPendingTransactions: (state: any, address: string) => Transaction[];
export declare const getTransactionHistory: (state: any, address: string) => Transaction[];
export declare const getTransactionsByType: (state: any, address: string, type: string) => Transaction[];
