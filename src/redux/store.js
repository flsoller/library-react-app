import { createStore } from 'redux';

// Get books from localStorage or empty array if false
const fromLocalStorage = localStorage.getItem('books')
  ? JSON.parse(localStorage.getItem('books'))
  : [];

// Define initial state
const initialState = {
  library: fromLocalStorage,
};

// Create reducer
const reducer = (state, action) => {
  return state;
};

// Create store
const store = createStore(reducer, initialState);
console.log(store.getState());

export default store;
