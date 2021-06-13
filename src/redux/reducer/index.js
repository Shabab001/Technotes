import { combineReducers } from 'redux'
import auth from "./authReducer"
import note from "./noteReducer"
import share from "./shareReducer"

export default combineReducers({
  auth,
  note,
  share
})
