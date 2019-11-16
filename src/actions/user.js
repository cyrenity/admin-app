import { HTTP_API } from "../constants/actionTypes"
import { SHOW_ERROR, SHOW_USERS_LIST } from "../constants/actionTypes"

export const showUsersList = (users) => ({
    type: SHOW_USERS_LIST,
    payload: users
})

export const showUserError = (error) => ({
    type: SHOW_ERROR,
    payload: {
        error: error
    }
})

export const fetchUsers = () => ({
    type: HTTP_API,
    payload: {
        url: `https://jsonplaceholder.typicode.com/users/`,
        on_success: showUsersList,
        on_error: showUserError,
        label: 'user'
    }
});