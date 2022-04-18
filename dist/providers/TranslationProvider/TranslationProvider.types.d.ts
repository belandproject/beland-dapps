/// <reference types="react" />
import { Locale } from '@beland/uikit/dist/components/Language/Language';
import { fetchTranslationsRequest } from '../../modules/translation/actions';
import { TranslationKeys } from '../../modules/translation/types';
export declare type Props = {
    locale?: Locale;
    locales: Locale[];
    translations?: TranslationKeys;
    children?: React.ReactNode;
    onFetchTranslations: typeof fetchTranslationsRequest;
};
export declare type OwnProps = Pick<Props, 'locales'>;
export declare type MapStateProps = Pick<Props, 'locale' | 'translations'>;
export declare type MapDispatchProps = Pick<Props, 'onFetchTranslations'>;
