import { Profile } from './types';
export declare const LOAD_PROFILE_REQUEST = "[Request] Load profile";
export declare const LOAD_PROFILE_SUCCESS = "[Success] Load profile";
export declare const LOAD_PROFILE_FAILURE = "[Failure] Load profile";
export declare const loadProfileRequest: (address: string) => import("typesafe-actions/dist/types").PayloadAction<"[Request] Load profile", {
    address: string;
}>;
export declare const loadProfileSuccess: (address: string, profile: Profile) => import("typesafe-actions/dist/types").PayloadAction<"[Success] Load profile", {
    address: string;
    profile: Profile;
}>;
export declare const loadProfileFailure: (address: string, error: string) => import("typesafe-actions/dist/types").PayloadAction<"[Failure] Load profile", {
    address: string;
    error: string;
}>;
export declare type LoadProfileRequestAction = ReturnType<typeof loadProfileRequest>;
export declare type LoadProfileSuccessAction = ReturnType<typeof loadProfileSuccess>;
export declare type LoadProfileFailureAction = ReturnType<typeof loadProfileFailure>;
export declare const SET_PROFILE_AVATAR_DESCRIPTION_REQUEST = "[Request] Set profile avatar description";
export declare const SET_PROFILE_AVATAR_DESCRIPTION_SUCCESS = "[Success] Set profile avatar description";
export declare const SET_PROFILE_AVATAR_DESCRIPTION_FAILURE = "[Failure] Set profile avatar description";
export declare const setProfileAvatarDescriptionRequest: (address: string, description: string) => import("typesafe-actions/dist/types").PayloadAction<"[Request] Set profile avatar description", {
    address: string;
    description: string;
}>;
export declare const setProfileAvatarDescriptionSuccess: (address: string, description: string, version: number) => import("typesafe-actions/dist/types").PayloadAction<"[Success] Set profile avatar description", {
    address: string;
    description: string;
    version: number;
}>;
export declare const setProfileAvatarDescriptionFailure: (address: string, error: string) => import("typesafe-actions/dist/types").PayloadAction<"[Failure] Set profile avatar description", {
    address: string;
    error: string;
}>;
export declare type SetProfileAvatarDescriptionRequestAction = ReturnType<typeof setProfileAvatarDescriptionRequest>;
export declare type SetProfileAvatarDescriptionSuccessAction = ReturnType<typeof setProfileAvatarDescriptionSuccess>;
export declare type SetProfileAvatarDescriptionFailureAction = ReturnType<typeof setProfileAvatarDescriptionFailure>;
export declare const CLEAR_PROFILE_ERROR = "[Clear] Clear profile error";
export declare const clearProfileError: () => import("typesafe-actions/dist/types").EmptyAction<"[Clear] Clear profile error">;
export declare type ClearProfileErrorAction = ReturnType<typeof clearProfileError>;
export declare const CHANGE_PROFILE = "Change Profile";
export declare const changeProfile: (address: string, profile: Profile) => import("typesafe-actions/dist/types").PayloadAction<"Change Profile", {
    address: string;
    profile: Profile;
}>;
export declare type ChangeProfileAction = ReturnType<typeof changeProfile>;
