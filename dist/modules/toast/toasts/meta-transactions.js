"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUnknownErrorToast = exports.getInvalidAddressErrorToast = exports.getContractAccountErrorToast = void 0;
const react_1 = __importDefault(require("react"));
const Toast_1 = require("@beland/uikit/dist/components/Toast/Toast");
const MetaTransactionError_1 = __importDefault(require("../../../containers/MetaTransactionError"));
const utils_1 = require("../../translation/utils");
const transactionsInPolygonDocs = 'https://docs.decentraland.org/blockchain-integration/transactions-in-polygon/';
function getContractAccountErrorToast() {
    return {
        type: Toast_1.ToastType.ERROR,
        title: (0, utils_1.t)('@dapps.toasts.meta_transactions.contract_account_error.title'),
        body: (react_1.default.createElement(MetaTransactionError_1.default, { text: (0, utils_1.t)('@dapps.toasts.meta_transactions.contract_account_error.body'), learnMoreLink: transactionsInPolygonDocs })),
        closable: true,
        timeout: 30000
    };
}
exports.getContractAccountErrorToast = getContractAccountErrorToast;
function getInvalidAddressErrorToast() {
    return {
        type: Toast_1.ToastType.ERROR,
        title: (0, utils_1.t)('@dapps.toasts.meta_transactions.invalid_address_error.title'),
        body: (react_1.default.createElement(MetaTransactionError_1.default, { text: react_1.default.createElement(utils_1.T, { id: "@dapps.toasts.meta_transactions.invalid_address_error.body" }), learnMoreLink: transactionsInPolygonDocs })),
        closable: true,
        timeout: 30000
    };
}
exports.getInvalidAddressErrorToast = getInvalidAddressErrorToast;
function getUnknownErrorToast() {
    return {
        type: Toast_1.ToastType.ERROR,
        title: (0, utils_1.t)('@dapps.toasts.meta_transactions.unknown_error.title'),
        body: (react_1.default.createElement(MetaTransactionError_1.default, { text: (0, utils_1.t)('@dapps.toasts.meta_transactions.unknown_error.body'), learnMoreLink: transactionsInPolygonDocs })),
        closable: true,
        timeout: 30000
    };
}
exports.getUnknownErrorToast = getUnknownErrorToast;
//# sourceMappingURL=meta-transactions.js.map