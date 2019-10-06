import "./SearchForm.scss";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchQuotesAction } from "src/state/actions/searchActions";

const SearchForm = ({ searchQuotes, showMore }) => {
  const [page, setpage] = useState(null);
  const [text, setText] = useState("");
  const [filter, setfilter] = useState("keyword");
  useEffect(() => {
    if (page && !text && page === 1) {
      return;
    } else if (page) {
      searchQuotes(text, page, filter);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchQuotes, filter]);
  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          setpage(1);
          searchQuotes(text, page, filter);
        }}
      >
        <input
          className="form__input"
          onChange={(e) => {
            setText(e.target.value);
          }}
          type="text"
          placeholder="explore amazing quotes"
        />
        <p>Find By:</p>
        <select onChange={(e) => setfilter(e.target.value)} name="By" id="">
          <option value="keyword">Keyword</option>
          <option value="tag">Tag</option>
        </select>
        <button className="form__button">Go</button>
      </form>
      {showMore && (
        <div className="arrows">
          {page > 1 && (
            <i
              onClick={() => {
                setpage(page - 1);
              }}
              className="fas fa-chevron-left"
            ></i>
          )}
          {page && (
            <i
              onClick={() => {
                setpage(page + 1);
              }}
              className="fas fa-chevron-right "
            ></i>
          )}
        </div>
      )}
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  searchQuotes: (text, page, filter) =>
    dispatch(searchQuotesAction(text, page, filter))
});
const mapStateToProps = (state) => ({
  showMore: state.searchedQuotes.quotes.length > 24
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
