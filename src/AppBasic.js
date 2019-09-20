import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {decrement, increment, signIn, signOut} from './actions'

function AppBasic() {
  const counter = useSelector( state => state.counter )
  const isLoggedIn = useSelector( state => state.isLoggedIn )

  const dispatch = useDispatch()

  return (
    <div>
      <div>count is {counter}</div>
      <div>
        <button onClick={() => dispatch(increment(5))}>+ 5</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>

      <hr />

      <div>{isLoggedIn ? 'signed in' : 'not signed in'}</div>
      <div>
        <button onClick={() => dispatch(signIn())}>sign in</button>
        <button onClick={() => dispatch(signOut())}>sign out</button>
      </div>
    </div>
  )
}

export default AppBasic
