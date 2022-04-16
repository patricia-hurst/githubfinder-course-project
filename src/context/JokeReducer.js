const jokeReducer = (state, action) => {
  switch (action.type) {
    case 'GET_JOKES':
      return {
        ...state,
        jokes: action.payload,
        loading: false,
      };
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};

export default jokeReducer;
