import { ChainId } from '@beland/schemas';
export declare const isENSAddress: (address: string) => boolean;
export declare const resolveENSname: (name: string, chainId: ChainId) => Promise<string>;
