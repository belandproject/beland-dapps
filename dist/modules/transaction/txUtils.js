"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransaction = void 0;
const eth_1 = require("web3x/eth");
const address_1 = require("web3x/address");
const eth_2 = require("../../lib/eth");
const types_1 = require("./types");
function getTransaction(address, chainId, hash) {
    return __awaiter(this, void 0, void 0, function* () {
        const provider = yield eth_2.getNetworkProvider(chainId);
        if (!provider)
            return null;
        const eth = new eth_1.Eth(provider);
        if (!address) {
            return null;
        }
        let currentNonce = null;
        try {
            currentNonce = yield eth.getTransactionCount(address_1.Address.fromString(address));
        }
        catch (error) {
            console.warn(`Could not get current nonce for account "${address}"`, error.message);
        }
        let response = null;
        try {
            response = yield eth.getTransaction(hash);
        }
        catch (error) {
            console.warn(`Could not get transaction for hash "${hash}"`, error.message);
        }
        // not found
        if (response == null) {
            return null;
        }
        if (response.blockNumber == null) {
            if (currentNonce != null) {
                // replaced
                if (response.nonce < currentNonce) {
                    const tx = {
                        hash,
                        status: types_1.TransactionStatus.REPLACED,
                        nonce: response.nonce
                    };
                    return tx;
                }
                // queued
                if (response.nonce > currentNonce) {
                    const tx = {
                        hash,
                        status: types_1.TransactionStatus.QUEUED,
                        nonce: response.nonce
                    };
                    return tx;
                }
            }
            // pending
            const tx = Object.assign({ status: types_1.TransactionStatus.PENDING }, response);
            return tx;
        }
        const receipt = yield eth.getTransactionReceipt(hash);
        // reverted
        if (receipt == null || !receipt.status) {
            const tx = Object.assign({ status: types_1.TransactionStatus.REVERTED }, response);
            return tx;
        }
        // confirmed
        const tx = Object.assign(Object.assign({ status: types_1.TransactionStatus.CONFIRMED }, response), { receipt });
        return tx;
    });
}
exports.getTransaction = getTransaction;
//# sourceMappingURL=txUtils.js.map