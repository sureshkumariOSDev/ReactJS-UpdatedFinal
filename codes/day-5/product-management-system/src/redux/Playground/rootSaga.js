const { takeEvery, call, put } = require('redux-saga/effects');

const fetchProductsAsync = async () => {
    const response = await fetch('http://127.0.0.1:8081/productservice');
    const data = await response.json();
    if (response.status >= 400) {
        throw new Error(data.Errors);
    }
    return data;        
}

function* processGetProductsReuqest() {
    try {
        const products = yield call(fetchProductsAsync);
        yield put({ type: 'GET_PRODUCTS_SUCCESS', payload: products });
    }
    catch (e) {
        yield put({ type: 'GET_PRODUCTS_FAILURE', payload: e });
    }
}

function* rootSaga() {
    yield takeEvery('GET_PRODUCTS_INITIATE', processGetProductsReuqest)
}

module.exports = rootSaga;