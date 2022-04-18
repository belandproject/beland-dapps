import { AnyAction } from 'redux';
export declare type LoadingState = AnyAction[];
export declare const INITIAL_STATE: LoadingState;
export declare function loadingReducer(state: LoadingState | undefined, action: AnyAction): LoadingState;
