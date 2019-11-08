import { ADD_CONTACT, DEL_CONTACT } from "../constants/actionTypes"

const initialState = []

function contacts(state = initialState, action) {
    switch (action.type) {
      case ADD_CONTACT:
        return [
          ...state,
          {
            name: action.contact.name,
            phone: action.contact.phone
          }
        ]
      case DEL_CONTACT:
        return state.map((contact, index) => {
          if (index === action.index) {
            return Object.assign({}, contact, {
              completed: !contact.completed
            })
          }
          return contact
        })
      default:
        return state
    }
  }

  export default contacts;