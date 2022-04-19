"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_redux_1 = require("react-redux");
const Footer_1 = __importDefault(require("./Footer"));
const selectors_1 = require("../../modules/translation/selectors");
const actions_1 = require("../../modules/translation/actions");
const mapState = (state) => {
    return {
        locale: selectors_1.getLocale(state),
        hasTranslations: selectors_1.isEnabled(state)
    };
};
const mapDispatch = (dispatch) => ({
    onChange: (_, { value }) => dispatch(actions_1.changeLocale(value))
});
const mergeProps = (stateProps, dispatchProps, ownProps) => (Object.assign(Object.assign(Object.assign({}, stateProps), dispatchProps), ownProps));
exports.default = react_redux_1.connect(mapState, mapDispatch, mergeProps)(Footer_1.default);
//# sourceMappingURL=Footer.container.js.map