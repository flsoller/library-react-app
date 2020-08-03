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
function CardItem() {
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
          Book Author
        </Typography>
        <Typography variant="h5" component="h2">
          Book Title
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Page: 0
        </Typography>
        <Typography variant="body2" component="p">
          Favourite: Yes
          <br />
          Loaned Out: No
        </Typography>
      </CardContent>
      <CardActions>
        <Button disabled size="small">
          Details
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;
