import { API_START, API_FINISH } from "../constants/actionTypes"

export const apiStart = (label) => ({
    type: API_START,
    payload: {
        label: label
    }
});

export const apiFinish = (label) => ({
    type: API_FINISH,
    payload: {
        label: label
    }
});