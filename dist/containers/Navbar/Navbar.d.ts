import * as React from 'react';
import { NavbarI18N } from '@beland/uikit/dist/components/Navbar/Navbar';
import { NavbarProps } from './Navbar.types';
export default class Navbar extends React.PureComponent<NavbarProps> {
    getTranslations: () => NavbarI18N | undefined;
    handleSwitchNetwork: () => void;
    handleSignOut: () => void;
    render(): JSX.Element;
}
