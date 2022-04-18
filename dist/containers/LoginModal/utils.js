"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toProviderType = exports.toModalOptionType = void 0;
const provider_type_1 = require("@beland/schemas/dist/dapps/provider-type");
const LoginModal_1 = require("@beland/uikit/dist/components/LoginModal/LoginModal");
const eth_1 = require("../../lib/eth");
const { METAMASK, DAPPER, SAMSUNG, FORTMATIC, COINBASE, WALLET_CONNECT, WALLET_LINK } = LoginModal_1.LoginModalOptionType;
function toModalOptionType(providerType) {
    switch (providerType) {
        case provider_type_1.ProviderType.INJECTED:
            if (eth_1.isCucumberProvider()) {
                return SAMSUNG;
            }
            else if (eth_1.isCoinbaseProvider()) {
                return COINBASE;
            }
            else if (eth_1.isDapperProvider()) {
                return DAPPER;
            }
            else {
                return METAMASK;
            }
        case provider_type_1.ProviderType.FORTMATIC:
            return FORTMATIC;
        case provider_type_1.ProviderType.WALLET_CONNECT:
            return WALLET_CONNECT;
        case provider_type_1.ProviderType.WALLET_LINK:
            return WALLET_LINK;
        default:
            console.warn(`Invalid provider type ${providerType}`);
            return;
    }
}
exports.toModalOptionType = toModalOptionType;
function toProviderType(modalOptionType) {
    switch (modalOptionType) {
        case METAMASK:
        case COINBASE:
        case DAPPER:
        case SAMSUNG:
            return provider_type_1.ProviderType.INJECTED;
        case FORTMATIC:
            return provider_type_1.ProviderType.FORTMATIC;
        case WALLET_CONNECT:
            return provider_type_1.ProviderType.WALLET_CONNECT;
        case WALLET_LINK:
            return provider_type_1.ProviderType.WALLET_LINK;
        default:
            throw new Error(`Invalid login type ${modalOptionType}`);
    }
}
exports.toProviderType = toProviderType;
//# sourceMappingURL=utils.js.map