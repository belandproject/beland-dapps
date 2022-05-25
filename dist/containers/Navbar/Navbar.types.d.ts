import { Dispatch } from 'redux';
import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { NavbarProps as NavbarComponentProps } from '@beland/uikit/dist/components/Navbar/Navbar';
import { acceptNetworkPartialSupport, AcceptNetworkPartialSupportAction, disconnectWallet, switchNetworkRequest, SwitchNetworkRequestAction } from '../../modules/wallet/actions';
export declare type NavbarProps = NavbarComponentProps & {
    chainId?: ChainId;
    hasTranslations?: boolean;
    onSwitchNetwork: typeof switchNetworkRequest;
    onSignOut: typeof disconnectWallet;
    hasAcceptedNetworkPartialSupport: boolean;
    onAcceptNetworkPartialSupport: typeof acceptNetworkPartialSupport;
};
export declare type MapStateProps = Pick<NavbarProps, 'bean' | 'address' | 'isConnected' | 'isConnecting' | 'hasTranslations' | 'chainId' | 'hasAcceptedNetworkPartialSupport'>;
export declare type MapDispatchProps = Pick<NavbarProps, 'onSwitchNetwork' | 'onSignOut' | 'onAcceptNetworkPartialSupport'>;
export declare type MapDispatch = Dispatch<SwitchNetworkRequestAction | AcceptNetworkPartialSupportAction>;
