"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Button_1 = require("@beland/uikit/dist/components/Button/Button");
const ChainCheck_1 = __importDefault(require("../ChainCheck"));
const disabledStyle = { opacity: 0.5, cursor: 'not-allowed', transform: 'none' };
class ChainButton extends react_1.default.PureComponent {
    render() {
        const _a = this.props, { chainId, onClick } = _a, rest = __rest(_a, ["chainId", "onClick"]);
        return (react_1.default.createElement(ChainCheck_1.default, { chainId: chainId }, isEnabled => {
            const props = isEnabled ? { onClick } : { style: disabledStyle };
            return react_1.default.createElement(Button_1.Button, Object.assign({}, rest, props));
        }));
    }
}
exports.default = ChainButton;
//# sourceMappingURL=ChainButton.js.map