"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAnalyticsSaga = void 0;
const effects_1 = require("redux-saga/effects");
const utils_1 = require("./utils");
const actions_1 = require("../wallet/actions");
function createAnalyticsSaga(options = {
    LOCATION_CHANGE: '@@router/LOCATION_CHANGE'
}) {
    const { LOCATION_CHANGE } = options;
    return function* analyticsSaga() {
        yield effects_1.takeLatest(actions_1.CONNECT_WALLET_SUCCESS, handleConnectWalletSuccess);
        yield effects_1.takeEvery(LOCATION_CHANGE, handleLocationChange);
    };
}
exports.createAnalyticsSaga = createAnalyticsSaga;
// Identify users
function handleConnectWalletSuccess(action) {
    const { wallet } = action.payload;
    const analytics = utils_1.getAnalytics();
    if (analytics) {
        analytics.identify({ ethAddress: wallet.address });
    }
}
// Track pages
function handleLocationChange() {
    const analytics = utils_1.getAnalytics();
    if (analytics) {
        analytics.page();
    }
}
//# sourceMappingURL=sagas.js.map