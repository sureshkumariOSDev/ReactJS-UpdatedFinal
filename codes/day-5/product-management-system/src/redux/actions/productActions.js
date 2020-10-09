import * as ActionTypes from '../actiontypes/productActionTypes'
import * as productService from '../../service/productService'

export const getProductsInitiate = () => {
    return {
        type: ActionTypes.GET_PRODUCTS_INITIATE
    }
}

export const getProductsSuccess = (products) => {
    return {
        type: ActionTypes.GET_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const getProductsFailure = (errorMessage) => {
    return {
        type: ActionTypes.GET_PRODUCTS_FAILURE,
        payload: errorMessage
    }
}

export const getProductByIdInitiate = () => {
    return {
        type: ActionTypes.GET_PRODUCTBYID_INITIATE
    }
}

export const getProductByIdSuccess = (product) => {
    return {
        type: ActionTypes.GET_PRODUCTBYID_SUCCESS,
        payload: product
    }
}

export const getProductByIdFailure = (errorMessage) => {
    return {
        type: ActionTypes.GET_PRODUCTBYID_FAILURE,
        payload: errorMessage
    }
}


export const getProductsAsync = () => {
    return (dispatcher) => {
        dispatcher(getProductsInitiate())

        productService.getProducts()
            .then(response => {
                dispatcher(getProductsSuccess(response.data))
            })
            .catch(err => {
                dispatcher(getProductsFailure(err.message))
            })
    }
}

export const getProductByIdAsync = (productId) => {
    return (dispatcher) => {
        dispatcher(getProductByIdInitiate())

        productService.getProductById(productId)
            .then(response => {
                dispatcher(getProductByIdSuccess(response.data))
            })
            .catch(err => {
                dispatcher(getProductByIdFailure(err.message))
            })
    }
}