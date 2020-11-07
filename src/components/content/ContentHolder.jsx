// Maintains content views
import React from 'react';
import { useSelector } from 'react-redux';

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
const ContentHolder = () => {
  // Material UI styles
  const classes = useStyles();

  // Load books from redux store
  const bookView = useSelector((state) => state.view);

  // Display all books from view state.
  const renderBooks = bookView.map((book) => (
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
    return bookView.length === 0 ? <EmptyDefault /> : null;
  };

  //JSX
  return (
    <Grid container spacing={2} className={classes.topMargin}>
      <Grid container justify="center">
        <AddBookModal />
      </Grid>
      {noBooks()}
      {renderBooks}
    </Grid>
  );
};

export default ContentHolder;
