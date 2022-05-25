"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const network_1 = require("@beland/schemas/dist/dapps/network");
const utils_1 = require("../../modules/transaction/utils");
const selectors_1 = require("../../modules/wallet/selectors");
const actions_1 = require("../../modules/wallet/actions");
const selectors_2 = require("../../modules/profile/selectors");
const selectors_3 = require("../../modules/translation/selectors");
const selectors_4 = require("../../modules/transaction/selectors");
const UserMenu_1 = __importDefault(require("./UserMenu"));
const mapState = (state) => {
    const isSignedIn = (0, selectors_1.isConnected)(state);
    const address = (0, selectors_1.getAddress)(state);
    const profile = (0, selectors_2.getData)(state)[address];
    const networks = (0, selectors_1.getNetworks)(state);
    const beanBalances = {};
    if (isSignedIn) {
        beanBalances[network_1.Network.KAI] = networks === null || networks === void 0 ? void 0 : networks.KAI.bean;
    }
    return {
        address,
        beanBalances,
        avatar: profile ? profile.avatars[0] : undefined,
        isSignedIn,
        isSigningIn: (0, selectors_1.isConnecting)(state),
        hasActivity: (0, selectors_4.getTransactions)(state, address || '').some(tx => (0, utils_1.isPending)(tx.status)),
        hasTranslations: (0, selectors_3.isEnabled)(state)
    };
};
const mapDispatch = (dispatch) => ({
    onSignOut: () => dispatch((0, actions_1.disconnectWallet)())
});
const mergeProps = (mapStateProps, mapDispatchProps, ownProps) => (Object.assign(Object.assign(Object.assign({}, mapStateProps), mapDispatchProps), ownProps));
exports.default = (0, react_redux_1.connect)(mapState, mapDispatch, mergeProps)(UserMenu_1.default);
//# sourceMappingURL=UserMenu.container.js.map