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
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          Placeholder
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default CardItem;
