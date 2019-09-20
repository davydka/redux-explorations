import React from 'react';
import { connect } from 'react-redux'
// import counter from './reducers/counter'
import { increment, decrement, signIn, signOut } from './actions'

const App = (props) => {
  console.log(props)

  return (
    <div>
      <div>count is {props.counter}</div>
      <div>
        <button onClick={() => props.increment(5)}>+ 5</button>
        <button onClick={() => props.decrement()}>-</button>
      </div>

      <hr />

      <div>{props.isLoggedIn ? 'signed in' : 'not signed in'}</div>
      <div>
        <button onClick={() => props.signIn()}>sign in</button>
        <button onClick={() => props.signOut()}>sign out</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  counter: state.counter,
  isLoggedIn: state.isLoggedIn
})

const mapDispatchToProps = (dispatch) => ({
  increment: (count) => dispatch(increment(count)),
  decrement: (count) => dispatch(decrement(count)),
  signIn: () => dispatch(signIn()),
  signOut: () => dispatch(signOut())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
