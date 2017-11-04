import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

import reducer from './reducers/reducer';
import rootSaga from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const initialState = {
  data: null,
  error: null,
};


const store = createStore(
  reducer,
  initialState,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

export default store;
