"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationAction = exports.AuthorizationType = void 0;
var AuthorizationType;
(function (AuthorizationType) {
    AuthorizationType["ALLOWANCE"] = "allowance";
    AuthorizationType["APPROVAL"] = "approval";
})(AuthorizationType = exports.AuthorizationType || (exports.AuthorizationType = {}));
var AuthorizationAction;
(function (AuthorizationAction) {
    AuthorizationAction["GRANT"] = "grant";
    AuthorizationAction["REVOKE"] = "revoke";
})(AuthorizationAction = exports.AuthorizationAction || (exports.AuthorizationAction = {}));
//# sourceMappingURL=types.js.map