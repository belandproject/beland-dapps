"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const UserMenu_1 = require("@beland/uikit/dist/components/UserMenu/UserMenu");
const utils_1 = require("../../modules/translation/utils");
class UserMenu extends React.Component {
    constructor() {
        super(...arguments);
        this.getTranslations = () => {
            if (!this.props.hasTranslations) {
                return undefined;
            }
            return {
                signIn: React.createElement(utils_1.T, { id: "@dapps.user_menu.sign_in" }),
                signOut: React.createElement(utils_1.T, { id: "@dapps.user_menu.sign_out" }),
                guest: React.createElement(utils_1.T, { id: "@dapps.user_menu.guest" }),
                settings: React.createElement(utils_1.T, { id: "@dapps.user_menu.settings" }),
                account: React.createElement(utils_1.T, { id: "@dapps.user_menu.account" })
            };
        };
    }
    render() {
        return React.createElement(UserMenu_1.UserMenu, Object.assign({}, this.props, { i18n: this.getTranslations() }));
    }
}
exports.default = UserMenu;
//# sourceMappingURL=UserMenu.js.map