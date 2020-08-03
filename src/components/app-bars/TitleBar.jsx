// Holds the apps title bar.

import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

// Material-UI styling hook.
const useStyles = makeStyles(() => ({
  titleBarStyle: {
    backgroundColor: '#34315E',
  },
}));

//Component
const TitleBar = () => {
  const classes = useStyles();

  //JSX
  return (
    <AppBar position="static" className={classes.titleBarStyle}>
      <Toolbar>
        <Typography variant="h4">Books</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
