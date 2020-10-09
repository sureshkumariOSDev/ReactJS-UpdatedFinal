import * as ActionTypes from '../actiontypes/productActionTypes'

const productInitialState = {
    products: [],
    errorMessage: '',
    loading: true
}
export const getProductsReducer = (state = productInitialState, { type, payload }) => {
    let newState = state;
    switch (type) {
        case ActionTypes.GET_PRODUCTS_INITIATE:
            newState = {
                ...state,
                products: [],
                loading: true,
                errorMessage: ''
            }
            return newState;

        case ActionTypes.GET_PRODUCTS_SUCCESS:
            newState = {
                ...state,
                products: payload,
                loading: false,
                errorMessage: ''
            }
            return newState;

        case ActionTypes.GET_PRODUCTS_FAILURE:
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