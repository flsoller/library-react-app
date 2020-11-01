import { LIBRARY_ADD_BOOK } from './constants';

// Get books from localStorage or empty array if false
const fromLocalStorage = localStorage.getItem('books')
  ? JSON.parse(localStorage.getItem('books'))
  : [];

// Define initial state
const initialState = {
  library: fromLocalStorage,
  view: fromLocalStorage,
};

// Reducer for library state changes
export const libraryReducer = (state = initialState.library, action) => {
  switch (action.type) {
    case LIBRARY_ADD_BOOK:
      const book = action.payload;
      return [...state, book];

    default:
      return state;
  }
};

// Reducer for search view state changes
export const viewReducer = (state = initialState.view, action) => {
  return state;
};
