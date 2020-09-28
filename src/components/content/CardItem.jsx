// Card component for each book card.

import React from 'react';
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
  deleteBook,
}) {
  const classes = useStyles();

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
        <Typography variant="body2" component="p">
          Favourite: {isFav ? 'Yes' : 'No'}
          <br />
          Loaned Out: {isLoaned ? 'Yes' : 'No'}
          <br />
          Currently Reading: {isReading ? 'Yes' : 'No'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color="secondary"
          variant="outlined"
          size="small"
          onClick={() => deleteBook(bookTitle)}
        >
          Delete
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;
