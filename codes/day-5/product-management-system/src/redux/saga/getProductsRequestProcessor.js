import { call, put } from 'redux-saga/effects'
import { fetchProductsAsync } from './fetchProductsAsync';
import * as Actions from '../actions/productActions'

export function* getProductsRequestProcessor() {
    try {
        const products = yield call(fetchProductsAsync);
        yield put(Actions.getProductsSuccess(products));
    }
    catch (e) {
        yield put(Actions.getProductsFailure(e));
    }
}