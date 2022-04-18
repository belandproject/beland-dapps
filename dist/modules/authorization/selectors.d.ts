import { AuthorizationState } from './reducer';
export declare const getState: (state: any) => AuthorizationState;
export declare const getData: (state: any) => import("./types").Authorization[];
export declare const getLoading: (state: any) => import("../loading/reducer").LoadingState;
export declare const isLoading: (state: any) => boolean;
export declare const getError: (state: any) => string | null;
export declare const getTransactions: (state: any) => import("../transaction/types").Transaction[];
export declare const getAllowTransactions: (state: any) => import("../transaction/types").Transaction[];
export declare const getApproveTransactions: (state: any) => import("../transaction/types").Transaction[];
