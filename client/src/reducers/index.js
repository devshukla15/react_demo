import { combineReducers } from "redux"
import place from "./place"
import auth from "./auth"

export default combineReducers({
  place,
  auth,
})
