/// <reference types="react" />
import { OwnProps } from './Profile.types';
import Profile from './Profile';
declare const _default: import("react-redux").ConnectedComponent<typeof Profile, import("react-redux").Omit<Pick<import("react").ClassAttributes<Profile> & import("@beland/uikit/dist/components/Profile/Profile").ProfileProps & {
    debounce?: number | undefined;
    onLoadProfile: (address: string) => import("typesafe-actions/dist/types").PayloadAction<"[Request] Load profile", {
        address: string;
    }>;
}, "address" | "size" | "avatar" | "textOnly" | "imageOnly" | "hasPopup" | "isBeland" | "debounce" | "onLoadProfile" | keyof import("react").ClassAttributes<Profile>> & Partial<Pick<import("react").ClassAttributes<Profile> & import("@beland/uikit/dist/components/Profile/Profile").ProfileProps & {
    debounce?: number | undefined;
    onLoadProfile: (address: string) => import("typesafe-actions/dist/types").PayloadAction<"[Request] Load profile", {
        address: string;
    }>;
}, "inline">> & Partial<Pick<{
    inline: boolean;
}, never>>, "avatar" | "onLoadProfile"> & OwnProps>;
export default _default;
