"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStorageMiddleware = void 0;
const storage = __importStar(require("redux-persistence"));
const redux_persistence_engine_localstorage_1 = __importDefault(require("redux-persistence-engine-localstorage"));
const redux_storage_decorator_filter_1 = __importDefault(require("redux-storage-decorator-filter"));
const localStorage_1 = require("../../lib/localStorage");
const disabledMiddleware_1 = require("../../lib/disabledMiddleware");
const actions_1 = require("./actions");
const actions_2 = require("../translation/actions");
const actions_3 = require("../transaction/actions");
const disabledLoad = (store) => setTimeout(() => store.dispatch({ type: actions_1.STORAGE_LOAD, payload: {} }));
function createStorageMiddleware(options) {
    const { storageKey, migrations = {}, paths = [], actions = [] } = options;
    if (!localStorage_1.hasLocalStorage()) {
        return {
            storageMiddleware: disabledMiddleware_1.disabledMiddleware,
            loadStorageMiddleware: disabledLoad
        };
    }
    const localStorageState = localStorage_1.migrateStorage(storageKey, migrations);
    let setItemFailure = false;
    try {
        localStorage.setItem(storageKey, JSON.stringify(localStorageState));
    }
    catch (e) {
        setItemFailure = true;
        console.warn(e.message);
    }
    const storageEngine = redux_storage_decorator_filter_1.default(redux_persistence_engine_localstorage_1.default(storageKey), [
        ['translation', 'locale'],
        'transaction',
        ['storage', 'version'],
        ...paths
    ]);
    const whitelist = new Set([
        actions_2.CHANGE_LOCALE,
        actions_2.FETCH_TRANSLATIONS_SUCCESS,
        actions_3.FETCH_TRANSACTION_REQUEST,
        actions_3.FETCH_TRANSACTION_SUCCESS,
        actions_3.FETCH_TRANSACTION_FAILURE,
        actions_3.UPDATE_TRANSACTION_STATUS,
        actions_3.UPDATE_TRANSACTION_NONCE,
        actions_3.REPLACE_TRANSACTION_SUCCESS,
        actions_3.FIX_REVERTED_TRANSACTION,
        actions_3.CLEAR_TRANSACTIONS,
        actions_3.CLEAR_TRANSACTION,
        ...actions
    ]);
    const storageMiddleware = storage.createMiddleware(storageEngine, {
        filterAction: (action) => whitelist.has(action.type),
        transform: options.transform,
        onError: options.onError
    });
    const load = (store) => {
        if (setItemFailure) {
            const unsubscribe = store.subscribe(() => {
                const state = store.getState();
                if (state.storage.loading === false) {
                    unsubscribe();
                    store.dispatch({ type: storage.LOAD, payload: localStorageState });
                }
            });
        }
        storage.createLoader(storageEngine)(store);
    };
    return { storageMiddleware, loadStorageMiddleware: load };
}
exports.createStorageMiddleware = createStorageMiddleware;
//# sourceMappingURL=middleware.js.map