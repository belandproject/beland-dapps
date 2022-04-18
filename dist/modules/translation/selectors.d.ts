import { TranslationState } from './reducer';
import { Locale } from '@beland/uikit/dist/components/Language/Language';
export declare const getState: (state: any) => TranslationState;
export declare const getData: (state: any) => TranslationState['data'];
export declare const getLoading: (state: any) => TranslationState['loading'];
export declare const isLoading: (state: any) => boolean;
export declare const getLocale: (state: any) => Locale;
export declare const isEnabled: (state: any) => boolean;
