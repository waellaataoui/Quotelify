import axios from "axios";
const API_BASE_URL = "https://favqs.com/api";
// const API_KEY = "0bc427eb96f22853d1e6dd6815d22153";
const API_KEY = process.env.FAVQS_API_KEY;

const requestConfig = {
  headers: {
    Authorization: `Token token="${API_KEY}"`
  }
};
const mapQuote = (quote) => ({
  body: quote.body,
  author: quote.author
});
const mapQuotes = (quotes) => {
  return quotes.map((quote) => ({ ...mapQuote(quote), id: quote.id }));
};
export const fetchQuoteOfDay = () => {
  return axios
    .get(`${API_BASE_URL}/qotd`)
    .then((res) => res.data)
    .then((data) => mapQuote(data.quote));
};
export const searchQuotes = (text, page, filter) => {
  let request = null;
  if (filter === "keyword")
    request = `${API_BASE_URL}/quotes/?filter=${text}&page=${page}`;
  else request = `${API_BASE_URL}/quotes/?filter=${text}&type=tag&page=${page}`;
  return axios
    .get(request, requestConfig)
    .then((res) => res.data)
    .then((data) => mapQuotes(data.quotes));
};
