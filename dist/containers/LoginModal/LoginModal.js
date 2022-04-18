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
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const connect_1 = require("@beland/connect");
const LoginModal_1 = require("@beland/uikit/dist/components/LoginModal/LoginModal");
const provider_type_1 = require("@beland/schemas/dist/dapps/provider-type");
const utils_1 = require("../../modules/translation/utils");
const utils_2 = require("./utils");
class LoginModal extends React.PureComponent {
    constructor(props) {
        super(props);
        this.handleOnConnect = (loginType) => {
            let providerType = (0, utils_2.toProviderType)(loginType);
            this.props.onConnect(providerType);
        };
        this.getModalTranslations = () => {
            if (!this.props.hasTranslations) {
                return undefined;
            }
            return {
                title: React.createElement(utils_1.T, { id: "@dapps.login.modal.title" }),
                subtitle: React.createElement(utils_1.T, { id: "@dapps.login.modal.subtitle" }),
                error: React.createElement(utils_1.T, { id: "@dapps.login.modal.error" })
            };
        };
        this.getOptionTranslations = () => {
            if (!this.props.hasTranslations) {
                return undefined;
            }
            return {
                browser_extension: React.createElement(utils_1.T, { id: "@dapps.login.option.browser_extension" }),
                email: React.createElement(utils_1.T, { id: "@dapps.login.option.email" }),
                mobile: React.createElement(utils_1.T, { id: "@dapps.login.option.mobile" })
            };
        };
        this.renderLoginModalOption = (providerType) => {
            // Both "Profiles not rendering" and "Wallet link" were shipped on the same
            // release. Not rendering wallet link option now will allow us to release only the fix
            // and ship wallet link when required.
            if (providerType === provider_type_1.ProviderType.WALLET_LINK) {
                return null;
            }
            const loginType = (0, utils_2.toModalOptionType)(providerType);
            return loginType ? (React.createElement(LoginModal_1.LoginModal.Option, { key: loginType, type: loginType, i18n: this.getOptionTranslations(), onClick: () => this.handleOnConnect(loginType) })) : null;
        };
        this.state = {
            hasError: false
        };
    }
    componentDidUpdate(prevProps) {
        if (!prevProps.hasError && this.props.hasError) {
            this.setState({
                hasError: true
            });
        }
        else if (prevProps.hasError && !this.props.hasError) {
            this.setState({
                hasError: false
            });
        }
    }
    render() {
        const { open, className, isLoading, onClose } = this.props;
        const { hasError } = this.state;
        return (React.createElement(LoginModal_1.LoginModal, { open: open, className: className, i18n: this.getModalTranslations(), message: React.createElement(utils_1.T, { id: "@dapps.login.modal.supported_wallets", values: {
                    br: React.createElement("br", null),
                    trezor_link: (React.createElement("a", { href: "https://github.com/trezor/trezor-firmware/pull/1568", target: "_blank", rel: "noopener noreferrer" }, (0, utils_1.t)('@dapps.login.modal.trezor_link')))
                } }), loading: isLoading, hasError: hasError, onClose: onClose }, connect_1.connection.getAvailableProviders().map(this.renderLoginModalOption)));
    }
}
exports.default = LoginModal;
LoginModal.defaultProps = {
    isLoading: false
};
//# sourceMappingURL=LoginModal.js.map