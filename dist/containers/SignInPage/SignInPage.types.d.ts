import { Dispatch } from 'redux';
import { ProviderType } from '@beland/schemas/dist/dapps/provider-type';
import { SignInProps } from '@beland/uikit/dist/components/SignIn/SignIn';
import { EnableWalletRequestAction } from '../../modules/wallet/actions';
export declare type SignInPageProps = Omit<SignInProps, 'onConnect'> & {
    onConnect: (providerType: ProviderType) => any;
    hasTranslations?: boolean;
};
export declare type SignInPageState = {
    isLoginModalOpen: boolean;
};
export declare type MapStateProps = Pick<SignInPageProps, 'isConnecting' | 'isConnected' | 'hasTranslations' | 'hasError'>;
export declare type MapDispatchProps = Pick<SignInPageProps, 'onConnect'>;
export declare type MapDispatch = Dispatch<EnableWalletRequestAction>;
