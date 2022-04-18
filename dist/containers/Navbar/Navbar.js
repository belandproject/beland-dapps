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
const Button_1 = require("@beland/uikit/dist/components/Button/Button");
const ModalNavigation_1 = require("@beland/uikit/dist/components/ModalNavigation/ModalNavigation");
const Navbar_1 = require("@beland/uikit/dist/components/Navbar/Navbar");
const provider_type_1 = require("@beland/schemas/dist/dapps/provider-type");
const chain_id_1 = require("@beland/schemas/dist/dapps/chain-id");
const eth_1 = require("../../lib/eth");
const utils_1 = require("../../modules/translation/utils");
const Modal_1 = __importDefault(require("../../containers/Modal"));
const ChainProvider_1 = __importDefault(require("../ChainProvider"));
class Navbar extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.getTranslations = () => {
            if (!this.props.hasTranslations) {
                return undefined;
            }
            return {
                menu: {
                    marketplace: React.createElement(utils_1.T, { id: "@dapps.navbar.menu.marketplace" }),
                    events: React.createElement(utils_1.T, { id: "@dapps.navbar.menu.events" }),
                    agora: React.createElement(utils_1.T, { id: "@dapps.navbar.menu.agora" }),
                    dao: React.createElement(utils_1.T, { id: "@dapps.navbar.menu.dao" }),
                    docs: React.createElement(utils_1.T, { id: "@dapps.navbar.menu.docs" }),
                    blog: React.createElement(utils_1.T, { id: "@dapps.navbar.menu.blog" }),
                    builder: React.createElement(utils_1.T, { id: "@dapps.navbar.menu.builder" })
                },
                account: {
                    connecting: React.createElement(utils_1.T, { id: "@dapps.navbar.account.connecting" }),
                    signIn: React.createElement(utils_1.T, { id: "@dapps.navbar.account.signIn" })
                }
            };
        };
        this.handleSwitchNetwork = () => {
            this.props.onSwitchNetwork((0, eth_1.getConnectedProviderChainId)());
        };
        this.handleSignOut = () => {
            this.props.onSignOut();
        };
    }
    render() {
        const { hasAcceptedNetworkPartialSupport, onAcceptNetworkPartialSupport } = this.props;
        const expectedChainName = (0, chain_id_1.getChainName)((0, eth_1.getConnectedProviderChainId)());
        const providerType = (0, eth_1.getConnectedProviderType)();
        return (React.createElement(React.Fragment, null,
            React.createElement(Navbar_1.Navbar, Object.assign({}, this.props, { i18n: this.getTranslations() })),
            React.createElement(ChainProvider_1.default, null, ({ chainId, isUnsupported, isPartiallySupported }) => isUnsupported ? (React.createElement(Modal_1.default, { open: true, size: "tiny" },
                React.createElement(ModalNavigation_1.ModalNavigation, { title: React.createElement(utils_1.T, { id: "@dapps.navbar.wrong_network.header" }) }),
                React.createElement(Modal_1.default.Content, null, !(0, chain_id_1.getChainName)(chainId) ? (React.createElement(utils_1.T, { id: "@dapps.navbar.wrong_network.message_unknown_network", values: {
                        expectedChainName: React.createElement("b", null, expectedChainName)
                    } })) : (React.createElement(utils_1.T, { id: "@dapps.navbar.wrong_network.message", values: {
                        currentChainName: React.createElement("b", null, (0, chain_id_1.getChainName)(chainId)),
                        expectedChainName: React.createElement("b", null, expectedChainName)
                    } }))),
                React.createElement(Modal_1.default.Actions, null, providerType === provider_type_1.ProviderType.WALLET_CONNECT ? (React.createElement(Button_1.Button, { primary: true, onClick: this.handleSignOut }, (0, utils_1.t)('@dapps.navbar.wrong_network.sign_out'))) : (React.createElement(Button_1.Button, { primary: true, onClick: this.handleSwitchNetwork },
                    React.createElement(utils_1.T, { id: "@dapps.navbar.wrong_network.switch_button", values: {
                            chainName: React.createElement("b", null, expectedChainName)
                        } })))))) : isPartiallySupported ? (React.createElement(Modal_1.default, { open: !hasAcceptedNetworkPartialSupport, size: "small" },
                React.createElement(ModalNavigation_1.ModalNavigation, { title: React.createElement(utils_1.T, { id: "@dapps.navbar.partially_supported_network.header" }) }),
                React.createElement(Modal_1.default.Content, null,
                    React.createElement(utils_1.T, { id: "@dapps.navbar.partially_supported_network.message", values: {
                            currentChainName: React.createElement("b", null, (0, chain_id_1.getChainName)(chainId)),
                            expectedChainName: React.createElement("b", null, expectedChainName)
                        } })),
                React.createElement(Modal_1.default.Actions, null,
                    React.createElement(Button_1.Button, { primary: true, onClick: this.handleSwitchNetwork },
                        React.createElement(utils_1.T, { id: "@dapps.navbar.wrong_network.switch_button", values: {
                                chainName: React.createElement("b", null, expectedChainName)
                            } })),
                    React.createElement(Button_1.Button, { secondary: true, onClick: onAcceptNetworkPartialSupport },
                        React.createElement(utils_1.T, { id: "@dapps.navbar.partially_supported_network.continue_button", values: {
                                chainName: React.createElement("b", null, (0, chain_id_1.getChainName)(chainId))
                            } }))))) : null)));
    }
}
exports.default = Navbar;
//# sourceMappingURL=Navbar.js.map