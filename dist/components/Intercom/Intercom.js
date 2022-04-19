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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const IntercomWidget_1 = require("./IntercomWidget");
class Intercom extends React.PureComponent {
    constructor(props) {
        super(props);
        this.widget = IntercomWidget_1.IntercomWidget.getInstance();
        if (!this.widget.appId) {
            this.widget.init(props.appId, props.settings);
        }
        else {
            if (this.widget.appId !== props.appId) {
                throw new Error(`Intercom widget already inicialized with app id "${props.appId}". Only one intercom widget is allowed.`);
            }
            // Else, all settings will be ignored but no notice will be given
        }
    }
    componentDidMount() {
        this.renderWidget();
    }
    componentDidUpdate() {
        this.widget.settings = this.props.settings;
        this.renderWidget();
    }
    componentWillUnmount() {
        this.widget.unmount();
    }
    renderWidget() {
        return __awaiter(this, void 0, void 0, function* () {
            const { data } = this.props;
            try {
                yield this.widget.inject();
                this.widget.render(data);
            }
            catch (error) {
                console.error('Could not render intercom', error.message);
            }
        });
    }
    render() {
        return null;
    }
}
exports.default = Intercom;
Intercom.defaultProps = {
    data: {},
    settings: {
        alignment: 'left',
        horizontal_padding: 10,
        vertical_padding: 10
    }
};
//# sourceMappingURL=Intercom.js.map