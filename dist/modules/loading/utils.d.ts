import { AnyAction } from 'redux';
export declare function removeLast(actions: AnyAction[], comparator: (action: any) => boolean): AnyAction[];
export declare const getType: (action: AnyAction) => any;
export declare const getStatus: (action: AnyAction) => any;
