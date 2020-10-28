// Package imports
import { createStore, combineReducers } from 'redux';

// File imports
import { libraryReducer, viewReducer } from './reducers';

// Create reducer
const reducer = combineReducers({
  library: libraryReducer,
  view: viewReducer,
});

// Create store
const store = createStore(reducer);
console.log(store.getState());

export default store;
