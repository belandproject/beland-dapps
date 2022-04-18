/// <reference types="react" />
import ChainProvider from './ChainProvider';
declare const _default: import("react-redux").ConnectedComponent<typeof ChainProvider, import("react-redux").Omit<import("react").ClassAttributes<ChainProvider> & import("./ChainProvider.types").ChainData & {
    children: (data: import("./ChainProvider.types").ChainData) => import("react").ReactNode;
}, "network" | "chainId" | "isConnected" | "isSupported" | "isPartiallySupported" | "isUnsupported">>;
export default _default;
