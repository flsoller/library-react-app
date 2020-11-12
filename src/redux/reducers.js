import { fromLocalStorage } from './helpers/localStorage';
import {
  LIBRARY_ADD_BOOK,
  LIBRARY_REMOVE_BOOK,
  VIEW_SELECT_ALL,
  VIEW_SELECT_LOANED,
  VIEW_SELECT_READ,
  VIEW_SELECT_FAV,
  VIEW_ADD_TO_CURRENT,
  VIEW_REMOVE_FROM_CURRENT,
} from './constants';

// Define initial state
const initialState = {
  library: fromLocalStorage(),
  view: fromLocalStorage(),
};

// Reducer for library state changes
export const libraryReducer = (state = initialState.library, action) => {
  switch (action.type) {
    case LIBRARY_ADD_BOOK:
      const book = action.payload;
      return [...state, book];

    case LIBRARY_REMOVE_BOOK:
      const bookTitle = action.payload;
      return [...state].filter((book) => {
        return book.title !== bookTitle ? book : null;
      });
    default:
      return state;
  }
};

// Reducer for search view state changes
export const viewReducer = (state = initialState.view, action) => {
  // Make entire library available for filtering
  const library = action.payload;

  switch (action.type) {
    case VIEW_SELECT_ALL:
      return library;

    case VIEW_SELECT_FAV:
      return library.filter((book) => {
        return book.isFav ? book : null;
      });

    case VIEW_SELECT_LOANED:
      return library.filter((book) => {
        return book.isLoaned ? book : null;
      });

    case VIEW_SELECT_READ:
      return library.filter((book) => {
        return book.isReading ? book : null;
      });

    case VIEW_ADD_TO_CURRENT:
      const book = action.payload;
      return [...state, book];

    case VIEW_REMOVE_FROM_CURRENT:
      const bookTitle = action.payload;
      return [...state].filter((book) => {
        return book.title !== bookTitle ? book : null;
      });

    default:
      return state;
  }
};
