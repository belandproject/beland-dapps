import { Locale } from '@beland/uikit/dist/components/Language/Language';
import { LoadingState } from '../loading/reducer';
import { ChangeLocaleAction, FetchTranslationsRequestAction, FetchTranslationsSuccessAction, FetchTranslationsFailureAction } from './actions';
import { Translation } from './types';
export declare type TranslationState = {
    data: Translation;
    locale: Locale;
    loading: LoadingState;
    error: string | null;
};
export declare const INITIAL_STATE: TranslationState;
export declare type TranslationReducerAction = ChangeLocaleAction | FetchTranslationsRequestAction | FetchTranslationsSuccessAction | FetchTranslationsFailureAction;
export declare function translationReducer(state: TranslationState | undefined, action: TranslationReducerAction): TranslationState;
