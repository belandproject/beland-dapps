import React from 'react';
import { Props } from './NetworkCheck.types';
export default class ChainCheck extends React.PureComponent<Props> {
    getChainId: () => import("@beland/schemas/dist/dapps/chain-id").ChainId | null;
    render(): JSX.Element;
}
