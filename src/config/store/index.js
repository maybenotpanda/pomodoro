// ** Redux Imports
import logger from 'redux-logger'
import { thunk } from 'redux-thunk'
import { compose, createStore, applyMiddleware } from 'redux'

// ** Reducers Imports
import { rootReducer } from './reducers'

const middleWares = [process.env.REACT_APP_ENV !== 'producation' && logger, thunk].filter(Boolean)

const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares))

export const store = createStore(rootReducer, undefined, composedEnhancers)
