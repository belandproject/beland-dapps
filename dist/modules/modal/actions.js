"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.closeAllModals = exports.CLOSE_ALL_MODALS = exports.toggleModal = exports.TOGGLE_MODAL = exports.closeModal = exports.CLOSE_MODAL = exports.openModal = exports.OPEN_MODAL = exports.getModalActions = void 0;
const typesafe_actions_1 = require("typesafe-actions");
const getModalActions = () => ({
    openModal: function (name, metadata = null) {
        return (0, typesafe_actions_1.action)(exports.OPEN_MODAL, { name, metadata });
    },
    closeModal: function (name) {
        return (0, typesafe_actions_1.action)(exports.CLOSE_MODAL, { name });
    },
    toggleModal: function (name) {
        return (0, typesafe_actions_1.action)(exports.TOGGLE_MODAL, { name });
    }
});
exports.getModalActions = getModalActions;
const { openModal, closeModal, toggleModal } = (0, exports.getModalActions)();
exports.openModal = openModal;
exports.closeModal = closeModal;
exports.toggleModal = toggleModal;
// Open Modal
exports.OPEN_MODAL = 'Open modal';
// Close Modal
exports.CLOSE_MODAL = 'Close modal';
// Toggle Modal
exports.TOGGLE_MODAL = 'Toggle modal';
// Close All Modals
exports.CLOSE_ALL_MODALS = 'Close all modals';
const closeAllModals = () => (0, typesafe_actions_1.action)(exports.CLOSE_ALL_MODALS, {});
exports.closeAllModals = closeAllModals;
//# sourceMappingURL=actions.js.map