import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
import { ContractName } from '@beland/transactions';
export declare enum AuthorizationType {
    ALLOWANCE = "allowance",
    APPROVAL = "approval"
}
export declare enum AuthorizationAction {
    GRANT = "grant",
    REVOKE = "revoke"
}
export declare type Authorization = {
    type: AuthorizationType;
    address: string;
    contractAddress: string;
    authorizedAddress: string;
    contractName: ContractName;
    chainId: ChainId;
};
