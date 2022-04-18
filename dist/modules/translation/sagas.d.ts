import { ForkEffect } from 'redux-saga/effects';
import { TranslationSagaOptions } from './types';
export declare function createTranslationSaga({ getTranslation, translations }: TranslationSagaOptions): () => IterableIterator<ForkEffect>;
