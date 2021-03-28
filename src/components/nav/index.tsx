import React from 'react';
import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useStyles } from '../../theme';
import { Link } from 'react-router-dom';

export const Nav: any = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.nav} container spacing={1}>
      <Grid item>
        <Link to='/'>
          <Button variant='contained' color='secondary'>
            View Cats
          </Button>
        </Link>
      </Grid>
      <Grid item>
        <Link to='/add'>
          <Button variant='contained' color='secondary'>
            Add Cat
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
};
