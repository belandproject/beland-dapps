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
const react_1 = __importStar(require("react"));
const ethers_1 = require("ethers");
const AddressProvider_types_1 = require("./AddressProvider.types");
const utils_1 = require("./utils");
const AddressProvider = (props) => {
    const { children, input, chainId } = props;
    const isENS = input && utils_1.isENSAddress(input);
    const [address, setAddress] = react_1.useState(input && !isENS ? input : null);
    const [isLoading, setIsLoading] = react_1.useState(!!isENS);
    const [error, setError] = react_1.useState();
    react_1.useEffect(() => {
        if (address && !ethers_1.utils.isAddress(address) && !isENS) {
            setError(AddressProvider_types_1.AddressError.INVALID);
        }
    }, [address, isENS]);
    // Resolves ENS name if needed
    react_1.useEffect(() => {
        let cancel = false;
        const resolveAddress = () => __awaiter(void 0, void 0, void 0, function* () {
            if (input && isENS) {
                setIsLoading(true);
                const resolvedAddress = yield utils_1.resolveENSname(input, chainId);
                setIsLoading(false);
                if (cancel)
                    return;
                if (!resolvedAddress) {
                    setError(AddressProvider_types_1.AddressError.ENS_NOT_RESOLVED);
                    return;
                }
                setAddress(resolvedAddress);
            }
        });
        resolveAddress();
        return () => {
            cancel = true;
        };
    }, [isENS, input]);
    return (react_1.default.createElement(react_1.default.Fragment, null, children({ address, ens: isENS ? input : null, isLoading, error })));
};
exports.default = react_1.default.memo(AddressProvider);
//# sourceMappingURL=AddressProvider.js.map