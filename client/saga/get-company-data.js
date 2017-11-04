import axios from 'axios';
import { put, takeEvery, call } from 'redux-saga/effects';

import { success, failure } from '../actions/get-company-data';

/**
 * @param {object} action bajdfeofjw
 * @returns {object} iterator
 */
export function* makeRequestSaga(action) {
  const url = `https://api.iextrading.com/1.0/stock/${action.payload}/company`;
  try {
    const data = yield call(axios.get, url);
    yield put(success(data.data));
  } catch (e) {
    yield put(failure());
  }
}

/**
 * @returns {undefined}
 */
export default function* watcher() {
  yield takeEvery('GET_COMPANY_DATA_REQUEST', makeRequestSaga);
}
