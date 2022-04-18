"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeProfile = exports.CHANGE_PROFILE = exports.clearProfileError = exports.CLEAR_PROFILE_ERROR = exports.setProfileAvatarDescriptionFailure = exports.setProfileAvatarDescriptionSuccess = exports.setProfileAvatarDescriptionRequest = exports.SET_PROFILE_AVATAR_DESCRIPTION_FAILURE = exports.SET_PROFILE_AVATAR_DESCRIPTION_SUCCESS = exports.SET_PROFILE_AVATAR_DESCRIPTION_REQUEST = exports.loadProfileFailure = exports.loadProfileSuccess = exports.loadProfileRequest = exports.LOAD_PROFILE_FAILURE = exports.LOAD_PROFILE_SUCCESS = exports.LOAD_PROFILE_REQUEST = void 0;
const typesafe_actions_1 = require("typesafe-actions");
// Load project profile
exports.LOAD_PROFILE_REQUEST = '[Request] Load profile';
exports.LOAD_PROFILE_SUCCESS = '[Success] Load profile';
exports.LOAD_PROFILE_FAILURE = '[Failure] Load profile';
const loadProfileRequest = (address) => typesafe_actions_1.action(exports.LOAD_PROFILE_REQUEST, { address });
exports.loadProfileRequest = loadProfileRequest;
const loadProfileSuccess = (address, profile) => typesafe_actions_1.action(exports.LOAD_PROFILE_SUCCESS, { address, profile });
exports.loadProfileSuccess = loadProfileSuccess;
const loadProfileFailure = (address, error) => typesafe_actions_1.action(exports.LOAD_PROFILE_FAILURE, { address, error });
exports.loadProfileFailure = loadProfileFailure;
// Set profile description
exports.SET_PROFILE_AVATAR_DESCRIPTION_REQUEST = '[Request] Set profile avatar description';
exports.SET_PROFILE_AVATAR_DESCRIPTION_SUCCESS = '[Success] Set profile avatar description';
exports.SET_PROFILE_AVATAR_DESCRIPTION_FAILURE = '[Failure] Set profile avatar description';
const setProfileAvatarDescriptionRequest = (address, description) => typesafe_actions_1.action(exports.SET_PROFILE_AVATAR_DESCRIPTION_REQUEST, { address, description });
exports.setProfileAvatarDescriptionRequest = setProfileAvatarDescriptionRequest;
const setProfileAvatarDescriptionSuccess = (address, description, version) => typesafe_actions_1.action(exports.SET_PROFILE_AVATAR_DESCRIPTION_SUCCESS, {
    address,
    description,
    version
});
exports.setProfileAvatarDescriptionSuccess = setProfileAvatarDescriptionSuccess;
const setProfileAvatarDescriptionFailure = (address, error) => typesafe_actions_1.action(exports.SET_PROFILE_AVATAR_DESCRIPTION_FAILURE, { address, error });
exports.setProfileAvatarDescriptionFailure = setProfileAvatarDescriptionFailure;
// Errors
exports.CLEAR_PROFILE_ERROR = '[Clear] Clear profile error';
const clearProfileError = () => typesafe_actions_1.action(exports.CLEAR_PROFILE_ERROR);
exports.clearProfileError = clearProfileError;
// Change Profile
exports.CHANGE_PROFILE = 'Change Profile';
const changeProfile = (address, profile) => typesafe_actions_1.action(exports.CHANGE_PROFILE, { address, profile });
exports.changeProfile = changeProfile;
//# sourceMappingURL=actions.js.map