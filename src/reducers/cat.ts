import { defaultCatAction } from '../actions/cat';
import { Cat } from '../models/cat.model';

const initialCats = {
  list: [],
  loading: true,
};

export const catsReducer: any = (
  state: any = initialCats,
  action = defaultCatAction,
) => {
  switch (action.type) {
    case 'FETCH_CATS':
      return { ...state, list: action.data, loading: false };
    case 'FILTER_CATS':
      return { ...state, list: action.data, loading: false };
    default:
      return state;
  }
};

const cat: Cat = {
  name: '',
  color: '',
  breed: '',
  dateOfBirth: new Date(),
};

export const selectCatReducer: any = (action: any, state = cat) => {
  switch (action.type) {
    case 'SELECT_BREED':
      return { ...state, name: action.name };
    case 'CLEAR_SELECTED_BREED':
      return { ...state, name: '' };
    default:
      return state;
  }
};
