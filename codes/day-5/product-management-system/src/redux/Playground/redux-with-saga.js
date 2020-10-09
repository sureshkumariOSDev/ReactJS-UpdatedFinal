const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')
const createSagaMiddleware = require('redux-saga');
const rootSaga = require('./rootSaga');


const GET_PRODUCTS_INITIATE = 'GET_PRODUCTS_INITIATE';
const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_SUCCESS';
const GET_PRODUCTS_FAILURE = 'GET_PRODUCTS_FAILURE';

const getProductsInitiate = () => {
    return {
        type: GET_PRODUCTS_INITIATE
    }
}

const getProductsSuccess = (products) => {
    return {
        type: GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

const getProductsFailure = (errorMessage) => {
    return {
        type: GET_PRODUCTS_FAILURE,
        payload: errorMessage
    }
}


const productInitialState = {
    products: [],
    errorMessage: '',
    loading: true
}
const productReducer = (state = productInitialState, { type, payload }) => {
    let newState = state;
    switch (type) {
        case GET_PRODUCTS_INITIATE:
            newState = {
                ...state,
                products: [],
                loading: true,
                errorMessage: ''
            }
            return newState;

        case GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: payload,
                loading: false,
                errorMessage: ''
            }
            return newState;

        case GET_PRODUCTS_FAILURE:
            newState = {
                ...state,
                products: [],
                loading: false,
                errorMessage: payload
            }
            return newState;

        default:
            return newState;
    }
}

const loggerMiddleware = createLogger();


const sagaMiddleware = createSagaMiddleware.default();
const store = createStore(productReducer, applyMiddleware(loggerMiddleware, sagaMiddleware))
sagaMiddleware.run(rootSaga);

store.dispatch(getProductsInitiate())

