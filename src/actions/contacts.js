import { ADD_CONTACT, DEL_CONTACT } from "../constants/actionTypes"
/*
 * action creators
 */

export function addContact(contact) {
  return { type: ADD_CONTACT, contact }
}

export function delContact(index) {
  return { type: DEL_CONTACT, index }
}