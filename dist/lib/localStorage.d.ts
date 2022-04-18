import { Migrations, LocalStorage, StorageOwnData } from './types';
export declare function hasLocalStorage(): boolean;
export declare function getLocalStorage(): LocalStorage;
export declare function getDefaultState<T>(migrations: Migrations<T>): {
    storage: {
        version: number;
    };
};
export declare function migrateStorage<T extends StorageOwnData>(key: string, migrations: Migrations<T>): T;
