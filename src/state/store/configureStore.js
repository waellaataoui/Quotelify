import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import promise from "redux-promise-middleware";
import thunk from "redux-thunk";
import authReducer from "../reducers/auth";
import favouriteQuotesReducer from "../reducers/favouriteQuotesReducer";
import quoteOfDayReducer from "../reducers/quoteOfDayReducer";
import searchedQuotesReducer from "../reducers/searchedQuotesReducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      qotd: quoteOfDayReducer,
      favouriteQuotes: favouriteQuotesReducer,
      searchedQuotes: searchedQuotesReducer
    }),
    composeEnhancers(applyMiddleware(thunk, promise))
  );

  return store;
};
