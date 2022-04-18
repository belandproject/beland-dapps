import { ProfileProps } from '@beland/uikit/dist/components/Profile/Profile';
import { loadProfileRequest, LoadProfileRequestAction } from '../../modules/profile/actions';
import { Dispatch } from 'redux';
export declare type Props = ProfileProps & {
    debounce?: number;
    onLoadProfile: typeof loadProfileRequest;
};
export declare type MapStateProps = Pick<Props, 'avatar'>;
export declare type MapDispatchProps = Pick<Props, 'onLoadProfile'>;
export declare type MapDispatch = Dispatch<LoadProfileRequestAction>;
export declare type OwnProps = Pick<Props, 'address'>;
