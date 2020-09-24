// Maintains content views
import React from 'react';
import { bookStorage } from '../../App';

import CardItem from './CardItem';
import { Grid, makeStyles } from '@material-ui/core';
import AddBookModal from './AddBookModal';
import EmptyDefault from './EmptyDefault';

// Material-UI styling hook.
const useStyles = makeStyles({
  topMargin: {
    marginTop: 12,
  },
  buttonText: {
    color: '#6159E5',
  },
});

//Component
const ContentHolder = ({ books, setBooks }) => {
  // Material UI styles
  const classes = useStyles();

  // Display all books from state.
  const renderBooks = books.map((book) => (
    <Grid item xs={12} sm={6} md={4} key={book.key}>
      <CardItem
        bookTitle={book.title}
        bookAuthor={book.author}
        bookPages={book.pages}
        isFav={book.isFav}
        isLoaned={book.isLoaned}
        isReading={book.isReading}
      />
    </Grid>
  ));

  // Display default screen when no books in library.
  const noBooks = () => {
    return books.length === 0 ? <EmptyDefault /> : null;
  };

  // Handle input from dialog
  const handleInputDialog = (input) => {
    setBooks([...books, input]);
    bookStorage.push(input);
    localStorage.setItem('books', JSON.stringify(bookStorage));
  };

  //JSX
  return (
    <Grid container spacing={2} className={classes.topMargin}>
      <Grid container justify="center">
        <AddBookModal handleInputDialog={handleInputDialog} />
      </Grid>
      {noBooks()}
      {renderBooks}
    </Grid>
  );
};

export default ContentHolder;
