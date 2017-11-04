import axios from 'axios';
import { call, put } from 'redux-saga/effects';

import { makeRequestSaga } from '../client/saga/get-company-data';
import { makeRequest, success, failure } from '../client/actions/get-company-data';

describe('TEST SAGA HOHOHO', () => {
  const action = makeRequest('AAPL');
  const url = 'https://api.iextrading.com/1.0/stock/AAPL/company';
  const gen = makeRequestSaga(action);

  const fakeResponse = {
    data: 'blablabla',
  };

  it('Calls axios', () => {
    expect(gen.next().value).toEqual(call(axios.get, url));
  });

  it('Dispatches a success action', () => {
    expect(gen.next(fakeResponse).value).toEqual(put(success('blablabla')));
  });
});

describe('TEST SAGA FAILURE', () => {
  const action = makeRequest('AAPL');
  const url = 'https://api.iextrading.com/1.0/stock/AAPL/company';
  const gen = makeRequestSaga(action);

  it('Calls axios', () => {
    expect(gen.next().value).toEqual(call(axios.get, url));
  });

  it('Dispatches a failure action', () => {
    expect(gen.throw().value).toEqual(put(failure()));
  });
});
