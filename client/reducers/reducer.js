export default (state, action) => {
  switch (action.type) {
    case 'GET_COMPANY_DATA_SUCCESS':
      return {
        ...state,
        data: action.payload,
      };

    case 'GET_COMPANY_DATA_FAILURE':
      return {
        ...state,
        error: true,
      };

    default:
      return { ...state };
  }
};
