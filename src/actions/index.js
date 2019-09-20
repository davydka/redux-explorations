import * as types from '../constants/ActionTypes'

export const increment = (amount) => {
  return {
    type: types.INCREMENT,
    payload: amount
  }
}

export const decrement = (amount) => {
  return {
    type: types.DECREMENT,
    payload: amount
  }
}
export const signIn = () => {
  return {
    type: types.SIGN_IN
  }
}

export const signOut = () => {
  return {
    type: types.SIGN_OUT
  }
}

