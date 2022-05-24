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
const Footer_1 = require("@beland/uikit/dist/components/Footer/Footer");
const utils_1 = require("../../modules/translation/utils");
class Footer extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.getTranslations = () => {
            if (!this.props.hasTranslations) {
                return undefined;
            }
            return {
                content: React.createElement(utils_1.T, { id: "@dapps.footer.content" }),
                title: React.createElement(utils_1.T, { id: "@dapps.footer.title" }),
                links: {
                    home: React.createElement(utils_1.T, { id: "@dapps.footer.links.home" }),
                    privacy: React.createElement(utils_1.T, { id: "@dapps.footer.links.privacy" }),
                    terms: React.createElement(utils_1.T, { id: "@dapps.footer.links.terms" }),
                    content: React.createElement(utils_1.T, { id: "@dapps.footer.links.content" }),
                    ethics: React.createElement(utils_1.T, { id: "@dapps.footer.links.ethics" })
                }
            };
        };
        this.handleChange = (_, { value }) => {
            const { locale, onChange } = this.props;
            if (value && value !== locale && onChange) {
                onChange(_, { value });
            }
        };
    }
    render() {
        return (React.createElement(Footer_1.Footer, Object.assign({}, this.props, { onChange: this.handleChange, i18n: this.getTranslations() })));
    }
}
exports.default = Footer;
//# sourceMappingURL=Footer.js.map