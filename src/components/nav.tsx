import { Grid } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import React from 'react';
import { useStyles } from '../theme';

export const Nav: any = () => {
  const classes = useStyles();
  return (
    <Grid className={classes.nav} container spacing={1}>
      <Grid item>
        <Button variant='contained' color='secondary'>
          All Cat Breeds
        </Button>
      </Grid>
      <Grid item>
        <Button variant='contained' color='primary'>
          Add Cat Breed
        </Button>
      </Grid>
    </Grid>
  );
};
