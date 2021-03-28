export const fetchCatsAction: any = (data: any) => {
  return {
    type: 'FETCH_CATS',
    data: data,
  };
};

export const filterCatsAction: any = (data: any) => {
  return {
    type: 'FILTER_CATS',
    data: data,
  };
};

export const defaultCatAction: any = () => {
  return {
    type: '',
    data: [],
  };
};
