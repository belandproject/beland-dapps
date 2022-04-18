"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configure = exports.getAnalytics = exports.isTrackable = exports.track = exports.add = exports.trackedActions = void 0;
exports.trackedActions = {};
let transformPayload = null;
function add(actionType, eventName, getPayload) {
    if (actionType in exports.trackedActions) {
        console.warn(`Analytics: the action type "${actionType}" is already being tracked!`);
        return;
    }
    exports.trackedActions[actionType] = { actionType, eventName, getPayload };
}
exports.add = add;
function track(action) {
    const analytics = getAnalytics();
    if (!analytics)
        return;
    if (isTrackable(action)) {
        const { eventName, getPayload } = exports.trackedActions[action.type];
        let event = action.type;
        if (eventName) {
            if (typeof eventName === 'string') {
                event = eventName;
            }
            else {
                event = eventName(action);
            }
        }
        let payload;
        if (getPayload) {
            payload = getPayload(action);
        }
        analytics.track(event, transformPayload ? transformPayload(payload) : payload);
    }
}
exports.track = track;
function isTrackable(action) {
    if (action && action.type) {
        return action.type in exports.trackedActions;
    }
    console.warn(`Analytics: invalid action "${JSON.stringify(action)}"`);
    return false;
}
exports.isTrackable = isTrackable;
function getAnalytics() {
    return window.analytics;
}
exports.getAnalytics = getAnalytics;
function configure(params) {
    if (params.transformPayload) {
        transformPayload = params.transformPayload;
    }
}
exports.configure = configure;
//# sourceMappingURL=utils.js.map