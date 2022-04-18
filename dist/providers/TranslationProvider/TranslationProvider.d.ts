import * as React from 'react';
import { Props } from './TranslationProvider.types';
export default class TranslationProvider extends React.PureComponent<Props> {
    componentDidUpdate(prevProps: Props): void;
    renderLoading(): JSX.Element;
    render(): JSX.Element;
}
