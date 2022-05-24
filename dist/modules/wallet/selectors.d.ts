import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { Network } from '@beland/schemas/dist/dapps/network';
import { WalletState } from './reducer';
export declare const getState: (state: any) => WalletState;
export declare const getData: (state: any) => import("./types").Wallet | null;
export declare const getLoading: (state: any) => import("../loading/reducer").LoadingState;
export declare const getError: (state: any) => string | null;
export declare const isConnected: (state: any) => boolean;
export declare const isConnecting: (state: any) => boolean;
export declare const isEnabling: (state: any) => boolean;
export declare const getAddress: (state: any) => string | undefined;
export declare const getChainId: (state: any) => ChainId | undefined;
export declare const getProviderType: (state: any) => import("@beland/schemas").ProviderType | undefined;
export declare const getNetwork: (state: any) => Network | undefined;
export declare const getNetworks: (state: any) => import("./types").Networks | undefined;
export declare const hasAcceptedNetworkPartialSupport: (state: any) => boolean;
export declare const getAppChainId: (state: any) => ChainId;
/**
 * @deprecated This method is deprecated, it only returns the MANA balance on Ethereum, use getNetworks() to get the MANA balances on all the networks.
 */
export declare const getMana: (state: any) => number | undefined;
