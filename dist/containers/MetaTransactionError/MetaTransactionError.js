"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const schemas_1 = require("@beland/schemas");
const uikit_1 = require("@beland/uikit");
const utils_1 = require("../../modules/translation/utils");
const eth_1 = require("../../lib/eth");
class MetaTransactionError extends react_1.default.PureComponent {
    render() {
        const { text, onSwitchNetwork, learnMoreLink } = this.props;
        const chainId = (0, eth_1.getChainIdByNetwork)(schemas_1.Network.MATIC);
        const network = (0, schemas_1.getChainName)(chainId);
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(uikit_1.Row, null, text),
            react_1.default.createElement("br", null),
            react_1.default.createElement(uikit_1.Row, { align: "right" },
                react_1.default.createElement(uikit_1.Button, { basic: true, onClick: () => onSwitchNetwork(chainId) }, (0, utils_1.t)('@dapps.toasts.switch_network', { network })),
                "\u00A0",
                learnMoreLink ? (react_1.default.createElement(uikit_1.Button, { basic: true, href: learnMoreLink, target: "_blank", rel: "noopener noreferrer" }, (0, utils_1.t)('@dapps.toasts.learn_more'))) : null)));
    }
}
exports.default = MetaTransactionError;
//# sourceMappingURL=MetaTransactionError.js.map