import "./SearchForm.scss";

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { searchQuotesAction } from "src/state/actions/searchActions";

const SearchForm = ({ searchQuotes }) => {
  const [page, setpage] = useState(null);
  const [text, setText] = useState("");
  useEffect(() => {
    if (page && !text && page === 1) {
      return;
    } else if (page) {
      searchQuotes(text, page);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchQuotes]);
  return (
    <div className="form-container">
      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          setpage(1);
          searchQuotes(text, page);
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
        <button className="form__button">Go</button>
      </form>
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
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  searchQuotes: (text, page) => dispatch(searchQuotesAction(text, page))
});

export default connect(
  undefined,
  mapDispatchToProps
)(SearchForm);
