"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const SignIn_1 = require("@beland/uikit/dist/components/SignIn/SignIn");
const utils_1 = require("../../modules/translation/utils");
const utils_2 = require("../../lib/utils");
const eth_1 = require("../../lib/eth");
const LoginModal_1 = __importDefault(require("../LoginModal"));
class SignInPage extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleToggleLoginModal = () => {
            const isLoginModalOpen = !this.state.isLoginModalOpen;
            this.setState({ isLoginModalOpen });
        };
        this.getTranslations = () => {
            const { hasTranslations, isConnected } = this.props;
            if (!hasTranslations) {
                return undefined;
            }
            return {
                header: React.createElement(utils_1.T, { id: "@dapps.sign_in.get_started" }),
                error: React.createElement(utils_1.T, { id: "@dapps.sign_in.error" }),
                connect: React.createElement(utils_1.T, { id: "@dapps.sign_in.connect" }),
                connecting: React.createElement(utils_1.T, { id: "@dapps.sign_in.connecting" }),
                connected: React.createElement(utils_1.T, { id: "@dapps.sign_in.connected" }),
                message: isConnected ? (React.createElement(utils_1.T, { id: "@dapps.sign_in.options.connected" })) : (0, eth_1.isCucumberProvider)() ? (React.createElement(utils_1.T, { id: "@dapps.sign_in.options.samsung", values: {
                        samsung_link: (React.createElement("a", { href: "https://www.samsung.com/global/galaxy/apps/samsung-blockchain/", target: "_blank", rel: "noopener noreferrer" }, "Samsung Blockchain Wallet"))
                    } })) : (0, utils_2.isMobile)() ? (React.createElement(utils_1.T, { id: "@dapps.sign_in.options.mobile", values: {
                        coinbase_link: (React.createElement("a", { href: "https://wallet.coinbase.com", target: "_blank", rel: "noopener noreferrer" }, "Coinbase Wallet")),
                        imtoken_link: (React.createElement("a", { href: "https://token.im", target: "_blank", rel: "noopener noreferrer" }, "imToken"))
                    } })) : (React.createElement(utils_1.T, { id: "@dapps.sign_in.options.desktop", values: {
                        metamask_link: (React.createElement("a", { href: "https://metamask.io", target: "_blank", rel: "noopener noreferrer" }, "MetaMask")),
                        ledger_nano_link: (React.createElement("a", { href: "https://www.ledger.com/", target: "_blank", rel: "noopener noreferrer" }, "Ledger Nano S"))
                    } }))
            };
        };
        this.state = {
            isLoginModalOpen: false
        };
    }
    render() {
        const { center, isConnected, isConnecting, hasError, onConnect } = this.props;
        const { isLoginModalOpen } = this.state;
        return (React.createElement(React.Fragment, null,
            React.createElement(SignIn_1.SignIn, { center: center, isConnected: isConnected, isConnecting: isConnecting, hasError: hasError, onConnect: this.handleToggleLoginModal, i18n: this.getTranslations() }),
            React.createElement(LoginModal_1.default, { open: isLoginModalOpen, onConnect: onConnect, onClose: this.handleToggleLoginModal })));
    }
}
exports.default = SignInPage;
//# sourceMappingURL=SignInPage.js.map