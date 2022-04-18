import * as React from 'react';
import { SignInI18N } from '@beland/uikit/dist/components/SignIn/SignIn';
import { SignInPageProps, SignInPageState } from './SignInPage.types';
export default class SignInPage extends React.PureComponent<SignInPageProps, SignInPageState> {
    constructor(props: SignInPageProps);
    handleToggleLoginModal: () => void;
    getTranslations: () => SignInI18N | undefined;
    render(): JSX.Element;
}
