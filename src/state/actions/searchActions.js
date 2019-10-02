import { searchQuotes } from "src/api/quoteServices";
export const searchQuotesAction = (text, page, filter) => ({
  type: "SEARCH_QUOTES",
  payload: searchQuotes(text, page, filter)
});
