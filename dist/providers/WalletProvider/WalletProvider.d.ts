import React from 'react';
import { Props, EventType, Handler, EmitterMethod } from './WalletProvider.types';
export default class WalletProvider extends React.PureComponent<Props> {
    handleChangeAccount: () => Promise<void>;
    handleChangeNetwork: () => Promise<void>;
    handle(method: EmitterMethod, type: EventType, handler: Handler): Promise<void>;
    on(type: EventType, handler: Handler): void;
    off(type: EventType, handler: Handler): void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactNode;
}
