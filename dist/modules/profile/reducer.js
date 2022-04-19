"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileReducer = exports.INITIAL_STATE = void 0;
const reducer_1 = require("../loading/reducer");
const actions_1 = require("./actions");
exports.INITIAL_STATE = {
    data: {},
    loading: [],
    error: null
};
const profileReducer = (state = exports.INITIAL_STATE, action) => {
    switch (action.type) {
        case actions_1.SET_PROFILE_AVATAR_DESCRIPTION_REQUEST:
        case actions_1.LOAD_PROFILE_REQUEST: {
            return Object.assign(Object.assign({}, state), { loading: reducer_1.loadingReducer(state.loading, action), error: null });
        }
        case actions_1.SET_PROFILE_AVATAR_DESCRIPTION_FAILURE:
        case actions_1.LOAD_PROFILE_FAILURE: {
            return Object.assign(Object.assign({}, state), { loading: reducer_1.loadingReducer(state.loading, action), error: action.payload.error });
        }
        case actions_1.SET_PROFILE_AVATAR_DESCRIPTION_SUCCESS: {
            const { address, description, version } = action.payload;
            const newAvatar = Object.assign(Object.assign({}, state.data[address].avatars[0]), { description,
                version });
            return Object.assign(Object.assign({}, state), { data: Object.assign(Object.assign({}, state.data), { [address]: Object.assign(Object.assign({}, state.data[address]), { avatars: [newAvatar, ...state.data[address].avatars.slice(1)] }) }), loading: reducer_1.loadingReducer(state.loading, action) });
        }
        case actions_1.LOAD_PROFILE_SUCCESS: {
            const { address, profile } = action.payload;
            return Object.assign(Object.assign({}, state), { data: Object.assign(Object.assign({}, state.data), { [address]: profile }), loading: reducer_1.loadingReducer(state.loading, action) });
        }
        case actions_1.CHANGE_PROFILE: {
            const { address, profile } = action.payload;
            return Object.assign(Object.assign({}, state), { data: Object.assign(Object.assign({}, state.data), { [address]: Object.assign(Object.assign({}, state.data[address]), profile) }) });
        }
        case actions_1.CLEAR_PROFILE_ERROR: {
            return Object.assign(Object.assign({}, state), { error: null });
        }
        default:
            return state;
    }
};
exports.profileReducer = profileReducer;
//# sourceMappingURL=reducer.js.map