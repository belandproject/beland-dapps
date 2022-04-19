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
exports.resolveENSname = exports.isENSAddress = void 0;
const ethers_1 = require("ethers");
const eth_1 = require("../../lib/eth");
const isENSAddress = (address) => {
    return address.includes('.eth');
};
exports.isENSAddress = isENSAddress;
const resolveENSname = (name, chainId) => __awaiter(void 0, void 0, void 0, function* () {
    const connectedProvider = yield eth_1.getNetworkProvider(chainId);
    const ethersProvider = new ethers_1.ethers.providers.Web3Provider(connectedProvider);
    return yield ethersProvider.resolveName(name);
});
exports.resolveENSname = resolveENSname;
//# sourceMappingURL=utils.js.map