/// <reference types="react" />
import { EthereumProvider } from 'web3x/providers/ethereum-provider';
import { Dispatch } from 'redux';
import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { connectWalletRequest, ConnectWalletRequestAction, changeAccount, changeNetwork, ChangeAccountAction, ChangeNetworkAction } from '../../modules/wallet/actions';
export declare type Props = {
    address?: string;
    chainId?: ChainId;
    isConnected: boolean;
    isConnecting: boolean;
    children: React.ReactNode;
    onConnect: typeof connectWalletRequest;
    onChangeAccount: typeof changeAccount;
    onChangeNetwork: typeof changeNetwork;
};
export declare type MapStateProps = Pick<Props, 'address' | 'chainId' | 'isConnected' | 'isConnecting'>;
export declare type MapDispatchProps = Pick<Props, 'address' | 'chainId' | 'onConnect' | 'onChangeAccount' | 'onChangeNetwork'>;
export declare type MapDispatch = Dispatch<ConnectWalletRequestAction | ChangeAccountAction | ChangeNetworkAction>;
export declare type EventType = 'accountsChanged' | 'chainChanged' | 'networkChanged';
export declare type EmitterMethod = 'on' | 'removeListener';
export declare type AccountsChangedHandler = (accounts: string[]) => void;
export declare type NetworkChangedHandler = (chainId: string) => void;
export declare type Handler = AccountsChangedHandler | NetworkChangedHandler;
export declare type ProviderWindow = Window & {
    ethereum?: EthereumProvider;
};
