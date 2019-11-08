
import axios from 'axios';
import {HTTP_API} from '../constants/actionTypes';
import { apiStart, apiFinish } from '../actions/api';

const apiMiddleware = ({ dispatch }) => next => action => {
    next(action);
    if (action.type !== HTTP_API) {
    return;
    }

    dispatch(apiStart(action.payload.label))

    const { url, on_success, on_error } = action.payload;
    axios.get(url)
    .then(({ data }) => { 
        dispatch(apiFinish(action.payload.label))
        dispatch(on_success(data)) 
    })
    .catch(error => dispatch(on_error(error)));
};

export default apiMiddleware;