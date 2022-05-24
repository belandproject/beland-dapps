import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
export declare const isENSAddress: (address: string) => boolean;
export declare const resolveENSname: (name: string, chainId: ChainId) => Promise<string | null>;
