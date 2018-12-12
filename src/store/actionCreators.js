import * as actionTypes from './actionTypes';

export const getTextArea = (e) => {
    return {
        type: actionTypes.GET_TEXTAREA_VALUE,
        payload: e
    }
}