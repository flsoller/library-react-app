// App component. All data currently static

import React, { useState } from 'react';

import { Grid } from '@material-ui/core';

import TitleBar from './components/app-bars/TitleBar';
import MenuBar from './components/app-bars/MenuBar';
import ContentHolder from './components/content/ContentHolder';

// Component
function App() {
  // React useState hook.
  const [books, setBooks] = useState([
    // DUMMY DATA FOR TESTING
    // {
    //   title: 'BookTitleOne',
    //   author: 'AuthorOne',
    //   pages: 301,
    //   isFav: false,
    //   isLoaned: false,
    //   key: Math.random(),
    // },
    // {
    //   title: 'BookTitleTwo',
    //   author: 'AuthorTwo',
    //   pages: 302,
    //   isFav: false,
    //   isLoaned: false,
    //   key: Math.random(),
    // },
  ]);

  // JSX
  return (
    <Grid container direction="column">
      <Grid item>
        <TitleBar />
      </Grid>
      <Grid item container>
        <MenuBar />
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
