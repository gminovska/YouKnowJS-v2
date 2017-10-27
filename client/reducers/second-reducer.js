const initialState = {
  msg: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_MSG':
      return {
        msg: action.payload,
      };

    default:
      return { ...state };
  }
};
