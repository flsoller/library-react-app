// Maintains content. Currently placeholder data / hard coded

import React from 'react';

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
  const classes = useStyles();
  //JSX
  return (
    <Grid container spacing={2} className={classes.topMargin}>
      <Grid item xs={12} sm={6} md={4}>
        <CardItem />
      </Grid>
    </Grid>
  );
}

export default ContentHolder;
