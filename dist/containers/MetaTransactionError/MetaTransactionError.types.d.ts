import React from 'react';
import { Dispatch } from 'redux';
import { ChainId } from '@beland/schemas/dist/dapps/chain-id';
export declare type Props = {
    text: React.ReactNode;
    learnMoreLink?: string;
    onSwitchNetwork: (chainId: ChainId) => void;
};
export declare type MapDispatchProps = Pick<Props, 'onSwitchNetwork'>;
export declare type MapDispatch = Dispatch;
