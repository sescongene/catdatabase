import React, { ReactElement, useEffect, useState } from 'react';
import {
  InputLabel,
  FormControl,
  MenuItem,
  Paper,
  Select,
  Checkbox,
  FormControlLabel,
} from '@material-ui/core';
import { useStyles } from '../../theme';
import { ASC, BACK_END, DESC, FRONT_END } from '../../constants/filters';
import { Input } from '../form/input';
import {
  SEARCH,
  SEARCH_BY_NAME,
  SORT_BY_COLOR,
  SORT_BY_NAME,
} from '../../constants/labels';
import { useDispatch, useSelector } from 'react-redux';
import { filterCatsAction } from '../../actions/cat';

export const CatFilters = (_props: any): ReactElement => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [method, setMethod] = useState<FilterMethod>(FRONT_END);
  const [order, setOrder] = useState<FilterOrder>(ASC);
  const [sortByName, setSortByName] = useState<boolean>(false);
  const [sortByColor, setSortByColor] = useState<boolean>(false);
  const cats = useSelector((state: any): any => state.catsReducer);

  useEffect(() => {
    if (sortByName || sortByColor) {
      const sortedCats = cats.list.sort((a: Cat, b: Cat) => {
        const nameResult = a.name.localeCompare(b.name);
        const colorResult = a.color.localeCompare(b.color);
        if (sortByName && sortByColor) return nameResult ?? colorResult;
        else if (sortByName) return colorResult;
        else if (sortByColor) return colorResult;
        else return false;
      });
      if (!cats.loading) dispatch(filterCatsAction(sortedCats));
    }
  }, [sortByName, sortByColor, cats, dispatch]);

  return (
    <Paper>
      <FormControl className={classes.formControl}>
        <InputLabel>Method</InputLabel>
        <Select
          value={method}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            setMethod(event.target.value as FilterMethod);
          }}
        >
          <MenuItem value={FRONT_END}>{FRONT_END}</MenuItem>
          <MenuItem value={BACK_END}>{BACK_END}</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <InputLabel>Order</InputLabel>
        <Select
          value={order}
          onChange={(event: React.ChangeEvent<{ value: unknown }>) => {
            setOrder(event.target.value as FilterOrder);
          }}
        >
          <MenuItem value={ASC}>{ASC}</MenuItem>
          <MenuItem value={DESC}>{DESC}</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormControlLabel
          control={
            <Checkbox
              checked={sortByName}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSortByName(event.target.checked);
              }}
            />
          }
          label={SORT_BY_NAME}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <FormControlLabel
          control={
            <Checkbox
              checked={sortByColor}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setSortByColor(event.target.checked);
              }}
            />
          }
          label={SORT_BY_COLOR}
        />
      </FormControl>
      <FormControl className={classes.formControl}>
        <Input
          name={SEARCH}
          label={SEARCH_BY_NAME}
          className={classes.filterInput}
        />
      </FormControl>
    </Paper>
  );
};
