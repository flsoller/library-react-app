import { LIBRARY_ADD_BOOK } from './constants';

export const addToLibrary = (book) => {
  return {
    type: LIBRARY_ADD_BOOK,
    payload: book,
  };
};
