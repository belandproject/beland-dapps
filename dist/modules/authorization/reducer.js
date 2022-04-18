"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationReducer = void 0;
const reducer_1 = require("../loading/reducer");
const actions_1 = require("../transaction/actions");
const actions_2 = require("./actions");
const utils_1 = require("./utils");
const INITIAL_STATE = {
    data: [],
    loading: [],
    error: null
};
function authorizationReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case actions_2.GRANT_TOKEN_REQUEST:
        case actions_2.REVOKE_TOKEN_REQUEST:
        case actions_2.GRANT_TOKEN_SUCCESS:
        case actions_2.REVOKE_TOKEN_SUCCESS:
        case actions_2.FETCH_AUTHORIZATIONS_REQUEST: {
            return Object.assign(Object.assign({}, state), { loading: reducer_1.loadingReducer(state.loading, action) });
        }
        case actions_2.FETCH_AUTHORIZATIONS_SUCCESS: {
            const { authorizations } = action.payload;
            return {
                loading: reducer_1.loadingReducer(state.loading, action),
                error: null,
                data: [...state.data, ...authorizations]
            };
        }
        case actions_2.GRANT_TOKEN_FAILURE:
        case actions_2.REVOKE_TOKEN_FAILURE:
        case actions_2.FETCH_AUTHORIZATIONS_FAILURE: {
            return Object.assign(Object.assign({}, state), { loading: reducer_1.loadingReducer(state.loading, action), error: action.payload.error });
        }
        case actions_1.FETCH_TRANSACTION_SUCCESS: {
            const transaction = action.payload.transaction;
            switch (transaction.actionType) {
                case actions_2.GRANT_TOKEN_SUCCESS: {
                    const { authorization } = transaction.payload;
                    return Object.assign(Object.assign({}, state), { data: [...state.data, Object.assign({}, authorization)] });
                }
                case actions_2.REVOKE_TOKEN_SUCCESS: {
                    const { authorization } = transaction.payload;
                    return Object.assign(Object.assign({}, state), { data: [
                            ...state.data.filter(stateAuthorization => !utils_1.areEqual(stateAuthorization, authorization))
                        ] });
                }
                default:
                    return state;
            }
        }
        default:
            return state;
    }
}
exports.authorizationReducer = authorizationReducer;
//# sourceMappingURL=reducer.js.map