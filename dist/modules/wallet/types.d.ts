import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { Network } from '@beland/schemas/dist/dapps/network';
import { Provider } from '@beland/connect/dist/types';
import { ProviderType } from '@beland/schemas/dist/dapps/provider-type';
export { Provider, ProviderType };
export declare type NetworkData = {
    bean: number;
    chainId: ChainId;
};
export declare type Networks = Record<Network, NetworkData>;
export interface Wallet {
    address: string;
    networks: Networks;
    network: Network;
    chainId: ChainId;
    providerType: ProviderType;
}
export interface CreateWalletOptions {
    BEAN_ADDRESS?: string;
    CHAIN_ID: string | number;
    TRANSACTIONS_API_URL?: string;
    POLL_INTERVAL?: number;
}
export declare type AddEthereumChainParameters = {
    chainId: string;
    chainName: string;
    nativeCurrency: {
        name: string;
        symbol: string;
        decimals: 18;
    };
    rpcUrls: string[];
    blockExplorerUrls?: string[];
    iconUrls?: string[];
};
