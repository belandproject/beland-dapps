"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const selectors_1 = require("../../modules/profile/selectors");
const actions_1 = require("../../modules/profile/actions");
const Profile_1 = __importDefault(require("./Profile"));
const mapState = (state, ownProps) => {
    const profile = selectors_1.getData(state)[ownProps.address];
    return {
        avatar: profile ? profile.avatars[0] : null
    };
};
const mapDispatch = (dispatch) => ({
    onLoadProfile: address => dispatch(actions_1.loadProfileRequest(address))
});
exports.default = react_redux_1.connect(mapState, mapDispatch)(Profile_1.default);
//# sourceMappingURL=Profile.container.js.map