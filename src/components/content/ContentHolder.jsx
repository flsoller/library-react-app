// Maintains content. Currently placeholder data / hard coded

import React, { useState } from 'react';

import CardItem from './CardItem';
import { Grid, makeStyles } from '@material-ui/core';

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
    { title: 'BookTitle', pages: 300 },
    { title: 'BookTitle', pages: 300 },
    { title: 'BookTitle', pages: 300 },
    { title: 'BookTitle', pages: 300 },
  ]);

  //JSX
  return (
    <Grid container spacing={2} className={classes.topMargin}>
      {books.map((book) => (
        <Grid item xs={12} sm={6} md={4}>
          <CardItem />
        </Grid>
      ))}
    </Grid>
  );
}

export default ContentHolder;
