import { ForkEffect } from 'redux-saga/effects';
export declare type AnalyticsSagaOptions = {
    LOCATION_CHANGE: string;
};
export declare function createAnalyticsSaga(options?: AnalyticsSagaOptions): () => IterableIterator<ForkEffect>;
