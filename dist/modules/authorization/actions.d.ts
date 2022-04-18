import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { Authorization } from './types';
export declare const FETCH_AUTHORIZATIONS_REQUEST = "[Request] Fetch Authorizations";
export declare const FETCH_AUTHORIZATIONS_SUCCESS = "[Success] Fetch Authorizations";
export declare const FETCH_AUTHORIZATIONS_FAILURE = "[Failure] Fetch Authorizations";
export declare const fetchAuthorizationsRequest: (authorizations: Authorization[]) => import("typesafe-actions/dist/types").PayloadAction<"[Request] Fetch Authorizations", {
    authorizations: Authorization[];
}>;
export declare const fetchAuthorizationsSuccess: (authorizations: Authorization[]) => import("typesafe-actions/dist/types").PayloadAction<"[Success] Fetch Authorizations", {
    authorizations: Authorization[];
}>;
export declare const fetchAuthorizationsFailure: (authorizations: Authorization[], error: string) => import("typesafe-actions/dist/types").PayloadAction<"[Failure] Fetch Authorizations", {
    authorizations: Authorization[];
    error: string;
}>;
export declare type FetchAuthorizationsRequestAction = ReturnType<typeof fetchAuthorizationsRequest>;
export declare type FetchAuthorizationsSuccessAction = ReturnType<typeof fetchAuthorizationsSuccess>;
export declare type FetchAuthorizationsFailureAction = ReturnType<typeof fetchAuthorizationsFailure>;
export declare const GRANT_TOKEN_REQUEST = "[Request] Grant Token";
export declare const GRANT_TOKEN_SUCCESS = "[Success] Grant Token";
export declare const GRANT_TOKEN_FAILURE = "[Failure] Grant Token";
export declare const grantTokenRequest: (authorization: Authorization) => import("typesafe-actions/dist/types").PayloadAction<"[Request] Grant Token", {
    authorization: Authorization;
}>;
export declare const grantTokenSuccess: (authorization: Authorization, chainId: ChainId, txHash: string) => import("typesafe-actions/dist/types").PayloadAction<"[Success] Grant Token", {
    authorization: Authorization;
}>;
export declare const grantTokenFailure: (authorization: Authorization, error: string) => import("typesafe-actions/dist/types").PayloadAction<"[Failure] Grant Token", {
    authorization: Authorization;
    error: string;
}>;
export declare type GrantTokenRequestAction = ReturnType<typeof grantTokenRequest>;
export declare type GrantTokenSuccessAction = ReturnType<typeof grantTokenSuccess>;
export declare type GrantTokenFailureAction = ReturnType<typeof grantTokenFailure>;
export declare const REVOKE_TOKEN_REQUEST = "[Request] Revoke Token";
export declare const REVOKE_TOKEN_SUCCESS = "[Success] Revoke Token";
export declare const REVOKE_TOKEN_FAILURE = "[Failure] Revoke Token";
export declare const revokeTokenRequest: (authorization: Authorization) => import("typesafe-actions/dist/types").PayloadAction<"[Request] Revoke Token", {
    authorization: Authorization;
}>;
export declare const revokeTokenSuccess: (authorization: Authorization, chainId: ChainId, txHash: string) => import("typesafe-actions/dist/types").PayloadAction<"[Success] Revoke Token", {
    authorization: Authorization;
}>;
export declare const revokeTokenFailure: (authorization: Authorization, error: string) => import("typesafe-actions/dist/types").PayloadAction<"[Failure] Revoke Token", {
    authorization: Authorization;
    error: string;
}>;
export declare type RevokeTokenRequestAction = ReturnType<typeof revokeTokenRequest>;
export declare type RevokeTokenSuccessAction = ReturnType<typeof revokeTokenSuccess>;
export declare type RevokeTokenFailureAction = ReturnType<typeof revokeTokenFailure>;
