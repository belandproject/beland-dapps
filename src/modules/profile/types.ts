import { Avatar } from '@beland/schemas/dist/platform/profile/avatar'

export type Profile = {
  avatars: Avatar[]
}

export type EntityDeploymentError = {
  message: string
  code?: number
}
