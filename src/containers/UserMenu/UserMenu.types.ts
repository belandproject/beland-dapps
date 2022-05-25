import { Dispatch } from 'redux'
import { UserMenuProps } from '@beland/uikit/dist/components/UserMenu/UserMenu'
import {
  ConnectWalletRequestAction,
  DisconnectWalletAction
} from '../../modules/wallet/actions'

export type Props = UserMenuProps & { hasTranslations: boolean }

export type MapStateProps = Pick<
  Props,
  | 'isSignedIn'
  | 'isSigningIn'
  | 'address'
  | 'avatar'
  | 'beanBalances'
  | 'hasActivity'
  | 'hasTranslations'
>
export type MapDispatchProps = Pick<Props, 'onSignOut'>
export type MapDispatch = Dispatch<
  ConnectWalletRequestAction | DisconnectWalletAction
>
export type OwnProps = Partial<Props>
