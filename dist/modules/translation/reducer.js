"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translationReducer = exports.INITIAL_STATE = void 0;
const reducer_1 = require("../loading/reducer");
const actions_1 = require("./actions");
exports.INITIAL_STATE = {
    data: {},
    locale: 'en',
    loading: [],
    error: null
};
function translationReducer(state = exports.INITIAL_STATE, action) {
    switch (action.type) {
        case actions_1.CHANGE_LOCALE:
            return Object.assign(Object.assign({}, state), { locale: action.payload.locale });
        case actions_1.FETCH_TRANSLATIONS_REQUEST:
            return Object.assign(Object.assign({}, state), { loading: reducer_1.loadingReducer(state.loading, action), data: Object.assign(Object.assign({}, state.data), { [action.payload.locale]: null }) });
        case actions_1.FETCH_TRANSLATIONS_SUCCESS:
            return Object.assign(Object.assign({}, state), { loading: reducer_1.loadingReducer(state.loading, action), locale: action.payload.locale, data: Object.assign(Object.assign({}, state.data), { [action.payload.locale]: Object.assign({}, action.payload.translations) }) });
        case actions_1.FETCH_TRANSLATIONS_FAILURE:
            return Object.assign(Object.assign({}, state), { loading: reducer_1.loadingReducer(state.loading, action), error: action.payload.error });
        default:
            return state;
    }
}
exports.translationReducer = translationReducer;
//# sourceMappingURL=reducer.js.map