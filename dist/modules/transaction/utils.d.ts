import { AnyAction } from 'redux';
import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { Transaction, TransactionPayload, TransactionStatus } from './types';
export declare const TRANSACTION_ACTION_FLAG = "_watch_tx";
export declare function buildActionRef(transaction: Transaction): {
    type: string;
    payload: TransactionPayload;
};
export declare function isTransactionAction(action: AnyAction): boolean;
export declare function getTransactionFromAction(action: AnyAction): Transaction;
export declare function getTransactionHashFromAction(action: AnyAction): Transaction['hash'];
export declare function buildTransactionPayload(chainId: ChainId, hash: string, payload?: {}): TransactionPayload;
export declare function buildTransactionWithReceiptPayload(chainId: ChainId, hash: string, payload?: {}): TransactionPayload;
export declare type TransactionHrefOptions = {
    txHash?: string;
    address?: string;
    blockNumber?: number;
};
export declare function getTransactionHref({ txHash, address, blockNumber }: TransactionHrefOptions, network?: number): string;
export declare function getTransactionOrigin(chainId?: number): "https://ropsten.etherscan.io" | "https://rinkeby.etherscan.io" | "https://goerli.etherscan.io" | "https://explorer-mainnet.maticvigil.com" | "https://explorer-mumbai.maticvigil.com" | "https://etherscan.io";
export declare function isPending(status: TransactionStatus | null): boolean;
export declare function hasFailed(status: TransactionStatus | null): boolean;
export declare function hasSucceeded(status: TransactionStatus | null): boolean;
