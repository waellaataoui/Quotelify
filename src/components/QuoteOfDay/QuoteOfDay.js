import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./QuoteOfDay.scss";

import React from "react";
import Loader from "react-loader-spinner";
import { connect } from "react-redux";
import { addFavourite } from "src/state/actions/favouriteQuotesActions";
import { fechQuoteOfDay } from "src/state/actions/qot";

const QuoteOfDay = (props) => {
  return (
    <React.Fragment>
      <Loader
        type="Hearts"
        height={200}
        width={200}
        color={"#e688a1"}
        visible={props.loading}
      />
      {!props.loading && (
        <div className="qotd-card">
          <div className="qotd-card__body">
            <i className="fas fa-quote-left"></i> {props.qod.body}{" "}
            <i className="fas fa-quote-right"></i>
          </div>
          <div className="qotd-card__author"> -{props.qod.author}</div>
          <div className="qotd-card__actions">
            <i
              className="fas fa-sync-alt"
              onClick={() => {
                props.fechQuoteOfDay();
              }}
            ></i>
            <i
              className="far fa-heart"
              onClick={() => {
                if (!props.isLogged) {
                  props.history.push("/login");
                } else props.addToFavourite(props.qod);
              }}
            ></i>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  qod: state.qotd.qod,
  loading: state.qotd.loading,
  isLogged: !!state.auth.uid
});
const mapDispatchToProps = (dispatch) => ({
  addToFavourite: (quote) => dispatch(addFavourite(quote)),
  fechQuoteOfDay: () => dispatch(fechQuoteOfDay())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QuoteOfDay);
