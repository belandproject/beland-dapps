export declare const getModalActions: <T>() => {
    openModal: (name: T, metadata?: any) => import("typesafe-actions/dist/types").PayloadAction<"Open modal", {
        name: T;
        metadata: any;
    }>;
    closeModal: (name: T) => import("typesafe-actions/dist/types").PayloadAction<"Close modal", {
        name: T;
    }>;
    toggleModal: (name: T) => import("typesafe-actions/dist/types").PayloadAction<"Toggle modal", {
        name: T;
    }>;
};
declare const openModal: (name: string, metadata?: any) => import("typesafe-actions/dist/types").PayloadAction<"Open modal", {
    name: string;
    metadata: any;
}>, closeModal: (name: string) => import("typesafe-actions/dist/types").PayloadAction<"Close modal", {
    name: string;
}>, toggleModal: (name: string) => import("typesafe-actions/dist/types").PayloadAction<"Toggle modal", {
    name: string;
}>;
export declare const OPEN_MODAL = "Open modal";
export { openModal };
export declare type OpenModalAction = ReturnType<typeof openModal>;
export declare const CLOSE_MODAL = "Close modal";
export { closeModal };
export declare type CloseModalAction = ReturnType<typeof closeModal>;
export declare const TOGGLE_MODAL = "Toggle modal";
export { toggleModal };
export declare type ToggleModalAction = ReturnType<typeof toggleModal>;
export declare const CLOSE_ALL_MODALS = "Close all modals";
export declare const closeAllModals: () => import("typesafe-actions/dist/types").PayloadAction<"Close all modals", {}>;
export declare type CloseAllModalsAction = ReturnType<typeof closeAllModals>;
