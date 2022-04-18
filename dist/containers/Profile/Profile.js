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
const Profile_1 = require("@beland/uikit/dist/components/Profile/Profile");
class Profile extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.timeout = null;
    }
    componentWillMount() {
        this.fetchProfile(this.props);
    }
    componentDidUpdate(prevProps) {
        if (prevProps.address !== this.props.address) {
            this.fetchProfile(this.props);
        }
    }
    fetchProfile(props) {
        const { address, avatar, debounce, onLoadProfile } = props;
        if (!avatar) {
            if (debounce) {
                if (this.timeout) {
                    clearTimeout(this.timeout);
                }
                this.timeout = setTimeout(() => {
                    onLoadProfile(address);
                    this.timeout = null;
                }, debounce);
            }
            else {
                onLoadProfile(address);
            }
        }
    }
    render() {
        return React.createElement(Profile_1.Profile, Object.assign({}, this.props));
    }
}
exports.default = Profile;
Profile.defaultProps = {
    inline: true
};
//# sourceMappingURL=Profile.js.map