import * as React from 'react';
import { UserMenuI18N } from '@beland/uikit/dist/components/UserMenu/UserMenu';
import { Props } from './UserMenu.types';
export default class UserMenu extends React.Component<Props> {
    getTranslations: () => UserMenuI18N | undefined;
    render(): JSX.Element;
}
