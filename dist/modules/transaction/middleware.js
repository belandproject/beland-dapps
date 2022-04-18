"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransactionMiddleware = void 0;
const actions_1 = require("./actions");
const utils_1 = require("./utils");
const selectors_1 = require("../wallet/selectors");
const createTransactionMiddleware = () => {
    const middleware = store => next => action => {
        if ((0, utils_1.isTransactionAction)(action)) {
            const address = (0, selectors_1.getAddress)(store.getState());
            const hash = (0, utils_1.getTransactionHashFromAction)(action);
            if (address) {
                store.dispatch((0, actions_1.fetchTransactionRequest)(address, hash, action));
            }
        }
        return next(action);
    };
    return middleware;
};
exports.createTransactionMiddleware = createTransactionMiddleware;
//# sourceMappingURL=middleware.js.map