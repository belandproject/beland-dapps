/// <reference types="node" />
import * as React from 'react';
import { Props } from './Profile.types';
export default class Profile extends React.PureComponent<Props> {
    static defaultProps: {
        inline: boolean;
    };
    timeout: NodeJS.Timeout | null;
    componentWillMount(): void;
    componentDidUpdate(prevProps: Props): void;
    fetchProfile(props: Props): void;
    render(): JSX.Element;
}
