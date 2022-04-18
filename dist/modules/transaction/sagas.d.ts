import { ForkEffect } from 'redux-saga/effects';
import { TransactionStatus } from './types';
export declare function transactionSaga(): IterableIterator<ForkEffect>;
export declare class FailedTransactionError extends Error {
    hash: string;
    status: TransactionStatus;
    constructor(hash: string, status: TransactionStatus);
}
