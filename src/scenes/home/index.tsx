import React from 'react';
import { Grid } from '@material-ui/core';
import { CatCard } from '../../components/cat-card';
import { Cats } from '../../types/cat';
import { Cat } from '../../models/cat.model';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatsAction } from '../../actions/cat';

export const Home: any = () => {
  const dispatch = useDispatch();

  const cats = useSelector((state: any): any => state.catsReducer);

  const catsData: Cats = [
    // TEMP
    {
      name: 'Tarou',
      color: 'white',
      dateOfBirth: new Date(),
      breed: 'bisaya',
    },
    {
      name: 'Tarou',
      color: 'white',
      dateOfBirth: new Date(),
      breed: 'bisaya',
    },
  ];
  if (cats.list.length === 0) dispatch(fetchCatsAction(catsData)); // TEMP

  return (
    <Grid container spacing={3}>
      {cats.list.map((cat: Cat, index: number) => (
        <Grid key={`cat-${index}`} item>
          <CatCard {...cat} />
        </Grid>
      ))}
    </Grid>
  );
};
