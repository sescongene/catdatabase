export const fetchCatsAction: any = (data: any) => {
  return {
    type: 'FETCH_CATS',
    data: data,
  };
};

export const appendCatsAction: any = (data: any) => {
  return {
    type: 'APPEND_CATS',
    data: data,
  };
};

export const clearCatsAction: any = () => {
  return {
    type: 'CLEAR_CATS',
    data: [],
  };
};

export const defaultCatAction: any = () => {
  return {
    type: '',
    data: [],
  };
};
