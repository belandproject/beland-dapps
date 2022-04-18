import { OpenModalAction, CloseModalAction, CloseAllModalsAction, ToggleModalAction } from './actions';
import { Modal } from './types';
export declare type ModalState = Record<string, Modal>;
export declare type ModalReducerAction = OpenModalAction | CloseModalAction | CloseAllModalsAction | ToggleModalAction;
export declare function modalReducer(state: ModalState | undefined, action: ModalReducerAction): ModalState;
