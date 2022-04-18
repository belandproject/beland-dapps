import { TransactionResponse, TransactionReceipt } from 'web3x/formatters';
import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
export declare enum TransactionStatus {
    QUEUED = "queued",
    DROPPED = "dropped",
    REPLACED = "replaced",
    PENDING = "pending",
    REVERTED = "reverted",
    CONFIRMED = "confirmed"
}
export declare type DroppedTransaction = {
    status: TransactionStatus.DROPPED;
    hash: string;
    nonce: number;
};
export declare type ReplacedTransaction = {
    status: TransactionStatus.REPLACED;
    hash: string;
    nonce: number;
};
export declare type QueuedTransaction = {
    status: TransactionStatus.QUEUED;
    hash: string;
    nonce: number;
};
export declare type PendingTransaction = TransactionResponse & {
    status: TransactionStatus.PENDING;
};
export declare type RevertedTransaction = TransactionResponse & {
    status: TransactionStatus.REVERTED;
};
export declare type ConfirmedTransaction = TransactionResponse & {
    status: TransactionStatus.CONFIRMED;
    receipt: TransactionReceipt;
};
export declare type AnyTransaction = DroppedTransaction | ReplacedTransaction | QueuedTransaction | PendingTransaction | ConfirmedTransaction | RevertedTransaction;
export declare const FINISHED_STATUS: TransactionStatus[];
export declare const FAILED_STATUS: TransactionStatus[];
export declare const SUCCESS_STATUS: TransactionStatus[];
export declare type Transaction = {
    events: string[];
    hash: string;
    nonce: number | null;
    replacedBy: string | null;
    timestamp: number;
    from: string;
    actionType: string;
    status: AnyTransaction['status'] | null;
    withReceipt?: boolean;
    receipt?: {
        logs: TransactionReceipt['logs'];
    };
    payload?: any;
    chainId: ChainId;
};
export declare type TransactionPayload = {
    [hash: string]: {
        chainId: ChainId;
        hash: string;
        payload: any;
        withReceipt?: boolean;
    };
};
export declare type Arg = {
    name: string;
    type: string;
    value: string;
};
export declare type Log = {
    events: Arg[];
    name: string;
    [key: string]: any;
};
