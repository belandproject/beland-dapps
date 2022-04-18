import * as React from 'react';
import { IntercomWidget } from './IntercomWidget';
import { DefaultProps, Props } from './Intercom.types';
export default class Intercom extends React.PureComponent<Props> {
    static defaultProps: DefaultProps;
    widget: IntercomWidget;
    constructor(props: Props);
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    renderWidget(): Promise<void>;
    render(): null;
}
