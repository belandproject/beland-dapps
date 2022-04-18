import * as React from 'react';
import { DefaultProps, Props } from './ModalProvider.types';
export default class ModalProvider extends React.PureComponent<Props> {
    static defaultProps: DefaultProps;
    getCloseHandler: (name: string) => () => import("typesafe-actions/dist/types").PayloadAction<"Close modal", {
        name: string;
    }>;
    render(): JSX.Element;
}
