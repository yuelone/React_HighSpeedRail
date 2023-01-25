/* eslint-disable object-curly-newline */
import { combineReducers } from 'redux'

import home from './home/reducers'

const rootReducers = {
  home,
}

const createReducer = (asyncReducers = {}) => {
  const reducers = combineReducers({
    ...rootReducers,
    ...asyncReducers,
  })
  return (state, action) => {
    if (action.type === 'LOGIN') {
      return reducers(undefined, action)
    }
    // if (action.type === 'RESET_AUTH_STORE') {
    //   const ignoreResetState = {
    //     noAuthPages: state.noAuthPages,
    //   }
    //   return reducers(ignoreResetState, action)
    // }
    return reducers(state, action)
  }
}

export default createReducer
