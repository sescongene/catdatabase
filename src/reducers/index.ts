import { combineReducers } from 'redux';
import { catsReducer } from './cat';

export const rootReducer = combineReducers({
  catsReducer,
});
