import { combineReducers } from 'redux';
import errors from "./errors";
import { users } from "./user";
import contacts from "./contacts";
import uiReducer from "./ui";

const rootReducer = combineReducers({
  contacts,
  errors,
  users,
  ui: uiReducer
})

export default rootReducer;