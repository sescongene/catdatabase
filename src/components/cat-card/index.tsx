import React from 'react';
import {
  Card as MaterialCard,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from '@material-ui/core';

import { DEFAULT_IMAGE_URL } from '../../constants/images';
import { NO_DESCRIPTION } from '../../constants/string';
import { Cat } from '../../models/cat.model';
import { useStyles } from '../../theme';

export const CatCard: any = (props: Cat) => {
  const classes = useStyles();

  return (
    <MaterialCard className={classes.catCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={DEFAULT_IMAGE_URL}
          title={props.name}
        />
        <CardContent>
          <Typography variant='h5' component='h2'>
            {props.name}
          </Typography>
          <Typography className={classes.details} component='p'>
            {props.color} - {props.breed}
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            {props.description ?? NO_DESCRIPTION}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size='small' color='primary'>
          Edit
        </Button>
        <Button size='small' color='primary'>
          Delete
        </Button>
      </CardActions>
    </MaterialCard>
  );
};
