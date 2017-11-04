import { all } from 'redux-saga/effects';
import watcher from './get-company-data';

/**
 * @returns {undefined}
 */
export default function* rootSaga() {
  yield all([
    watcher(),
  ]);
}
