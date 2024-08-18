// src/redux/store.js
/* import { createStore, combineReducers } from 'redux';
import { favoritesReducer } from './favoritesReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export const store = createStore(rootReducer);
 */

// src/redux/store.js
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import { favoritesReducer } from './favoritesReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
