"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const actions_1 = require("../../modules/wallet/actions");
const MetaTransactionError_1 = __importDefault(require("./MetaTransactionError"));
const mapState = (_state) => ({});
const mapDispatch = (dispatch) => ({
    onSwitchNetwork: chainId => dispatch(actions_1.switchNetworkRequest(chainId))
});
exports.default = react_redux_1.connect(mapState, mapDispatch)(MetaTransactionError_1.default);
//# sourceMappingURL=MetaTransactionError.container.js.map