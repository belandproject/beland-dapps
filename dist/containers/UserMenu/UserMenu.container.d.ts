/// <reference types="react" />
import { Props } from './UserMenu.types';
import UserMenu from './UserMenu';
declare const _default: import("react-redux").ConnectedComponent<typeof UserMenu, import("react-redux").Omit<import("react").ClassAttributes<UserMenu> & import("@beland/uikit/dist/components/UserMenu/UserMenu").UserMenuProps & {
    hasTranslations: boolean;
}, "address" | "avatar" | "hasTranslations" | "i18n" | "onSignIn" | "onSignOut" | "isSignedIn" | "isSigningIn" | "beanBalances" | "hasActivity" | "isActivity" | "menuItems" | "onClickProfile" | "onClickActivity" | "onClickSettings" | "onClickBalance"> & Partial<Props>>;
export default _default;
