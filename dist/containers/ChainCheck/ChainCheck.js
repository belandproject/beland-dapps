"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Popup_1 = require("@beland/uikit/dist/components/Popup/Popup");
const utils_1 = require("../../modules/translation/utils");
const eth_1 = require("../../lib/eth");
const chain_id_1 = require("@beland/schemas/dist/dapps/chain-id");
const ChainProvider_1 = __importDefault(require("../ChainProvider"));
class ChainCheck extends react_1.default.PureComponent {
    render() {
        const { chainId, children } = this.props;
        return (react_1.default.createElement(ChainProvider_1.default, null, data => {
            const isEnabled = data.isSupported || data.chainId === chainId;
            return (react_1.default.createElement(Popup_1.Popup, { disabled: isEnabled, position: "top center", content: react_1.default.createElement(utils_1.T, { id: "@dapps.button.network_not_supported", values: {
                        expectedChainName: (react_1.default.createElement("b", null, (0, chain_id_1.getChainName)((0, eth_1.getConnectedProviderChainId)())))
                    } }), trigger: children(isEnabled) }));
        }));
    }
}
exports.default = ChainCheck;
//# sourceMappingURL=ChainCheck.js.map