// Maintains content views
import React from 'react';

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
const ContentHolder = ({ books, setBooks, bookStorage, setBookStorage }) => {
  // Material UI styles
  const classes = useStyles();

  // Handle book deletion.
  const handleDelete = (bookTitle) => {
    const newArray = [...bookStorage].filter((book) => {
      return book.title !== bookTitle ? book : null;
    });
    setBooks(newArray);
    setBookStorage(newArray);
  };

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
        deleteBook={handleDelete}
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
    setBookStorage([...bookStorage, input]);
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
