"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntercomWidget = void 0;
const utils_1 = require("../../lib/utils");
const intercomWindow = window;
class IntercomWidget {
    constructor() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new IntercomWidget();
        }
        return this.instance;
    }
    set appId(id) {
        this._appId = id;
        this.client = getWindowClient(id);
    }
    get appId() {
        return this._appId;
    }
    set settings(settings) {
        this._settings = settings;
        intercomWindow.intercomSettings = settings;
    }
    get settings() {
        return this._settings;
    }
    init(appId, settings) {
        this.appId = appId;
        if (settings) {
            this.settings = settings;
        }
    }
    inject() {
        return new Promise(resolve => {
            if (this.isInjected()) {
                return resolve();
            }
            const script = utils_1.insertScript({
                src: `https://widget.intercom.io/widget/${this._appId}`
            });
            script.addEventListener('load', () => resolve(), true);
        }).then(() => {
            this.client = getWindowClient(this._appId);
        });
    }
    render(data = {}) {
        this.client('reattach_activator');
        this.client('update', Object.assign(Object.assign({}, data), { app_id: this._appId }));
    }
    showNewMessage(text) {
        this.client('showNewMessage', text);
    }
    unmount() {
        this.client('shutdown');
    }
    isInjected() {
        return isInjected();
    }
}
exports.IntercomWidget = IntercomWidget;
function getWindowClient(appId) {
    return (...args) => {
        if (!appId) {
            return console.warn('Intercom app id empty. Check that the environment is propery set');
        }
        if (utils_1.isMobile()) {
            return;
        }
        if (!isInjected()) {
            return console.warn('Intercom called before injection');
        }
        intercomWindow.Intercom(...args);
    };
}
function isInjected() {
    return typeof intercomWindow.Intercom === 'function';
}
//# sourceMappingURL=IntercomWidget.js.map