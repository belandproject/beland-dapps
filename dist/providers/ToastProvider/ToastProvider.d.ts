import React from 'react';
import { DefaultProps, Props } from './ToastProvider.types';
export default class ToastProvider extends React.PureComponent<Props> {
    static defaultProps: DefaultProps;
    getCloseHandler: (id: number) => () => import("typesafe-actions/dist/types").PayloadAction<"Hide toast", {
        id: number;
    }>;
    render(): JSX.Element;
}
