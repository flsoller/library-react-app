// Get books from localStorage or empty array if false
const fromLocalStorage = localStorage.getItem('books')
  ? JSON.parse(localStorage.getItem('books'))
  : [];

// Define initial state
const initialState = {
  library: fromLocalStorage,
};

export const libraryReducer = (state = initialState, action) => {
  return state;
};

export const viewReducer = (state = initialState, action) => {
  return state;
};
