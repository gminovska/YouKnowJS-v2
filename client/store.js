import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import awesomeness from './reducers/reducer';
import nameStuff from './reducers/second-reducer';
import ioReducer from './reducers/io-reducer';


export default createStore(
  combineReducers({ awesomeness, nameStuff, ioReducer }),
  {},
  applyMiddleware(logger),
);
