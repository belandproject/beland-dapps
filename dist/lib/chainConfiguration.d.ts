import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { Network } from '@beland/schemas/dist/dapps/network';
export declare const MANA_GRAPH_BY_CHAIN_ID: {
    1: string;
    3: string;
    5: string;
    4: string;
    137: string;
    80001: string;
};
declare type ChainConfiguration = {
    network: Network;
    manaGraphURL: string;
    rpcURL: string;
    networkMapping: Record<Network, ChainId>;
};
export declare function getChainConfiguration(chainId: ChainId): ChainConfiguration;
export {};
