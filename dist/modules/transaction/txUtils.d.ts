import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { AnyTransaction } from './types';
export declare function getTransaction(address: string, chainId: ChainId, hash: string): Promise<AnyTransaction | null>;
