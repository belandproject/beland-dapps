import { Avatar } from '@beland/schemas/dist/platform/profile/avatar';
export declare type Profile = {
    avatars: Avatar[];
};
export declare type EntityDeploymentError = {
    message: string;
    code?: number;
};
