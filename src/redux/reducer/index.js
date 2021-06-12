import { combineReducers } from 'redux'
import auth from "./authReducer"
import note from "./noteReducer"

export default combineReducers({
  auth,
  note
})
