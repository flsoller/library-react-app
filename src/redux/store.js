// Package imports
import { createStore, combineReducers } from 'redux';

// File imports
import { libraryReducer, viewReducer } from './reducers';
import { saveToLocalStorage } from './helpers/localStorage';

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

// Handler for keeping localStorage in sync with library state
store.subscribe(() => {
  saveToLocalStorage(store.getState().library);
});

export default store;
