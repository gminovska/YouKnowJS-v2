export const makeRequest = symbol => ({
  type: 'GET_COMPANY_DATA_REQUEST',
  payload: symbol,
});

export const success = data => ({
  type: 'GET_COMPANY_DATA_SUCCESS',
  payload: data,
});

export const failure = () => ({
  type: 'GET_COMPANY_DATA_FAILURE',
});
