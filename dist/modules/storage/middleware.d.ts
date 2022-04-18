import { StorageOwnData } from '../../lib/types';
import { StorageMiddleware } from './types';
export declare function createStorageMiddleware<T extends StorageOwnData>(options: StorageMiddleware<T>): {
    storageMiddleware: any;
    loadStorageMiddleware: any;
};
