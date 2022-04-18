"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.walletReducer = exports.INITIAL_STATE = void 0;
const reducer_1 = require("../loading/reducer");
const actions_1 = require("./actions");
exports.INITIAL_STATE = {
    data: null,
    loading: [],
    error: null,
    hasAcceptedNetworkPartialSupport: false,
    appChainId: null
};
function walletReducer(state = exports.INITIAL_STATE, action) {
    switch (action.type) {
        case actions_1.FETCH_WALLET_REQUEST:
        case actions_1.ENABLE_WALLET_REQUEST:
        case actions_1.CONNECT_WALLET_REQUEST: {
            return Object.assign(Object.assign({}, state), { loading: reducer_1.loadingReducer(state.loading, action) });
        }
        case actions_1.FETCH_WALLET_SUCCESS:
        case actions_1.CONNECT_WALLET_SUCCESS: {
            return Object.assign(Object.assign({}, state), { loading: reducer_1.loadingReducer(state.loading, action), error: null, data: action.payload.wallet });
        }
        case actions_1.FETCH_WALLET_FAILURE:
        case actions_1.CONNECT_WALLET_FAILURE: {
            return Object.assign(Object.assign({}, state), { loading: reducer_1.loadingReducer(state.loading, action) });
        }
        case actions_1.ENABLE_WALLET_SUCCESS: {
            return Object.assign(Object.assign({}, state), { loading: reducer_1.loadingReducer(state.loading, action), error: null, hasAcceptedNetworkPartialSupport: false });
        }
        case actions_1.ENABLE_WALLET_FAILURE: {
            return Object.assign(Object.assign({}, state), { loading: reducer_1.loadingReducer(state.loading, action), error: action.payload.error });
        }
        case actions_1.CHANGE_ACCOUNT: {
            return Object.assign(Object.assign({}, state), { error: null, data: action.payload.wallet });
        }
        case actions_1.CHANGE_NETWORK: {
            return Object.assign(Object.assign({}, state), { error: null, data: action.payload.wallet, hasAcceptedNetworkPartialSupport: false });
        }
        case actions_1.DISCONNECT_WALLET: {
            return Object.assign(Object.assign({}, state), { error: null, data: null });
        }
        case actions_1.ACCEPT_NETWORK_PARTIAL_SUPPORT: {
            return Object.assign(Object.assign({}, state), { hasAcceptedNetworkPartialSupport: true });
        }
        case actions_1.SET_APP_CHAIN_ID: {
            return Object.assign(Object.assign({}, state), { appChainId: action.payload.chainId });
        }
        default:
            return state;
    }
}
exports.walletReducer = walletReducer;
//# sourceMappingURL=reducer.js.map