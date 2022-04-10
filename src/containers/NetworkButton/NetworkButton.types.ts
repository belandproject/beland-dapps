import { ButtonProps } from 'decentraland-ui/dist/components/Button/Button'
import { Network } from '@beland/schemas/dist/dapps/network'

export type Props = ButtonProps & {
  network: Network
}
