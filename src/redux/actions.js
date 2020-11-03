import {
  LIBRARY_ADD_BOOK,
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

export const viewAllBooks = () => {
  return {
    type: VIEW_SELECT_ALL,
  };
};
export const viewLoanedBooks = () => {
  return {
    type: VIEW_SELECT_LOANED,
  };
};
export const viewReadBooks = () => {
  return {
    type: VIEW_SELECT_READ,
  };
};
export const viewFavBooks = () => {
  return {
    type: VIEW_SELECT_FAV,
  };
};
