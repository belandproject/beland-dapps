import * as React from 'react';
import { ModalProps } from './Modal.types';
export default class Modal extends React.PureComponent<ModalProps> {
    handleClose: () => void;
    render(): JSX.Element;
}
