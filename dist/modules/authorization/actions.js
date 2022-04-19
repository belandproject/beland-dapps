"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.revokeTokenFailure = exports.revokeTokenSuccess = exports.revokeTokenRequest = exports.REVOKE_TOKEN_FAILURE = exports.REVOKE_TOKEN_SUCCESS = exports.REVOKE_TOKEN_REQUEST = exports.grantTokenFailure = exports.grantTokenSuccess = exports.grantTokenRequest = exports.GRANT_TOKEN_FAILURE = exports.GRANT_TOKEN_SUCCESS = exports.GRANT_TOKEN_REQUEST = exports.fetchAuthorizationsFailure = exports.fetchAuthorizationsSuccess = exports.fetchAuthorizationsRequest = exports.FETCH_AUTHORIZATIONS_FAILURE = exports.FETCH_AUTHORIZATIONS_SUCCESS = exports.FETCH_AUTHORIZATIONS_REQUEST = void 0;
const typesafe_actions_1 = require("typesafe-actions");
const utils_1 = require("../transaction/utils");
// Fetch authorization
exports.FETCH_AUTHORIZATIONS_REQUEST = '[Request] Fetch Authorizations';
exports.FETCH_AUTHORIZATIONS_SUCCESS = '[Success] Fetch Authorizations';
exports.FETCH_AUTHORIZATIONS_FAILURE = '[Failure] Fetch Authorizations';
const fetchAuthorizationsRequest = (authorizations) => typesafe_actions_1.action(exports.FETCH_AUTHORIZATIONS_REQUEST, { authorizations });
exports.fetchAuthorizationsRequest = fetchAuthorizationsRequest;
const fetchAuthorizationsSuccess = (authorizations) => typesafe_actions_1.action(exports.FETCH_AUTHORIZATIONS_SUCCESS, { authorizations });
exports.fetchAuthorizationsSuccess = fetchAuthorizationsSuccess;
const fetchAuthorizationsFailure = (authorizations, error) => typesafe_actions_1.action(exports.FETCH_AUTHORIZATIONS_FAILURE, { authorizations, error });
exports.fetchAuthorizationsFailure = fetchAuthorizationsFailure;
// Grant Token
exports.GRANT_TOKEN_REQUEST = '[Request] Grant Token';
exports.GRANT_TOKEN_SUCCESS = '[Success] Grant Token';
exports.GRANT_TOKEN_FAILURE = '[Failure] Grant Token';
const grantTokenRequest = (authorization) => typesafe_actions_1.action(exports.GRANT_TOKEN_REQUEST, {
    authorization
});
exports.grantTokenRequest = grantTokenRequest;
const grantTokenSuccess = (authorization, chainId, txHash) => typesafe_actions_1.action(exports.GRANT_TOKEN_SUCCESS, Object.assign(Object.assign({}, utils_1.buildTransactionPayload(chainId, txHash, {
    authorization
})), { authorization }));
exports.grantTokenSuccess = grantTokenSuccess;
const grantTokenFailure = (authorization, error) => typesafe_actions_1.action(exports.GRANT_TOKEN_FAILURE, { authorization, error });
exports.grantTokenFailure = grantTokenFailure;
// Revoke Token
exports.REVOKE_TOKEN_REQUEST = '[Request] Revoke Token';
exports.REVOKE_TOKEN_SUCCESS = '[Success] Revoke Token';
exports.REVOKE_TOKEN_FAILURE = '[Failure] Revoke Token';
const revokeTokenRequest = (authorization) => typesafe_actions_1.action(exports.REVOKE_TOKEN_REQUEST, {
    authorization
});
exports.revokeTokenRequest = revokeTokenRequest;
const revokeTokenSuccess = (authorization, chainId, txHash) => typesafe_actions_1.action(exports.REVOKE_TOKEN_SUCCESS, Object.assign(Object.assign({}, utils_1.buildTransactionPayload(chainId, txHash, {
    authorization
})), { authorization }));
exports.revokeTokenSuccess = revokeTokenSuccess;
const revokeTokenFailure = (authorization, error) => typesafe_actions_1.action(exports.REVOKE_TOKEN_FAILURE, { authorization, error });
exports.revokeTokenFailure = revokeTokenFailure;
//# sourceMappingURL=actions.js.map