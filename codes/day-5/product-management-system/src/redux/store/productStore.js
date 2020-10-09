import { createStore, applyMiddleware } from 'redux'
import rootReducer from './index'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga/rootSaga'

const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();
const productStore = createStore(rootReducer, applyMiddleware(loggerMiddleware, thunkMiddleware, sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default productStore;