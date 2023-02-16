/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable object-curly-newline */
import { applyMiddleware, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import createReducer from 'Redux/reducers'
import rootSaga from 'Redux/sagas'
import { composeWithDevTools } from 'remote-redux-devtools'
import logger from 'redux-logger'

const bindMiddleware = (middleware) => {
  // if (process.env.NODE_ENV !== 'production') {
  if (process.env.NODE_ENV === 'production') {
    middleware.push(logger)
    return composeWithDevTools(applyMiddleware(...middleware))
  }
  return applyMiddleware(...middleware)
}

// Code Splitting
function createSagaInjector(runSaga, sagaRoot) {
  // Create a dictionary to keep track of injected sagas
  const injectedSagas = new Map()

  const isInjected = (key) => injectedSagas.has(key)

  const injectSaga = (key, saga) => {
    // We won't run saga if it is already injected
    if (isInjected(key)) return

    // Sagas return task when they executed, which can be used
    // to cancel them
    const task = runSaga(saga)

    // Save the task if we want to cancel it in the future
    injectedSagas.set(key, task)
  }

  // Inject the root saga as it a staticlly loaded file,
  injectSaga('root', sagaRoot)

  return injectSaga
}

const configureStore = (initialState) => {
  const sagaMiddleware = createSagaMiddleware()
  const store = createStore(createReducer(), initialState, bindMiddleware([sagaMiddleware]))
  // 登入後才需要的reducer
  store.asyncReducers = {}

  // Add injectSaga method to our store
  store.injectSaga = createSagaInjector(sagaMiddleware.run, rootSaga)

  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer
    store.replaceReducer(createReducer(store.asyncReducers))
  }
  return store
}

export default configureStore
