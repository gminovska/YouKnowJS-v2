import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';

import awesomeness from './reducers/reducer';
import messages from './reducers/second-reducer';
import socket from './reducers/io-reducer';


export default createStore(
  combineReducers({ awesomeness, messages, socket }),
  {},
  applyMiddleware(logger),
);
