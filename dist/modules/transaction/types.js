"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUCCESS_STATUS = exports.FAILED_STATUS = exports.FINISHED_STATUS = exports.TransactionStatus = void 0;
var TransactionStatus;
(function (TransactionStatus) {
    TransactionStatus["QUEUED"] = "queued";
    TransactionStatus["DROPPED"] = "dropped";
    TransactionStatus["REPLACED"] = "replaced";
    TransactionStatus["PENDING"] = "pending";
    TransactionStatus["REVERTED"] = "reverted";
    TransactionStatus["CONFIRMED"] = "confirmed";
})(TransactionStatus = exports.TransactionStatus || (exports.TransactionStatus = {}));
exports.FINISHED_STATUS = [
    TransactionStatus.CONFIRMED,
    TransactionStatus.REVERTED,
    TransactionStatus.DROPPED,
    TransactionStatus.REPLACED
];
exports.FAILED_STATUS = [
    TransactionStatus.DROPPED,
    TransactionStatus.REVERTED
];
exports.SUCCESS_STATUS = [
    TransactionStatus.REPLACED,
    TransactionStatus.CONFIRMED
];
//# sourceMappingURL=types.js.map