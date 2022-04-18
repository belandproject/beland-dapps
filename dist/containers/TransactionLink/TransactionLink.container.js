"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const selectors_1 = require("../../modules/wallet/selectors");
const TransactionLink_1 = __importDefault(require("./TransactionLink"));
const mapState = (state, ownProps) => ({
    chainId: ownProps.chainId || selectors_1.getChainId(state)
});
const mapDispatch = (_) => ({});
exports.default = react_redux_1.connect(mapState, mapDispatch)(TransactionLink_1.default);
//# sourceMappingURL=TransactionLink.container.js.map