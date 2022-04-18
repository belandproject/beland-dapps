import { Entity, EntityType } from 'dcl-catalyst-commons';
import { ProfileEntity } from './types';
export declare class EntitesOperator {
    private readonly catalystClient;
    private readonly peerAPI;
    constructor(peerUrl: string);
    /**
     * Builds the entity deployment preparation data by preparing
     * the contents of an entity that doesn't need new files to be
     * added.
     *
     * @param entity - The entity that will be pre-processed prior to its deployment.
     * @param type - The entity type that will be prepared to be deployed.
     * @param address - The address of the owner of the entity to be deployed.
     */
    private buildDeployPreparationDataWithoutFiles;
    /**
     * Uses the provider to request the user for a signature to
     * deploy an entity.
     *
     * @param address - The address of the deployer of the entity.
     * @param entityId - The entity id that it's going to be deployed.
     */
    private authenticateEntityDeployment;
    /**
     * Gets the first {@link ProfileEntity} out of multiple possible profile entities or
     * returns the last one in case the given address has no profile entities.
     *
     * @param address - The address that owns the profile entity being retrieved.
     */
    getProfileEntity(address: string): Promise<ProfileEntity>;
    /**
     * Deploys an entity of a determined type.
     * This method will build everything related to the deployment of
     * the entity and will prompt the user for their signature before
     * doing a deployment.
     *
     * @param entity - The title of the book.
     * @param entityType - The type of the entity.
     * @param address - The owner / soon to be owner of the entity.
     */
    deployEntityWithoutNewFiles(entity: Entity, entityType: EntityType, address: string): Promise<any>;
}
