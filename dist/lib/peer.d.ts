import { LambdasClient } from 'dcl-catalyst-client';
import { Profile } from '../modules/profile/types';
import { BaseAPI } from './api';
import { ProfileEntity } from './types';
export declare class PeerAPI extends BaseAPI {
    cache: Record<string, Promise<Profile>>;
    lambdasClient: LambdasClient;
    constructor(url: string);
    /**
     * Fetches a profile only once by caching the promise
     * to prevent concurrent flying requests
     *
     * @param address - The address of the profile to retrieve.
     */
    fetchProfile(address: string): Promise<Profile>;
    /**
     * Gets the default entity structure for a profile.
     */
    getDefaultProfileEntity(): Promise<ProfileEntity>;
}
