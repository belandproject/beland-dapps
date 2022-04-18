import { ProviderType } from '@beland/schemas/dist/dapps/provider-type';
import { LoginModalOptionType } from '@beland/uikit/dist/components/LoginModal/LoginModal';
export declare function toModalOptionType(providerType: ProviderType): LoginModalOptionType | undefined;
export declare function toProviderType(modalOptionType: LoginModalOptionType): ProviderType;
