/// <reference types="react" />
import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
export declare type Props = {
    chainId: ChainId;
    children: (enabled: boolean) => React.ReactNode;
};
