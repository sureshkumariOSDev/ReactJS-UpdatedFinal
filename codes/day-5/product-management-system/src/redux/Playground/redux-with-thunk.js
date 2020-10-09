//const { getProducts } = require('../service/productService');
const Axios = require('axios')
const { createStore, applyMiddleware } = require('redux')
const { createLogger } = require('redux-logger')
const thunkMiddleware = require('redux-thunk')


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

const getProductsAsync = (callback) => {
    return (dispatcher) => {
        callback('request initiatiating...')
        dispatcher(getProductsInitiate())

        Axios.get('http://127.0.0.1:8081/productservice')
            .then(response => {
                callback('retrieved data...')
                dispatcher(getProductsSuccess(response.data))
            })
            .catch(err => {
                callback('oops!!! got error...')
                dispatcher(getProductsFailure(err.message))
            })
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
const store = createStore(productReducer, applyMiddleware(loggerMiddleware, thunkMiddleware.default))

//const callbackForthunk = getProductsAsync();
store.dispatch(getProductsAsync((message) => console.log(message)));