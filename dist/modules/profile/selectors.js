"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProfileError = exports.isLoadingSetProfileAvatarDescription = exports.getProfileOfAddress = exports.getLoading = exports.getError = exports.getData = exports.getState = void 0;
const selectors_1 = require("../loading/selectors");
const actions_1 = require("./actions");
const getState = state => state.profile;
exports.getState = getState;
const getData = state => exports.getState(state).data;
exports.getData = getData;
const getError = state => exports.getState(state).error;
exports.getError = getError;
const getLoading = (state) => exports.getState(state).loading;
exports.getLoading = getLoading;
const getProfileOfAddress = (state, address) => exports.getData(state)[address];
exports.getProfileOfAddress = getProfileOfAddress;
const isLoadingSetProfileAvatarDescription = (state) => selectors_1.isLoadingType(exports.getLoading(state), actions_1.SET_PROFILE_AVATAR_DESCRIPTION_REQUEST);
exports.isLoadingSetProfileAvatarDescription = isLoadingSetProfileAvatarDescription;
const getProfileError = (state) => exports.getState(state).error;
exports.getProfileError = getProfileError;
//# sourceMappingURL=selectors.js.map