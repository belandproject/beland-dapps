"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ERC721Abi = exports.ERC721 = void 0;
const contract_1 = require("web3x/contract");
const ERC721Abi_1 = __importDefault(require("./ERC721Abi"));
class ERC721 extends contract_1.Contract {
    constructor(eth, address, options) {
        super(eth, ERC721Abi_1.default, address, options);
    }
}
exports.ERC721 = ERC721;
exports.ERC721Abi = ERC721Abi_1.default;
//# sourceMappingURL=ERC721.js.map