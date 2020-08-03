import React from 'react';

import CardItem from './CardItem';
import { Grid } from '@material-ui/core';

function ContentHolder() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6} md={4}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardItem />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardItem />
      </Grid>
    </Grid>
  );
}

export default ContentHolder;