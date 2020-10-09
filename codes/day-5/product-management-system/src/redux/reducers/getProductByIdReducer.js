import * as ActionTypes from '../actiontypes/productActionTypes'

const productInitialState = {
    product: null,
    errorMessage: '',
    loading: true
}
export const getProductByIdReducer = (state = productInitialState, { type, payload }) => {
    let newState = state;
    switch (type) {
        case ActionTypes.GET_PRODUCTBYID_INITIATE:
            newState = {
                ...state,
                product: null,
                loading: true,
                errorMessage: ''
            }
            return newState;

        case ActionTypes.GET_PRODUCTBYID_SUCCESS:
            newState = {
                ...state,
                product: payload,
                loading: false,
                errorMessage: ''
            }
            return newState;

        case ActionTypes.GET_PRODUCTBYID_FAILURE:
            newState = {
                ...state,
                product: null,
                loading: false,
                errorMessage: payload
            }
            return newState;

        default:
            return newState;
    }
}