import { takeLatest, call, put } from 'redux-saga/effects';
import request from 'utils/request';
import { fetchDataSuccess } from './actions';
import { FETCH_DATA } from './constants';

export function* getProductData() {
  const requestURL = 'https://fakestoreapi.com/products?limit=15';

  try {
    const response = yield call(request, requestURL, {
      method: 'GET',
    });
    yield put(fetchDataSuccess(response));
  } catch (err) {
    // error
  }
}
// Individual exports for testing
export default function* marketListContainerSaga() {
  yield takeLatest(FETCH_DATA, getProductData);
}
