import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore } from 'redux-persist';

import ajax from '../middleware/ajax';

import persistReducer from '../reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhancers(
  applyMiddleware(ajax),
);

export const store = createStore(persistReducer, enhancers);

export const persistor = persistStore(store);

