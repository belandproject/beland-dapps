import { ChainId } from '@beland/schemas';
import React from 'react';
export declare enum AddressError {
    INVALID = "invalid_address",
    ENS_NOT_RESOLVED = "ens_not_resolved"
}
export declare type AddressProviderResult = {
    address: string | null;
    ens: string | null;
    isLoading: boolean;
    error?: AddressError;
};
export declare type Props = {
    input: string;
    children: (result: AddressProviderResult) => React.ReactNode | null;
    chainId: ChainId;
};
export declare type MapStateProps = Pick<Props, 'chainId'>;
