import { toBN } from 'web3x/utils';
import { Authorization } from './types';
export declare function getTokenAmountToApprove(): ReturnType<typeof toBN>;
export declare function hasAuthorization(authorizations: Authorization[], authorizationToFind: Authorization): boolean;
export declare function areEqual(left: Authorization, right: Authorization): boolean;
export declare function isValidType(type: string): boolean;
