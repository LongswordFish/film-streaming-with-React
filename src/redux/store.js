import { createStore, applyMiddleware, compose } from 'redux';
import {logger} from 'redux-logger';
import thunk from "redux-thunk" ;

import rootSaga from './root-saga';
import rootReducer from './root-reducer';

import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const middlewares=[sagaMiddleware];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);
 
  middlewares.push(logger);

}

export const store = createStore(rootReducer,applyMiddleware(...middlewares));
sagaMiddleware.run(rootSaga);



