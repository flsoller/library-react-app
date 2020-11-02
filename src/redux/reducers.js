import {
  LIBRARY_ADD_BOOK,
  VIEW_SELECT_ALL,
  VIEW_SELECT_LOANED,
  VIEW_SELECT_READ,
  VIEW_SELECT_FAV,
} from './constants';

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
  switch (action.type) {
    case VIEW_SELECT_ALL:
      return [...state, fromLocalStorage];

    case VIEW_SELECT_FAV:
      return [...state].filter((book) => {
        return book.isFav ? book : null;
      });

    case VIEW_SELECT_LOANED:
      return [...state].filter((book) => {
        return book.isLoaned ? book : null;
      });

    case VIEW_SELECT_READ:
      return [...state].filter((book) => {
        return book.isReading ? book : null;
      });

    default:
      return state;
  }
};
