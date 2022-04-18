import { Toast } from './types';
export declare function set(id: number, toast: Toast | Omit<Toast, 'id'>): void;
export declare function get(id: string | number): Toast;
export declare function remove(id: string | number): boolean;
export declare function getAll(): Toast[];
