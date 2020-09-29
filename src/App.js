// App component. All data currently static

import React, { useState, useEffect } from 'react';

import { Grid } from '@material-ui/core';

import TitleBar from './components/app-bars/TitleBar';
import MenuBar from './components/app-bars/MenuBar';
import ContentHolder from './components/content/ContentHolder';

function App() {
  // useState "bookStorage" for localstorage. Initialize on first render.
  const [bookStorage, setBookStorage] = useState(() => {
    const defaultValue = [];
    const fromLocalStorage = JSON.parse(localStorage.getItem('books'));

    return fromLocalStorage !== null ? fromLocalStorage : defaultValue;
  });

  // useEffect, keeps localStorage in synch when value of bookStorage changes.
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(bookStorage));
  }, [bookStorage]);

  // useState "books" for display.
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
          <ContentHolder
            books={books}
            setBooks={setBooks}
            bookStorage={bookStorage}
            setBookStorage={setBookStorage}
          />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
