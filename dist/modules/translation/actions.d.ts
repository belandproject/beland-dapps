import { Locale } from '@beland/uikit/dist/components/Language/Language';
import { TranslationKeys } from './types';
export declare const FETCH_TRANSLATIONS_REQUEST = "[Request] Fetch Translations";
export declare const FETCH_TRANSLATIONS_SUCCESS = "[Success] Fetch Translations";
export declare const FETCH_TRANSLATIONS_FAILURE = "[Failure] Fetch Translations";
export declare const fetchTranslationsRequest: (locale: Locale) => import("typesafe-actions/dist/types").PayloadAction<"[Request] Fetch Translations", {
    locale: Locale;
}>;
export declare const fetchTranslationsSuccess: (locale: Locale, translations: TranslationKeys) => import("typesafe-actions/dist/types").PayloadAction<"[Success] Fetch Translations", {
    locale: Locale;
    translations: TranslationKeys;
}>;
export declare const fetchTranslationsFailure: (error: string) => import("typesafe-actions/dist/types").PayloadAction<"[Failure] Fetch Translations", {
    error: string;
}>;
export declare type FetchTranslationsRequestAction = ReturnType<typeof fetchTranslationsRequest>;
export declare type FetchTranslationsSuccessAction = ReturnType<typeof fetchTranslationsSuccess>;
export declare type FetchTranslationsFailureAction = ReturnType<typeof fetchTranslationsFailure>;
export declare const CHANGE_LOCALE = "Change locale";
export declare const changeLocale: (locale: Locale) => import("typesafe-actions/dist/types").PayloadAction<"Change locale", {
    locale: Locale;
}>;
export declare type ChangeLocaleAction = ReturnType<typeof changeLocale>;
