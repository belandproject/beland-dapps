import { RenderToastAction, HideToastAction, HideAllToastsAction } from './actions';
export declare type ToastState = number[];
export declare type ToastReducerAction = RenderToastAction | HideToastAction | HideAllToastsAction;
export declare function toastReducer(state: ToastState | undefined, action: ToastReducerAction): ToastState;
