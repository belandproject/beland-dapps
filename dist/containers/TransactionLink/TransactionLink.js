"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const utils_1 = require("../../modules/transaction/utils");
class TransactionLink extends React.PureComponent {
    render() {
        const { address, txHash } = this.props;
        if (!address && !txHash) {
            console.warn('Tried to render an TransactionLink without either an address or tx hash. Please supply one of those');
            return null;
        }
        const { chainId, className, target, text, children } = this.props;
        const href = utils_1.getTransactionHref({ address, txHash }, chainId);
        return (React.createElement("a", { className: className, href: href, target: target }, children || text || href));
    }
}
exports.default = TransactionLink;
TransactionLink.defaultProps = {
    className: 'etherscan-link',
    target: '_blank',
    text: ''
};
//# sourceMappingURL=TransactionLink.js.map