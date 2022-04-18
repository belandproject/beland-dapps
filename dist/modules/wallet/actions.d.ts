import { ProviderType } from '@beland/schemas/dist/dapps/provider-type';
import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { Wallet } from './types';
export declare const CONNECT_WALLET_REQUEST = "[Request] Connect Wallet";
export declare const CONNECT_WALLET_SUCCESS = "[Success] Connect Wallet";
export declare const CONNECT_WALLET_FAILURE = "[Failure] Connect Wallet";
export declare const connectWalletRequest: () => import("typesafe-actions/dist/types").EmptyAction<"[Request] Connect Wallet">;
export declare const connectWalletSuccess: (wallet: Wallet) => import("typesafe-actions/dist/types").PayloadAction<"[Success] Connect Wallet", {
    wallet: Wallet;
}>;
export declare const connectWalletFailure: (error: string) => import("typesafe-actions/dist/types").PayloadAction<"[Failure] Connect Wallet", {
    error: string;
}>;
export declare type ConnectWalletRequestAction = ReturnType<typeof connectWalletRequest>;
export declare type ConnectWalletSuccessAction = ReturnType<typeof connectWalletSuccess>;
export declare type ConnectWalletFailureAction = ReturnType<typeof connectWalletFailure>;
export declare const ENABLE_WALLET_REQUEST = "[Request] Enable Wallet";
export declare const ENABLE_WALLET_SUCCESS = "[Success] Enable Wallet";
export declare const ENABLE_WALLET_FAILURE = "[Failure] Enable Wallet";
export declare const enableWalletRequest: (providerType: ProviderType) => import("typesafe-actions/dist/types").PayloadAction<"[Request] Enable Wallet", {
    providerType: ProviderType;
}>;
export declare const enableWalletSuccess: (providerType: ProviderType) => import("typesafe-actions/dist/types").PayloadAction<"[Success] Enable Wallet", {
    providerType: ProviderType;
}>;
export declare const enableWalletFailure: (error: string) => import("typesafe-actions/dist/types").PayloadAction<"[Failure] Enable Wallet", {
    error: string;
}>;
export declare type EnableWalletRequestAction = ReturnType<typeof enableWalletRequest>;
export declare type EnableWalletSuccessAction = ReturnType<typeof enableWalletSuccess>;
export declare type EnableWalletFailureAction = ReturnType<typeof enableWalletFailure>;
export declare const CHANGE_ACCOUNT = "Change Account";
export declare const changeAccount: (wallet: Wallet) => import("typesafe-actions/dist/types").PayloadAction<"Change Account", {
    wallet: Wallet;
}>;
export declare type ChangeAccountAction = ReturnType<typeof changeAccount>;
export declare const CHANGE_NETWORK = "Change Network";
export declare const changeNetwork: (wallet: Wallet) => import("typesafe-actions/dist/types").PayloadAction<"Change Network", {
    wallet: Wallet;
}>;
export declare type ChangeNetworkAction = ReturnType<typeof changeNetwork>;
export declare const DISCONNECT_WALLET = "Disconnect";
export declare const disconnectWallet: () => import("typesafe-actions/dist/types").EmptyAction<"Disconnect">;
export declare type DisconnectWalletAction = ReturnType<typeof disconnectWallet>;
export declare const FETCH_WALLET_REQUEST = "[Request] Fetch Wallet";
export declare const FETCH_WALLET_SUCCESS = "[Success] Fetch Wallet";
export declare const FETCH_WALLET_FAILURE = "[Failure] Fetch Wallet";
export declare const fetchWalletRequest: () => import("typesafe-actions/dist/types").EmptyAction<"[Request] Fetch Wallet">;
export declare const fetchWalletSuccess: (wallet: Wallet) => import("typesafe-actions/dist/types").PayloadAction<"[Success] Fetch Wallet", {
    wallet: Wallet;
}>;
export declare const fetchWalletFailure: (error: string) => import("typesafe-actions/dist/types").PayloadAction<"[Failure] Fetch Wallet", {
    error: string;
}>;
export declare type FetchWalletRequestAction = ReturnType<typeof fetchWalletRequest>;
export declare type FetchWalletSuccessAction = ReturnType<typeof fetchWalletSuccess>;
export declare type FetchWalletFailureAction = ReturnType<typeof fetchWalletFailure>;
export declare const SWITCH_NETWORK_REQUEST = "[Request] Switch Network";
export declare const SWITCH_NETWORK_SUCCESS = "[Success] Switch Network";
export declare const SWITCH_NETWORK_FAILURE = "[Failure] Switch Network";
export declare const switchNetworkRequest: (chainId: ChainId) => import("typesafe-actions/dist/types").PayloadAction<"[Request] Switch Network", {
    chainId: ChainId;
}>;
export declare const switchNetworkSuccess: (chainId: ChainId) => import("typesafe-actions/dist/types").PayloadAction<"[Success] Switch Network", {
    chainId: ChainId;
}>;
export declare const switchNetworkFailure: (chainId: ChainId, error: string) => import("typesafe-actions/dist/types").PayloadAction<"[Failure] Switch Network", {
    chainId: ChainId;
    error: string;
}>;
export declare type SwitchNetworkRequestAction = ReturnType<typeof switchNetworkRequest>;
export declare type SwitchNetworkSuccessAction = ReturnType<typeof switchNetworkSuccess>;
export declare type SwitchNetworkFailureAction = ReturnType<typeof switchNetworkFailure>;
export declare const ACCEPT_NETWORK_PARTIAL_SUPPORT = "Accept network partial support";
export declare const acceptNetworkPartialSupport: () => import("typesafe-actions/dist/types").EmptyAction<"Accept network partial support">;
export declare type AcceptNetworkPartialSupportAction = ReturnType<typeof acceptNetworkPartialSupport>;
export declare const SET_APP_CHAIN_ID = "Set App ChainId";
export declare const setAppChainId: (chainId: ChainId) => import("typesafe-actions/dist/types").PayloadAction<"Set App ChainId", {
    chainId: ChainId;
}>;
export declare type SetAppChainIdAction = ReturnType<typeof setAppChainId>;
