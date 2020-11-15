// Card component for each book card.

// Component imports
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  removeFromLibrary,
  removeFromView,
  updateBook,
} from '../../redux/actions';
import CardEdit from './CardEdit';

// Material UI imports
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// Material-UI styling hook.
const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

// Component
function CardItem({
  bookTitle,
  bookAuthor,
  bookPages,
  isFav,
  isLoaned,
  isReading,
}) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const deleteHandler = (bookTitle) => {
    dispatch(removeFromLibrary(bookTitle));
    dispatch(removeFromView(bookTitle));
  };

  // useState for managing edit state.
  const [isEditing, setIsEditing] = useState(false);

  // useState for keeping track of edits
  const [editItems, setEditItems] = useState({
    isFav: isFav,
    isLoaned: isLoaned,
    isReading: isReading,
  });

  // Handler for edits.
  const editHandler = () => {
    setIsEditing(false);
    dispatch(updateBook(bookTitle, editItems));
  };

  //JSX
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {bookAuthor}
        </Typography>
        <Typography variant="h5" component="h2">
          {bookTitle}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Pages: {bookPages}
        </Typography>
        {isEditing ? (
          <CardEdit editItems={editItems} setEditItems={setEditItems} />
        ) : (
          <Typography variant="body2" component="p">
            Favourite: {isFav ? 'Yes' : 'No'}
            <br />
            Loaned Out: {isLoaned ? 'Yes' : 'No'}
            <br />
            Currently Reading: {isReading ? 'Yes' : 'No'}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          color="secondary"
          variant="outlined"
          size="small"
          onClick={() => deleteHandler(bookTitle)}
        >
          Delete
        </Button>
        {isEditing ? (
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => editHandler()}
          >
            Save
          </Button>
        ) : (
          <Button
            variant="outlined"
            color="primary"
            size="small"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

export default CardItem;
