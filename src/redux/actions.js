import store from './store';

import {
  LIBRARY_ADD_BOOK,
  LIBRARY_REMOVE_BOOK,
  LIBRARY_UPDATE_BOOK,
  VIEW_SELECT_ALL,
  VIEW_SELECT_LOANED,
  VIEW_SELECT_READ,
  VIEW_SELECT_FAV,
  VIEW_ADD_TO_CURRENT,
  VIEW_REMOVE_FROM_CURRENT,
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

export const addToView = (book) => {
  return {
    type: VIEW_ADD_TO_CURRENT,
    payload: book,
  };
};

export const removeFromView = (bookTitle) => {
  return {
    type: VIEW_REMOVE_FROM_CURRENT,
    payload: bookTitle,
  };
};

export const updateBook = (bookTitle, editItems) => {
  return {
    type: LIBRARY_UPDATE_BOOK,
    payload: {
      key: bookTitle,
      editItems: editItems,
    },
  };
};
