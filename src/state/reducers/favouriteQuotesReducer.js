const initialState = {
  favouriteQuotes: [],
  loading: false
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAVOURITE_PENDING":
      return { ...state, loading: true };
    case "ADD_FAVOURITE_FULFILLED":
      return {
        favouriteQuotes: [...state.favouriteQuotes, payload],
        loading: false
      };
    case "ADD_FAVOURITE_REJECTED":
      return { ...state, loading: false };
    case "FETCH_FAVOURITES_PENDING":
      return { ...state, loading: true };
    case "FETCH_FAVOURITES_FULFILLED":
      return { favouriteQuotes: [...payload], loading: false };
    case "FETCH_FAVOURITES_REJECTED":
      return { ...state, loading: false };
    case "DELETE_FAVOURITE_PENDING":
      return { ...state, loading: true };
    case "DELETE_FAVOURITE_FULFILLED":
      return {
        favouriteQuotes: state.favouriteQuotes.filter(
          (quote) => quote.id !== payload
        ),
        loading: false
      };
    case "DELETE_FAVOURITE_REJECTED":
      return { ...state, loading: false };

    default:
      return state;
  }
};
