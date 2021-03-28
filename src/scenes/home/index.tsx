import React, { ReactElement } from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCatsAction } from '../../actions/cat';
import { CatFilters } from '../../components/filters';

export const Home = (): ReactElement => {
  const dispatch = useDispatch();

  const cats = useSelector((state: any): any => state.catsReducer);

  const catsData: Cats = [
    // TEMP
    {
      name: 'Tarou',
      color: 'white',
      gender: 'male',
      dateOfBirth: new Date(),
      breed: 'bisaya',
    },
    {
      name: 'Mingming',
      color: 'red',
      gender: 'female',
      dateOfBirth: new Date(),
      breed: 'bisaya',
    },
  ];
  if (cats.list.length === 0) dispatch(fetchCatsAction(catsData)); // TEMP

  return (
    <>
      <CatFilters />
      <TableContainer component={Paper}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='center'>Gender</TableCell>
              <TableCell align='center'>Color</TableCell>
              <TableCell align='center'>Breed</TableCell>
              <TableCell align='center'>Date of Birth</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {cats.list.map((cat: Cat) => (
              <TableRow key={cat.name}>
                <TableCell component='th' scope='row'>
                  {cat.name}
                </TableCell>
                <TableCell align='center'>{cat.gender}</TableCell>
                <TableCell align='center'>{cat.color}</TableCell>
                <TableCell align='center'>{cat.breed}</TableCell>
                <TableCell align='center'>
                  {cat.dateOfBirth.toDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
