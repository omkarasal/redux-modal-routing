import * as actionTypes from './actionTypes';

const initialState = {
    isShowing: false,
    message: ''
}

function toggleModal(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SHOW_MODAL:
            return Object.assign({}, state, {
                isShowing: true,
                message: 'Modal showing successfully'
            })
        case actionTypes.HIDE_MODAL:
            return Object.assign({}, state, {
                isShowing: false,
                message: ''
            })
        default:
            return state;
    }
}

export default toggleModal;