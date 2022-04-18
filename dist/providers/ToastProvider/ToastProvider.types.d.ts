/// <reference types="react" />
import { ToastPosition } from '@beland/uikit/dist/components/Toasts/Toasts';
import { Toast } from '../../modules/toast/types';
import { hideToast } from '../../modules/toast/actions';
export declare type DefaultProps = {
    position?: ToastPosition;
    children: React.ReactNode;
};
export declare type Props = DefaultProps & {
    toasts: Toast[];
    onClose: typeof hideToast;
};
export declare type MapStateProps = Pick<Props, 'toasts'>;
export declare type MapDispatchProps = Pick<Props, 'onClose'>;
