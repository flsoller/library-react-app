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
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
console.log(store.getState());

export default store;
