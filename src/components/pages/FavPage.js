import React from "react";
import QuotesList from "src/components/QuotesList";
const FavPage = () => (
  <div className="container">
    <QuotesList faves={true}></QuotesList>
  </div>
);

export default FavPage;
