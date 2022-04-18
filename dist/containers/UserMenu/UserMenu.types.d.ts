import { Dispatch } from 'redux';
import { UserMenuProps } from '@beland/uikit/dist/components/UserMenu/UserMenu';
import { ConnectWalletRequestAction, DisconnectWalletAction } from '../../modules/wallet/actions';
export declare type Props = UserMenuProps & {
    hasTranslations: boolean;
};
export declare type MapStateProps = Pick<Props, 'isSignedIn' | 'isSigningIn' | 'address' | 'avatar' | 'manaBalances' | 'hasActivity' | 'hasTranslations'>;
export declare type MapDispatchProps = Pick<Props, 'onSignOut'>;
export declare type MapDispatch = Dispatch<ConnectWalletRequestAction | DisconnectWalletAction>;
export declare type OwnProps = Partial<Props>;
