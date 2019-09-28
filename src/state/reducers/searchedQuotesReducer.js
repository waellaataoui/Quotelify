const initialState = {
  quotes: [],
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SEARCH_QUOTES_PENDING":
      return { ...state, loading: true };
    case "SEARCH_QUOTES_FULFILLED":
      return { quotes: payload, loading: false };
    case "SEARCH_QUOTES_REJECTED":
      return { ...state, loading: false };
    default:
      return state;
  }
};
