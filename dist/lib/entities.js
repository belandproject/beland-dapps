"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntitesOperator = void 0;
const dcl_crypto_1 = require("dcl-crypto");
const personal_1 = require("web3x/personal");
const eth_1 = require("web3x/eth");
const address_1 = require("web3x/address");
const dcl_catalyst_client_1 = require("dcl-catalyst-client");
const dcl_catalyst_commons_1 = require("dcl-catalyst-commons");
const eth_2 = require("./eth");
const peer_1 = require("./peer");
class EntitesOperator {
    constructor(peerUrl) {
        this.catalystClient = new dcl_catalyst_client_1.CatalystClient(peerUrl, 'builder');
        this.peerAPI = new peer_1.PeerAPI(peerUrl);
    }
    /**
     * Builds the entity deployment preparation data by preparing
     * the contents of an entity that doesn't need new files to be
     * added.
     *
     * @param entity - The entity that will be pre-processed prior to its deployment.
     * @param type - The entity type that will be prepared to be deployed.
     * @param address - The address of the owner of the entity to be deployed.
     */
    buildDeployPreparationDataWithoutFiles(entity, type, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const content = new Map((entity.content || []).map(({ file, hash }) => [file, hash]));
            return dcl_catalyst_client_1.DeploymentBuilder.buildEntityWithoutNewFiles(type, [address], content, entity.metadata);
        });
    }
    /**
     * Uses the provider to request the user for a signature to
     * deploy an entity.
     *
     * @param address - The address of the deployer of the entity.
     * @param entityId - The entity id that it's going to be deployed.
     */
    authenticateEntityDeployment(address, entityId) {
        return __awaiter(this, void 0, void 0, function* () {
            const provider = yield eth_2.getConnectedProvider();
            if (!provider)
                throw new Error("The provider couldn't be retrieved when creating the auth chain");
            const eth = new eth_1.Eth(provider);
            const personal = new personal_1.Personal(eth.provider);
            const signature = yield personal.sign(entityId, address_1.Address.fromString(address), '');
            return dcl_crypto_1.Authenticator.createSimpleAuthChain(entityId, address, signature);
        });
    }
    /**
     * Gets the first {@link ProfileEntity} out of multiple possible profile entities or
     * returns the last one in case the given address has no profile entities.
     *
     * @param address - The address that owns the profile entity being retrieved.
     */
    getProfileEntity(address) {
        return __awaiter(this, void 0, void 0, function* () {
            const entities = yield this.catalystClient.fetchEntitiesByPointers(dcl_catalyst_commons_1.EntityType.PROFILE, [address.toLowerCase()]);
            if (entities.length > 0) {
                return entities[0];
            }
            return this.peerAPI.getDefaultProfileEntity();
        });
    }
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
    deployEntityWithoutNewFiles(entity, entityType, address) {
        return __awaiter(this, void 0, void 0, function* () {
            const deployPreparationData = yield this.buildDeployPreparationDataWithoutFiles(entity, entityType, address);
            const authChain = yield this.authenticateEntityDeployment(address, deployPreparationData.entityId);
            return this.catalystClient.deployEntity(Object.assign(Object.assign({}, deployPreparationData), { authChain }));
        });
    }
}
exports.EntitesOperator = EntitesOperator;
//# sourceMappingURL=entities.js.map