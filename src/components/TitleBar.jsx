import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  titleBarStyle: {
    backgroundColor: '#34315E',
  },
}));

const TitleBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.titleBarStyle}>
      <Toolbar>
        <Typography variant="h4">Books</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TitleBar;
