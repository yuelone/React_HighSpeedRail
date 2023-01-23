import React from 'react'
import ReactDOM from 'react-dom/client'
// import { Provider } from 'react-redux'

// import configureStore from 'Redux/store'

// import 'core-js'

// const store = configureStore()

import App from './app'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <Provider store={store}> */}
    {/* <App store={store} /> */}
    <App />
    {/* </Provider> */}
  </>,
)
