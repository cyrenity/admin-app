import { SHOW_ERROR } from "../constants/actionTypes"

const initialState = []

export default function errors(state = initialState, action) {
  switch (action.type) {
    case SHOW_ERROR:
      return [
        ...state,
        {
          error: action.payload.error.message,
        }
      ]
    default:
      return state
  }
}