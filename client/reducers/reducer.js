const initialState = {
  awesome: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'MY_AWESOME_ACTION':
      return {
        awesome: true,
      };

    default:
      return { ...state };
  }
};
