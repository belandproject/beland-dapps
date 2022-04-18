import { ProfileState } from './reducer';
import { Profile } from './types';
export declare const getState: (state: any) => ProfileState;
export declare const getData: (state: any) => ProfileState['data'];
export declare const getError: (state: any) => ProfileState['error'];
export declare const getLoading: (state: any) => import("../loading/reducer").LoadingState;
export declare const getProfileOfAddress: (state: any, address: string) => Profile | undefined;
export declare const isLoadingSetProfileAvatarDescription: (state: any) => boolean;
export declare const getProfileError: (state: any) => string | null;
