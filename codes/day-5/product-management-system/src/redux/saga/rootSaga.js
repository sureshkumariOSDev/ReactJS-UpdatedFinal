import { takeEvery } from "redux-saga/effects";
import { getProductsRequestProcessor } from "./getProductsRequestProcessor";
import * as ActionTypes from '../actiontypes/productActionTypes'

export default function* rootSaga() {
    yield takeEvery(ActionTypes.GET_PRODUCTS_INITIATE, getProductsRequestProcessor)
}