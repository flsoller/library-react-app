import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  menuBarStyle: {
    backgroundColor: '#6159E5',
  },
  buttonTextStyle: {
    color: 'white',
  },
}));

const MenuBar = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.menuBarStyle}>
      <Toolbar>
        <Button className={classes.buttonTextStyle}>All</Button>
        <Button className={classes.buttonTextStyle}>Reading</Button>
        <Button className={classes.buttonTextStyle}>Favourites</Button>
        <Button className={classes.buttonTextStyle}>Loaned Out</Button>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;