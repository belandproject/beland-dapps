import { Dispatch } from 'redux'
import { ChainId } from '@beland/schemas/dist/dapps/chain-id'
import { Network } from '@beland/schemas/dist/dapps/network'

export type ChainData = {
  chainId: ChainId | null
  network: Network | null
  isConnected: boolean
  isSupported: boolean
  isPartiallySupported: boolean
  isUnsupported: boolean
}

export type Props = ChainData & {
  children: (data: ChainData) => React.ReactNode
}

export type MapStateProps = Pick<
  Props,
  | 'chainId'
  | 'network'
  | 'isConnected'
  | 'isSupported'
  | 'isPartiallySupported'
  | 'isUnsupported'
>
export type MapDispatchProps = {}
export type MapDispatch = Dispatch
