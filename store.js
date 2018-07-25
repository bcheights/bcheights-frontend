import { applyMiddleware, createStore } from "redux"
import { logger } from "redux-logger"
import createSagaMiddleware from "redux-saga"
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from "./reducers"
import rootSaga from "./saga"

const saga = createSagaMiddleware()
const middleware = process.env.NODE_ENV === 'production' ? 
    applyMiddleware(saga) : composeWithDevTools(applyMiddleware(logger, saga));

let store = null


const makeStore = (initialState, isServer) => {
  if (isServer && typeof window === 'undefined') {
    return createStore(reducer, initialState, middleware)
  } else {
    if (!store) {
      store = createStore(reducer, initialState, middleware)
    }
    saga.run(rootSaga)
    return store
  }
}

export default makeStore