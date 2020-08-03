// Maintains content. Currently placeholder data / hard coded

import React, { useState } from 'react';

import CardItem from './CardItem';
import { Grid, makeStyles, Button } from '@material-ui/core';

// Material-UI styling hook.
const useStyles = makeStyles({
  topMargin: {
    marginTop: 12,
  },
});

//Component
function ContentHolder() {
  // Material UI styles
  const classes = useStyles();

  // React useState hook.
  const [books, setBooks] = useState([
    { title: 'BookTitle', pages: 300, key: Math.random() },
    { title: 'BookTitle', pages: 300, key: Math.random() },
    { title: 'BookTitle', pages: 300, key: Math.random() },
    { title: 'BookTitle', pages: 300, key: Math.random() },
  ]);

  // Preparation for updating state. TODO: Make dynamic.
  const addBook = () => {
    setBooks([
      ...books,
      {
        title: 'NewBook',
        pages: 400,
        key: Math.random(),
      },
    ]);
  };

  // Display all books from state.
  const renderBooks = books.map((book) => (
    <Grid item xs={12} sm={6} md={4} key={book.key}>
      <CardItem />
    </Grid>
  ));

  //JSX
  return (
    <Grid container spacing={2} className={classes.topMargin}>
      {renderBooks}
      <Button onClick={addBook}>Add Book</Button>
    </Grid>
  );
}

export default ContentHolder;
