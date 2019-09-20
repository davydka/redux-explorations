import { combineReducers } from 'redux'
import counter from './counter'
import isLoggedIn from './isLoggedIn'


export default combineReducers({
  counter,
  isLoggedIn
})