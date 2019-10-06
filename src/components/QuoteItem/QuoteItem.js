import "./QuoteItem.scss";

import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import {
  addFavourite,
  deleteFavouriteAction
} from "src/state/actions/favouriteQuotesActions";

const QuoteItem = ({
  faves,
  quote,
  deleteFavourite,
  addFavourite,
  isLogged,
  history
}) => {
  const itemRef = React.createRef();
  const added = () => {
    itemRef.current.classList.add("added");
  };
  return (
    <div ref={itemRef} className="grid__item">
      <div className="grid__item__body">
        {" "}
        <i className="fas fa-quote-left"></i> {quote.body}{" "}
        <i className="fas fa-quote-right"></i>{" "}
      </div>
      <div className="grid__item__footer">
        <p> ― {quote.author}</p>

        {faves === true ? (
          <span
            onClick={() => deleteFavourite(quote.id)}
            className="fa-stack fa-lg "
          >
            <i className="fa fa-circle fa-stack-2x "></i>
            <i className="fa fa-trash fa-stack-1x fa-inverse"></i>
          </span>
        ) : (
          <span
            onClick={(e) => {
              if (!isLogged) {
                history.push("/login");
              } else {
                addFavourite(quote);

                added();
              }
            }}
            className="fa-stack fa-lg "
          >
            <i className="fa fa-circle fa-stack-2x "></i>
            <i className="fa fa-heart fa-stack-1x fa-inverse"></i>
          </span>
        )}
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  deleteFavourite: (id) => dispatch(deleteFavouriteAction(id)),
  addFavourite: (quote) => dispatch(addFavourite(quote))
});
const mapStateToProps = (state) => ({
  isLogged: !!state.auth.uid
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(QuoteItem)
);
