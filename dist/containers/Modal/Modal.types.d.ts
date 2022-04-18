import { ModalProps as ModalComponentProps } from '@beland/uikit/dist/components/Modal/Modal';
import { closeModal } from '../../modules/modal/actions';
export declare type ModalProps = ModalComponentProps & {
    name: string;
    onCloseModal?: typeof closeModal;
};
export declare type MapStateProps = {};
export declare type MapDispatchProps = Pick<ModalProps, 'onCloseModal'>;
