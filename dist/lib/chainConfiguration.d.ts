import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { Network } from '@beland/schemas/dist/dapps/network';
export declare const BEAN_GRAPH_BY_CHAIN_ID: {};
declare type ChainConfiguration = {
    network: Network;
    beanGraphURL: string;
    rpcURL: string;
    networkMapping: Record<Network, ChainId>;
};
export declare function getChainConfiguration(chainId: ChainId): ChainConfiguration;
export {};
