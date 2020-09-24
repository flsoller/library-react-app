// App component. All data currently static

import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import TitleBar from './components/app-bars/TitleBar';
import MenuBar from './components/app-bars/MenuBar';
import ContentHolder from './components/content/ContentHolder';

// Local storage
export let bookStorage;
if (localStorage.getItem('books') === null) {
  bookStorage = [];
} else {
  bookStorage = JSON.parse(localStorage.getItem('books'));
}
// export let bookStorage = [];

// Component
function App() {
  // React useState hook.
  const [books, setBooks] = useState(bookStorage);

  // Display filtered books: isFav
  const displayIsFav = () => {
    let filteredBooks = [...bookStorage].filter((book) => {
      return book.isFav ? book : null;
    });
    setBooks(filteredBooks);
  };

  // Display filtered books: isLoaned
  const displayIsLoaned = () => {
    let filteredBooks = [...bookStorage].filter((book) => {
      return book.isLoaned ? book : null;
    });
    setBooks(filteredBooks);
  };

  // Display filtered books: isReading
  const displayIsReading = () => {
    let filteredBooks = [...bookStorage].filter((book) => {
      return book.isReading ? book : null;
    });
    setBooks(filteredBooks);
  };

  // Display all books.
  const displayAllBooks = () => {
    setBooks(bookStorage);
  };

  // JSX
  return (
    <Grid container direction="column">
      <Grid item>
        <TitleBar />
      </Grid>
      <Grid item container>
        <MenuBar
          displayIsFav={displayIsFav}
          displayIsLoaned={displayIsLoaned}
          displayIsReading={displayIsReading}
          displayAllBooks={displayAllBooks}
        />
      </Grid>
      <Grid item container>
        <Grid item xs={false} sm={2} />
        <Grid item xs={12} sm={8}>
          <ContentHolder books={books} setBooks={setBooks} />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
