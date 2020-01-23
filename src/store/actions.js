import * as actionTypes from './actionTypes';

export function showModal(message) {
    return {
        type: actionTypes.SHOW_MODAL,
        message: message
    }
}

export function hideModal() {
    return {
        type: actionTypes.HIDE_MODAL
    }
}