"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC20Abi = exports.ERC20 = void 0;
const contract_1 = require("web3x/contract");
const ERC20Abi_1 = __importDefault(require("./ERC20Abi"));
class ERC20 extends contract_1.Contract {
    constructor(eth, address, options) {
        super(eth, ERC20Abi_1.default, address, options);
    }
}
exports.ERC20 = ERC20;
exports.ERC20Abi = ERC20Abi_1.default;
//# sourceMappingURL=ERC20.js.map