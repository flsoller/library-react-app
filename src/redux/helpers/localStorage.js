// Get books from localStorage or return empty array if false
export const fromLocalStorage = () => {
  try {
    return localStorage.getItem('books')
      ? JSON.parse(localStorage.getItem('books'))
      : [];
  } catch (err) {
    console.error(err);
  }
};

// Save to localStorage
export const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('books', serializedState);
  } catch (err) {
    console.error(err);
  }
};
