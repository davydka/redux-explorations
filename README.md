This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Getting Started
* so far, have bootstrapped app with `create-react-app demo`
* deleted `App.css, App.test.js, index.css, serviceWorker.js`
* `yarn add redux react-redux`
* create `src/constants/ActionTypes.js`
    * `export const INCREMENT = 'INCREMENT'`
    * `export const DECREMENT = 'DECREMENT'`
    * `export const SIGN_IN = 'SIGN_IN'`
    * `export const SIGN_OUT = 'SIGN_OUT'`
* create `src/reducers/index.js`
    * create more reducers, export them
    * use `combineReducers` in `reducers/index`
* create `src/actions/index.js`



## Redux Notes

* Store - globalized state, accessible anywhere
* Action - describes what you want to do, it's name is what it does, has payload
* Reducer - how actions transform state into next state
* Dispatch - execute the action, sends it to the reducer

* `action creator`
    * creates an
* `action`
    * gets fed to a
* `dispatch`
    * forwards the action to
* `reducers`
    * creates a new
* `state`


