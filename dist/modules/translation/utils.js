"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeTranslations = exports.T = exports.t = exports.getCurrentLocale = exports.setCurrentLocale = exports.getPreferredLocale = exports.I18nProvider = void 0;
const react_intl_1 = require("react-intl");
const cache = react_intl_1.createIntlCache();
let currentLocale;
exports.I18nProvider = react_intl_1.IntlProvider;
function getPreferredLocale(availableLocales) {
    if (!availableLocales) {
        throw new Error('Failed to get preferred locale: Missing locale list');
    }
    const navigator = window.navigator;
    const navigatorLocale = (navigator.languages && navigator.languages[0]) || navigator.language;
    let locale = navigatorLocale.slice(0, 2);
    if (!availableLocales.includes(locale)) {
        return null;
    }
    return locale;
}
exports.getPreferredLocale = getPreferredLocale;
function setCurrentLocale(localeName, messages) {
    const locale = {
        en: 'en-EN',
        es: 'es-ES',
        fr: 'fr-FR',
        ko: 'ko-KR',
        zh: 'zh-CN',
        ja: 'ja-JP'
    }[localeName];
    currentLocale = react_intl_1.createIntl({ locale, messages }, cache);
}
exports.setCurrentLocale = setCurrentLocale;
function getCurrentLocale() {
    return currentLocale;
}
exports.getCurrentLocale = getCurrentLocale;
function t(id, values) {
    return currentLocale.formatMessage({ id }, values);
}
exports.t = t;
exports.T = react_intl_1.FormattedMessage;
function mergeTranslations(target = {}, ...sources) {
    return [target, ...sources].reduce((result, obj) => _mergeTranslations(result, obj), {});
}
exports.mergeTranslations = mergeTranslations;
function _mergeTranslations(target = {}, source = {}) {
    const merged = Object.keys(source).reduce((result, key) => {
        // @ts-ignore
        result[key] =
            typeof source[key] === 'object'
                ? _mergeTranslations(target[key], source[key])
                : source[key];
        return result;
    }, target);
    return merged;
}
//# sourceMappingURL=utils.js.map