import {
  SIGN_IN,
  SIGN_OUT
} from '../constants/ActionTypes'

const isLoggedIn = (state = false, action) => {
  switch(action.type) {
    case SIGN_IN:
      return true
    case SIGN_OUT:
      return false
    default:
      return false
  }
}

export default isLoggedIn