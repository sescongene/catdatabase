import { defaultCatAction } from '../actions/cat';

const initialCats: CatState = {
  list: [],
  loading: true,
};

export const catsReducer: any = (
  state: CatState = initialCats,
  action = defaultCatAction,
) => {
  switch (action.type) {
    case 'FILTER_CATS':
    case 'FETCH_CATS':
      return { ...state, list: action.data, loading: false };
    default:
      return state;
  }
};
