"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const selectors_1 = require("../../modules/wallet/selectors");
const AddressProvider_1 = __importDefault(require("./AddressProvider"));
const mapState = (state) => ({
    chainId: selectors_1.getAppChainId(state)
});
exports.default = react_redux_1.connect(mapState)(AddressProvider_1.default);
//# sourceMappingURL=AddressProvider.container.js.map