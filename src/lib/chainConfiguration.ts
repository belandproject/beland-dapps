import { ChainId } from '@beland/schemas/dist/dapps/chain-id'
import { Network } from '@beland/schemas/dist/dapps/network'
import { RPC_URLS } from '@beland/connect/dist/connectors/NetworkConnector'

export const BEAN_GRAPH_BY_CHAIN_ID = {}

const NETWORK_MAPPING_BY_CHAIN_ID = {
  [ChainId.ETHEREUM_MAINNET]: {
    [Network.ETHEREUM]: ChainId.ETHEREUM_MAINNET,
    [Network.MATIC]: ChainId.MATIC_MAINNET
  },
  [ChainId.ETHEREUM_ROPSTEN]: {
    [Network.ETHEREUM]: ChainId.ETHEREUM_ROPSTEN,
    [Network.MATIC]: ChainId.MATIC_MUMBAI
  },
  [ChainId.ETHEREUM_GOERLI]: {
    [Network.ETHEREUM]: ChainId.ETHEREUM_GOERLI,
    [Network.MATIC]: ChainId.MATIC_MUMBAI
  },
  [ChainId.ETHEREUM_RINKEBY]: {
    [Network.ETHEREUM]: ChainId.ETHEREUM_RINKEBY,
    [Network.MATIC]: ChainId.MATIC_MUMBAI
  },
  [ChainId.MATIC_MAINNET]: {
    [Network.ETHEREUM]: ChainId.MATIC_MAINNET,
    [Network.MATIC]: ChainId.MATIC_MAINNET
  },
  [ChainId.MATIC_MUMBAI]: {
    [Network.ETHEREUM]: ChainId.MATIC_MUMBAI,
    [Network.MATIC]: ChainId.MATIC_MUMBAI
  },
  [ChainId.KAI_MAINNET]: {
    [Network.ETHEREUM]: ChainId.KAI_MAINNET,
    [Network.KAI]: ChainId.KAI_MAINNET
  }
}

const NETWORK_BY_CHAIN_ID: Record<ChainId, Network> = {
  [ChainId.ETHEREUM_MAINNET]: Network.ETHEREUM,
  [ChainId.ETHEREUM_ROPSTEN]: Network.ETHEREUM,
  [ChainId.ETHEREUM_GOERLI]: Network.ETHEREUM,
  [ChainId.ETHEREUM_KOVAN]: Network.ETHEREUM,
  [ChainId.ETHEREUM_RINKEBY]: Network.ETHEREUM,
  [ChainId.MATIC_MAINNET]: Network.MATIC,
  [ChainId.MATIC_MUMBAI]: Network.MATIC,
  [ChainId.KAI_MAINNET]: Network.KAI
}

type ChainConfiguration = {
  network: Network
  beanGraphURL: string
  rpcURL: string
  networkMapping: Record<Network, ChainId>
}

export function getChainConfiguration(chainId: ChainId): ChainConfiguration {
  return {
    network: NETWORK_BY_CHAIN_ID[chainId],
    beanGraphURL: BEAN_GRAPH_BY_CHAIN_ID[chainId],
    rpcURL: RPC_URLS[chainId],
    networkMapping: NETWORK_MAPPING_BY_CHAIN_ID[chainId]
  }
}
