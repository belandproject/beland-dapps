/// <reference types="react" />
import { ModalState } from '../../modules/modal/reducer';
import { closeModal } from '../../modules/modal/actions';
export declare type ModalProps = {
    name: string;
    metadata?: any;
    onClose: () => ReturnType<typeof closeModal>;
};
export declare type ModalComponent = React.ComponentType<ModalProps>;
export declare type DefaultProps = {
    children: React.ReactNode;
};
export declare type Props = DefaultProps & {
    components: Record<string, ModalComponent>;
    modals: ModalState;
    onClose: typeof closeModal;
};
export declare type MapStateProps = Pick<Props, 'modals'>;
export declare type MapDispatchProps = Pick<Props, 'onClose'>;
