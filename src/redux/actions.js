import store from './store';

import {
  LIBRARY_ADD_BOOK,
  LIBRARY_REMOVE_BOOK,
  VIEW_SELECT_ALL,
  VIEW_SELECT_LOANED,
  VIEW_SELECT_READ,
  VIEW_SELECT_FAV,
} from './constants';

export const addToLibrary = (book) => {
  return {
    type: LIBRARY_ADD_BOOK,
    payload: book,
  };
};

export const removeFromLibrary = (bookTitle) => {
  return {
    type: LIBRARY_REMOVE_BOOK,
    payload: bookTitle,
  };
};

export const viewAllBooks = () => {
  return {
    type: VIEW_SELECT_ALL,
    payload: store.getState().library,
  };
};
export const viewLoanedBooks = () => {
  return {
    type: VIEW_SELECT_LOANED,
    payload: store.getState().library,
  };
};
export const viewReadBooks = () => {
  return {
    type: VIEW_SELECT_READ,
    payload: store.getState().library,
  };
};
export const viewFavBooks = () => {
  return {
    type: VIEW_SELECT_FAV,
    payload: store.getState().library,
  };
};
