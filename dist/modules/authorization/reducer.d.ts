import { LoadingState } from '../loading/reducer';
import { FetchTransactionSuccessAction } from '../transaction/actions';
import { FetchAuthorizationsRequestAction, FetchAuthorizationsSuccessAction, FetchAuthorizationsFailureAction, GrantTokenRequestAction, GrantTokenSuccessAction, GrantTokenFailureAction, RevokeTokenRequestAction, RevokeTokenSuccessAction, RevokeTokenFailureAction } from './actions';
import { Authorization } from './types';
export declare type AuthorizationState = {
    data: Authorization[];
    loading: LoadingState;
    error: string | null;
};
declare type AuthorizationReducerAction = FetchAuthorizationsRequestAction | FetchAuthorizationsSuccessAction | FetchAuthorizationsFailureAction | GrantTokenRequestAction | GrantTokenSuccessAction | GrantTokenFailureAction | RevokeTokenRequestAction | RevokeTokenSuccessAction | RevokeTokenFailureAction | FetchTransactionSuccessAction;
export declare function authorizationReducer(state: AuthorizationState | undefined, action: AuthorizationReducerAction): {
    data: any[];
    loading: LoadingState;
    error: string | null;
};
export {};
