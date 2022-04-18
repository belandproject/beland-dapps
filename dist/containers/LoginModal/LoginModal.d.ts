import * as React from 'react';
import { LoginModalI18N, LoginModalOptionI18N, LoginModalOptionType } from '@beland/uikit/dist/components/LoginModal/LoginModal';
import { ProviderType } from '@beland/schemas/dist/dapps/provider-type';
import { DefaultProps, Props, State } from './LoginModal.types';
export default class LoginModal extends React.PureComponent<Props, State> {
    static defaultProps: DefaultProps;
    constructor(props: Props);
    componentDidUpdate(prevProps: Props): void;
    handleOnConnect: (loginType: LoginModalOptionType) => void;
    getModalTranslations: () => LoginModalI18N | undefined;
    getOptionTranslations: () => LoginModalOptionI18N | undefined;
    renderLoginModalOption: (providerType: ProviderType) => JSX.Element | null;
    render(): JSX.Element;
}
