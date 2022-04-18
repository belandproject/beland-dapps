import { LoadingState } from '../loading/reducer';
import { Profile } from './types';
import { LoadProfileRequestAction, LoadProfileSuccessAction, LoadProfileFailureAction, ChangeProfileAction, SetProfileAvatarDescriptionRequestAction, SetProfileAvatarDescriptionSuccessAction, SetProfileAvatarDescriptionFailureAction, ClearProfileErrorAction } from './actions';
export declare type ProfileState = {
    data: Record<string, Profile>;
    loading: LoadingState;
    error: string | null;
};
export declare const INITIAL_STATE: ProfileState;
export declare type ProfileReducerAction = LoadProfileRequestAction | LoadProfileSuccessAction | LoadProfileFailureAction | ChangeProfileAction | SetProfileAvatarDescriptionRequestAction | SetProfileAvatarDescriptionSuccessAction | SetProfileAvatarDescriptionFailureAction | ClearProfileErrorAction;
export declare const profileReducer: (state: ProfileState | undefined, action: ProfileReducerAction) => ProfileState;
