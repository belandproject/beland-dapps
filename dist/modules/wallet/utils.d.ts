/// <reference types="node" />
import { EventEmitter } from 'events';
import { PopulatedTransaction, Contract, providers } from 'ethers';
import { ContractData } from '@beland/transactions';
import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { AddEthereumChainParameters, Wallet } from './types';
export declare function fetchBeanBalance(chainId: ChainId, address: string): Promise<number>;
export declare function buildWallet(): Promise<Wallet>;
export declare function getTargetNetworkProvider(chainId: ChainId): Promise<providers.Web3Provider>;
export declare enum TransactionEventType {
    ERROR = "error",
    SUCCESS = "success"
}
export declare type TransactionEventData<T extends TransactionEventType> = {
    type: T;
} & (T extends TransactionEventType.ERROR ? {
    error: Error;
} : T extends TransactionEventType.SUCCESS ? {
    txHash: string;
} : {});
export declare const transactionEvents: EventEmitter;
/**
 * Sends a transaction either as a meta transaction or as a regular transaction.
 * - If the contract chain id differs from the current provider chain id, a meta transaction will be sent.
 * - If the contract chain id is the same as the current provider chain id, a regular transaction will be sent.
 * @param contract - The contract to send the transaction to.
 * @param contractMethodName - The name of the contract method to call.
 * @param contractMethodArgs - The arguments to pass to the contract method.
 */
export declare function sendTransaction(contract: ContractData, contractMethodName: string, ...contractArguments: any[]): Promise<string>;
/**
 * @deprecated
 * Sends a transaction either as a meta transaction or as a regular transaction.
 * - If the contract chain id differs from the current provider chain id, a meta transaction will be sent.
 * - If the contract chain id is the same as the current provider chain id, a regular transaction will be sent.
 * @param contract - The contract to send the transaction to.
 * @param getPopulatedTransaction - A function that returns a populated transaction.
 */
export declare function sendTransaction(contract: ContractData, getPopulatedTransaction: (populateTransaction: Contract['populateTransaction']) => Promise<PopulatedTransaction>): Promise<string>;
export declare function getAddEthereumChainParameters(chainId: ChainId): AddEthereumChainParameters;
