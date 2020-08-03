// App component. All data currently static

import React from 'react';

import { Grid } from '@material-ui/core';

import TitleBar from './components/app-bars/TitleBar';
import MenuBar from './components/app-bars/MenuBar';
import ContentHolder from './components/content/ContentHolder';

// Component
function App() {
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
          <ContentHolder />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App;
