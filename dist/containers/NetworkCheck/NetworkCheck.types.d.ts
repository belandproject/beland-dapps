/// <reference types="react" />
import { Network } from '@beland/schemas/dist/dapps/network';
export declare type Props = {
    network: Network;
    children: (enabled: boolean) => React.ReactNode;
};
