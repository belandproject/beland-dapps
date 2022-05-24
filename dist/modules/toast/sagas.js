"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleMetaTransactionError = exports.toastSaga = void 0;
const effects_1 = require("redux-saga/effects");
const transactions_1 = require("@beland/transactions");
const actions_1 = require("./actions");
const selectors_1 = require("./selectors");
const cache = __importStar(require("./cache"));
const actions_2 = require("../wallet/actions");
const meta_transactions_1 = require("./toasts/meta-transactions");
function* toastSaga() {
    yield (0, effects_1.takeEvery)(actions_1.SHOW_TOAST, handleShowToast);
    yield (0, effects_1.takeEvery)(actions_1.HIDE_TOAST, handleHideToast);
    yield (0, effects_1.takeEvery)(actions_2.SWITCH_NETWORK_SUCCESS, handleSwitchNetworkSuccess);
}
exports.toastSaga = toastSaga;
function* handleShowToast(action) {
    const { toast } = action.payload;
    const ids = yield (0, effects_1.select)(selectors_1.getState);
    const lastId = Number(ids[ids.length - 1] || 0);
    const id = lastId + 1;
    cache.set(id, toast);
    yield (0, effects_1.put)((0, actions_1.renderToast)(id));
}
function* handleHideToast(action) {
    const { id } = action.payload;
    cache.remove(id);
}
function* handleMetaTransactionError(code) {
    switch (code) {
        case transactions_1.ErrorCode.CONTRACT_ACCOUNT: {
            yield (0, effects_1.put)((0, actions_1.showToast)((0, meta_transactions_1.getContractAccountErrorToast)()));
            break;
        }
        case transactions_1.ErrorCode.INVALID_ADDRESS: {
            yield (0, effects_1.put)((0, actions_1.showToast)((0, meta_transactions_1.getInvalidAddressErrorToast)()));
            break;
        }
        case transactions_1.ErrorCode.USER_DENIED: {
            // do nothing
            break;
        }
        case transactions_1.ErrorCode.UNKNOWN:
        default: {
            yield (0, effects_1.put)((0, actions_1.showToast)((0, meta_transactions_1.getUnknownErrorToast)()));
            break;
        }
    }
}
exports.handleMetaTransactionError = handleMetaTransactionError;
function* handleSwitchNetworkSuccess() {
    yield (0, effects_1.put)((0, actions_1.hideAllToasts)());
}
//# sourceMappingURL=sagas.js.map