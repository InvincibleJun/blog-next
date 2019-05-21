import { createStore, applyMiddleware, combineReducers } from 'redux';
import article from './models/article';

const rootReudcers = combineReducers({
  article
});

export default function(initialState, options) {
  return createStore(rootReudcers, initialState);
}
