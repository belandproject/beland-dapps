/// <reference types="react" />
import { IntlProvider } from 'react-intl';
import { Locale } from '@beland/uikit/dist/components/Language/Language';
export declare const I18nProvider: typeof IntlProvider;
export declare function getPreferredLocale(availableLocales: Locale[]): Locale | null;
export declare function setCurrentLocale(localeName: Locale, messages: Record<string, string>): void;
export declare function getCurrentLocale(): import("react-intl").IntlShape;
export declare function t(id: string, values?: any): string;
export declare const T: import("react").NamedExoticComponent<import("react-intl/src/components/message").Props<Record<string, import("react").ReactNode>>>;
export declare function mergeTranslations<T extends {
    [key: string]: T | string;
}>(target?: T, ...sources: (T | undefined)[]): T;
