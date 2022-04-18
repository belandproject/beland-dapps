import { Toast } from './types';
export declare const SHOW_TOAST = "Show toast";
export declare const showToast: (toast: Omit<Toast, 'id'>) => import("typesafe-actions/dist/types").PayloadAction<"Show toast", {
    toast: Omit<Toast, "id">;
}>;
export declare type ShowToastAction = ReturnType<typeof showToast>;
export declare const RENDER_TOAST = "Render toast";
export declare const renderToast: (id: number) => import("typesafe-actions/dist/types").PayloadAction<"Render toast", {
    id: number;
}>;
export declare type RenderToastAction = ReturnType<typeof renderToast>;
export declare const HIDE_TOAST = "Hide toast";
export declare const hideToast: (id: number) => import("typesafe-actions/dist/types").PayloadAction<"Hide toast", {
    id: number;
}>;
export declare type HideToastAction = ReturnType<typeof hideToast>;
export declare const HIDE_ALL_TOASTS = "Hide all toasts";
export declare const hideAllToasts: () => import("typesafe-actions/dist/types").EmptyAction<"Hide all toasts">;
export declare type HideAllToastsAction = ReturnType<typeof hideAllToasts>;
