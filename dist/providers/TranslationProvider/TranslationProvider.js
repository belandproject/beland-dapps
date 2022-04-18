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
const Loader_1 = require("@beland/uikit/dist/components/Loader/Loader");
const utils_1 = require("../../modules/translation/utils");
class TranslationProvider extends React.PureComponent {
    componentDidUpdate(prevProps) {
        const { locale, onFetchTranslations } = this.props;
        if (locale && prevProps.locale !== locale) {
            onFetchTranslations(locale);
        }
    }
    renderLoading() {
        return React.createElement(Loader_1.Loader, { active: true, size: "massive" });
    }
    render() {
        const { children, locale, translations } = this.props;
        return translations && locale ? (React.createElement(utils_1.I18nProvider, { key: locale, locale: locale, messages: translations }, children)) : (this.renderLoading());
    }
}
exports.default = TranslationProvider;
//# sourceMappingURL=TranslationProvider.js.map