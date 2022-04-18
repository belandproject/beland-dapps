import { ButtonProps } from '@beland/uikit/dist/components/Button/Button'
import { Network } from '@beland/schemas/dist/dapps/network'

export type Props = ButtonProps & {
  network: Network
}
