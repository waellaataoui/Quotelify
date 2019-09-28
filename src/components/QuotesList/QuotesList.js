import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./QuotesList.scss";

import React, { useState } from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import QuoteItem from "src/components/QuoteItem";

const QuotesList = ({ faveQuotes, searchedQuotes, faves, loading }) => {
  let quotes = null;
  faves ? (quotes = faveQuotes) : (quotes = searchedQuotes);
  return (
    <div>
      <div className="centered">
        <Loader
          type="Hearts"
          height={200}
          width={200}
          color={"#e688a1"}
          visible={loading}
        />
      </div>
      <div className="grid">
        {quotes.map((quote) => (
          <QuoteItem key={quote.id} faves={faves} quote={quote}></QuoteItem>
        ))}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  faveQuotes: state.favouriteQuotes.favouriteQuotes,
  searchedQuotes: state.searchedQuotes.quotes,
  loading: state.favouriteQuotes.loading || state.searchedQuotes.loading
});
export default connect(mapStateToProps)(QuotesList);
