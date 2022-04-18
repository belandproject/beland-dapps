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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTranslationSaga = void 0;
const effects_1 = require("redux-saga/effects");
const flat_1 = __importDefault(require("flat"));
const actions_1 = require("./actions");
const utils_1 = require("./utils");
const defaultTranslations = __importStar(require("./defaults"));
function createTranslationSaga({ getTranslation, translations }) {
    function* handleFetchTranslationsRequest(action) {
        try {
            const { locale } = action.payload;
            let result;
            if (getTranslation) {
                result = yield effects_1.call(() => getTranslation(locale));
            }
            else if (translations) {
                result = translations[locale];
            }
            else {
                throw new Error('You must provide `translations` or `getTranslations`');
            }
            // merge translations and defaults
            const allTransalations = utils_1.mergeTranslations(flat_1.default(defaultTranslations[locale]), flat_1.default(result));
            utils_1.setCurrentLocale(locale, allTransalations);
            yield effects_1.put(actions_1.fetchTranslationsSuccess(locale, allTransalations));
        }
        catch (error) {
            yield effects_1.put(actions_1.fetchTranslationsFailure(error.message));
        }
    }
    return function* translationSaga() {
        yield effects_1.takeEvery(actions_1.FETCH_TRANSLATIONS_REQUEST, handleFetchTranslationsRequest);
    };
}
exports.createTranslationSaga = createTranslationSaga;
//# sourceMappingURL=sagas.js.map