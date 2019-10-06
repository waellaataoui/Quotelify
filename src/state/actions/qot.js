import { fetchQuoteOfDay } from "src/api/quoteServices";
export const fechQuoteOfDay = () => ({
  type: "FETCH_QUOTE_OF_DAY",
  payload: fetchQuoteOfDay()
});
