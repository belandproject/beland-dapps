import { AnyAction, Reducer } from 'redux';
import { StateMerger } from 'redux-persistence/dist/types';
export declare type StorageState = {
    version: number;
    loading: boolean;
};
export declare const INITIAL_STATE: StorageState;
export declare function storageReducerWrapper(reducer: any, merger?: StateMerger): Reducer<{} | undefined>;
export declare function storageReducer(state: StorageState | undefined, action: AnyAction): StorageState;
