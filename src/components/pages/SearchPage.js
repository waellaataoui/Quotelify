import React from "react";
import QuotesList from "src/components/QuotesList";
import SearchForm from "src/components/SearchForm";
const SearchPage = () => (
  <div className="container">
    <SearchForm></SearchForm>
    <QuotesList faves={false}></QuotesList>
  </div>
);

export default SearchPage;
