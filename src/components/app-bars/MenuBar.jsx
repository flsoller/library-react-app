// Holds menu bar items.

// Package imports
import React from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

// Component imports
import {
  viewAllBooks,
  viewFavBooks,
  viewLoanedBooks,
  viewReadBooks,
} from '../../redux/actions';

// Material-UI styling hook.
const useStyles = makeStyles(() => ({
  menuBarStyle: {
    backgroundColor: '#6159E5',
  },
  buttonTextStyle: {
    color: 'white',
  },
}));

// Component
const MenuBar = ({
  displayIsFav,
  displayIsReading,
  displayIsLoaned,
  displayAllBooks,
}) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  //JSX
  return (
    <AppBar position="static" className={classes.menuBarStyle}>
      <Toolbar>
        <Button
          className={classes.buttonTextStyle}
          onClick={() => dispatch(viewAllBooks())}
        >
          All
        </Button>
        <Button
          className={classes.buttonTextStyle}
          onClick={() => dispatch(viewReadBooks())}
        >
          Reading
        </Button>
        <Button
          className={classes.buttonTextStyle}
          onClick={() => dispatch(viewFavBooks())}
        >
          Favourites
        </Button>
        <Button
          className={classes.buttonTextStyle}
          onClick={() => dispatch(viewLoanedBooks())}
        >
          Loaned Out
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default MenuBar;
