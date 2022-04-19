"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeLocale = exports.CHANGE_LOCALE = exports.fetchTranslationsFailure = exports.fetchTranslationsSuccess = exports.fetchTranslationsRequest = exports.FETCH_TRANSLATIONS_FAILURE = exports.FETCH_TRANSLATIONS_SUCCESS = exports.FETCH_TRANSLATIONS_REQUEST = void 0;
const typesafe_actions_1 = require("typesafe-actions");
// Fetch translations
exports.FETCH_TRANSLATIONS_REQUEST = '[Request] Fetch Translations';
exports.FETCH_TRANSLATIONS_SUCCESS = '[Success] Fetch Translations';
exports.FETCH_TRANSLATIONS_FAILURE = '[Failure] Fetch Translations';
const fetchTranslationsRequest = (locale) => typesafe_actions_1.action(exports.FETCH_TRANSLATIONS_REQUEST, { locale });
exports.fetchTranslationsRequest = fetchTranslationsRequest;
const fetchTranslationsSuccess = (locale, translations) => typesafe_actions_1.action(exports.FETCH_TRANSLATIONS_SUCCESS, { locale, translations });
exports.fetchTranslationsSuccess = fetchTranslationsSuccess;
const fetchTranslationsFailure = (error) => typesafe_actions_1.action(exports.FETCH_TRANSLATIONS_FAILURE, { error });
exports.fetchTranslationsFailure = fetchTranslationsFailure;
// Change locale
exports.CHANGE_LOCALE = 'Change locale';
const changeLocale = (locale) => typesafe_actions_1.action(exports.CHANGE_LOCALE, { locale });
exports.changeLocale = changeLocale;
//# sourceMappingURL=actions.js.map