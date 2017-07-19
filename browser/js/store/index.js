import { createStore, applyMiddleware, combineReducers} from 'redux'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import transcriptions from './transcriptions'

const reducer = combineReducers({
  transcriptions,
})

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunkMiddleware, createLogger())))

export * from './transcriptions'
