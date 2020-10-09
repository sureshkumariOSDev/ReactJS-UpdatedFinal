import { getProductsReducer } from '../reducers/getProductsReducer'
import { getProductByIdReducer } from '../reducers/getProductByIdReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    singleProductReducer: getProductByIdReducer,
    allProductsReducer: getProductsReducer
});

export default rootReducer;
