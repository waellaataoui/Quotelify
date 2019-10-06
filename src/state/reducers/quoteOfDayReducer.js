const initialState = {
  qod: undefined,
  loading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUOTE_OF_DAY_PENDING":
      return { ...state, loading: true };
    case "FETCH_QUOTE_OF_DAY_FULFILLED":
      return { loading: false, qod: action.payload };
    case "FETCH_QUOTE_OF_DAY_REJECTED":
      return { ...state, loading: false };
    default:
      return state;
  }
};
