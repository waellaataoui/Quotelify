import { searchQuotes } from "src/api/quoteServices";
export const searchQuotesAction = (text, page) => ({
  type: "SEARCH_QUOTES",
  payload: searchQuotes(text, page)
});
