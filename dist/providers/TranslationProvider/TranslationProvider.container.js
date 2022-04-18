"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const TranslationProvider_1 = __importDefault(require("./TranslationProvider"));
const selectors_1 = require("../../modules/storage/selectors");
const selectors_2 = require("../../modules/translation/selectors");
const actions_1 = require("../../modules/translation/actions");
const utils_1 = require("../../modules/translation/utils");
const mapState = (state, ownProps) => {
    // Wait until the locale is loaded from the storage to select it
    let locale;
    let translations;
    if (!selectors_1.isLoading(state)) {
        locale =
            selectors_2.getLocale(state) ||
                utils_1.getPreferredLocale(ownProps.locales) ||
                ownProps.locales[0];
        if (locale) {
            const translationsInState = selectors_2.getData(state)[locale];
            if (translationsInState) {
                translations = translationsInState;
            }
        }
    }
    return {
        locale: locale,
        translations
    };
};
const mapDispatch = (dispatch) => ({
    onFetchTranslations: (locale) => dispatch(actions_1.fetchTranslationsRequest(locale))
});
exports.default = react_redux_1.connect(mapState, mapDispatch)(TranslationProvider_1.default);
//# sourceMappingURL=TranslationProvider.container.js.map