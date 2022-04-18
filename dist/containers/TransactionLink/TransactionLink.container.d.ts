/// <reference types="react" />
import { OwnProps } from './TransactionLink.types';
import TransactionLink from './TransactionLink';
declare const _default: import("react-redux").ConnectedComponent<typeof TransactionLink, import("react-redux").Omit<Pick<import("react").ClassAttributes<TransactionLink> & Partial<import("./TransactionLink.types").DefaultProps> & {
    address: string;
    txHash: string;
    chainId?: import("@beland/schemas").ChainId | undefined;
    children: import("react").ReactNode;
}, "address" | "children" | "chainId" | "txHash" | keyof import("react").ClassAttributes<TransactionLink>> & Partial<Pick<import("react").ClassAttributes<TransactionLink> & Partial<import("./TransactionLink.types").DefaultProps> & {
    address: string;
    txHash: string;
    chainId?: import("@beland/schemas").ChainId | undefined;
    children: import("react").ReactNode;
}, keyof import("./TransactionLink.types").DefaultProps>> & Partial<Pick<import("./TransactionLink.types").DefaultProps, never>>, "chainId"> & OwnProps>;
export default _default;
