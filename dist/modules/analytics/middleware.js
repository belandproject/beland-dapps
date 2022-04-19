"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAnalyticsMiddleware = void 0;
const utils_1 = require("./utils");
require("./snippet");
const disabledMiddleware = _ => next => action => {
    next(action);
};
function createAnalyticsMiddleware(apiKey) {
    if (!apiKey) {
        console.warn('Analytics: middleware disabled due to missing API key');
        return disabledMiddleware;
    }
    const analytics = utils_1.getAnalytics();
    if (!analytics) {
        console.warn('Analytics: middleware disabled because `window.analytics` is not present');
        return disabledMiddleware;
    }
    analytics.load(apiKey);
    return _ => next => action => {
        utils_1.track(action);
        next(action);
    };
}
exports.createAnalyticsMiddleware = createAnalyticsMiddleware;
//# sourceMappingURL=middleware.js.map