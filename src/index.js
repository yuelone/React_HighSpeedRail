import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'

import configureStore from 'Redux/store'

import App from './app'

const store = configureStore()

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
)
