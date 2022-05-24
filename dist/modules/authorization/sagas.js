"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationSaga = exports.createAuthorizationSaga = void 0;
const effects_1 = require("redux-saga/effects");
const multicall_1 = require("@0xsequence/multicall");
const ethers_1 = require("ethers");
const transactions_1 = require("@beland/transactions");
const eth_1 = require("../../lib/eth");
const utils_1 = require("./utils");
const actions_1 = require("./actions");
const types_1 = require("./types");
const utils_2 = require("../wallet/utils");
function createAuthorizationSaga() {
    return function* authorizationSaga() {
        yield (0, effects_1.takeEvery)(actions_1.FETCH_AUTHORIZATIONS_REQUEST, handleFetchAuthorizationsRequest);
        yield (0, effects_1.takeEvery)(actions_1.GRANT_TOKEN_REQUEST, handleGrantTokenRequest);
        yield (0, effects_1.takeEvery)(actions_1.REVOKE_TOKEN_REQUEST, handleRevokeTokenRequest);
    };
    function* handleFetchAuthorizationsRequest(action) {
        const { authorizations } = action.payload;
        try {
            const promises = [];
            const multicallProviders = {};
            for (const authorization of authorizations) {
                if (!(0, utils_1.isValidType)(authorization.type)) {
                    throw new Error(`Invalid authorization type ${authorization.type}`);
                }
                const { chainId } = authorization;
                if (!multicallProviders[chainId]) {
                    // provider party 🎉
                    const provider = yield (0, effects_1.call)(() => (0, eth_1.getNetworkProvider)(chainId));
                    const ethersProvider = new ethers_1.providers.Web3Provider(provider);
                    const multicallProvider = new multicall_1.providers.MulticallProvider(ethersProvider);
                    multicallProviders[chainId] = multicallProvider;
                }
                switch (authorization.type) {
                    case types_1.AuthorizationType.ALLOWANCE:
                        const erc20 = new ethers_1.Contract(authorization.contractAddress, [
                            'function allowance(address owner, address spender) view returns (uint256)'
                        ], multicallProviders[chainId]);
                        promises.push(
                        // @ts-ignore
                        erc20
                            .allowance(authorization.address, authorization.authorizedAddress)
                            .then((allowance) => allowance.gt(0) ? authorization : null)
                            .catch((error) => {
                            console.warn(`Error fetching allowance`, authorization, error);
                            return null;
                        }));
                        break;
                    case types_1.AuthorizationType.APPROVAL:
                        const erc721 = new ethers_1.Contract(authorization.contractAddress, [
                            'function isApprovedForAll(address owner, address operator) view returns (bool)'
                        ], multicallProviders[chainId]);
                        promises.push(
                        // @ts-ignore
                        erc721
                            .isApprovedForAll(authorization.address, authorization.authorizedAddress)
                            .then((isApproved) => isApproved ? authorization : null)
                            .catch((error) => {
                            console.warn(`Error fetching approval`, authorization, error);
                            return null;
                        }));
                        break;
                }
            }
            const authorizationsToStore = yield (0, effects_1.call)(() => __awaiter(this, void 0, void 0, function* () {
                const results = yield Promise.all(promises);
                return results.filter(result => !!result); // filter nulls, or undefineds due to caught promises
            }));
            yield (0, effects_1.put)((0, actions_1.fetchAuthorizationsSuccess)(authorizationsToStore));
        }
        catch (error) {
            yield (0, effects_1.put)((0, actions_1.fetchAuthorizationsFailure)(authorizations, error.message));
        }
    }
    function* handleGrantTokenRequest(action) {
        const { authorization } = action.payload;
        try {
            const txHash = yield (0, effects_1.call)(() => changeAuthorization(authorization, types_1.AuthorizationAction.GRANT));
            yield (0, effects_1.put)((0, actions_1.grantTokenSuccess)(authorization, authorization.chainId, txHash));
        }
        catch (error) {
            yield (0, effects_1.put)((0, actions_1.grantTokenFailure)(authorization, error.message));
        }
    }
    function* handleRevokeTokenRequest(action) {
        const { authorization } = action.payload;
        try {
            const txHash = yield (0, effects_1.call)(() => changeAuthorization(authorization, types_1.AuthorizationAction.REVOKE));
            yield (0, effects_1.put)((0, actions_1.revokeTokenSuccess)(authorization, authorization.chainId, txHash));
        }
        catch (error) {
            yield (0, effects_1.put)((0, actions_1.revokeTokenFailure)(authorization, error.message));
        }
    }
    function changeAuthorization(authorization, action) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!(0, utils_1.isValidType)(authorization.type)) {
                throw new Error(`Invalid authorization type ${authorization.type}`);
            }
            const contract = Object.assign(Object.assign({}, (0, transactions_1.getContract)(authorization.contractName, authorization.chainId)), { address: authorization.contractAddress });
            switch (authorization.type) {
                case types_1.AuthorizationType.ALLOWANCE:
                    const amount = action === types_1.AuthorizationAction.GRANT
                        ? (0, utils_1.getTokenAmountToApprove)().toString()
                        : '0';
                    return (0, utils_2.sendTransaction)(contract, erc20 => erc20.approve(authorization.authorizedAddress, amount));
                case types_1.AuthorizationType.APPROVAL:
                    const isApproved = action === types_1.AuthorizationAction.GRANT;
                    return (0, utils_2.sendTransaction)(contract, erc712 => erc712.setApprovalForAll(authorization.authorizedAddress, isApproved));
            }
        });
    }
}
exports.createAuthorizationSaga = createAuthorizationSaga;
exports.authorizationSaga = createAuthorizationSaga();
//# sourceMappingURL=sagas.js.map