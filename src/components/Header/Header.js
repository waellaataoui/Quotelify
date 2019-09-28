import "./_header.scss";

import React from "react";
import { connect } from "react-redux";
import { Link, NavLink, withRouter } from "react-router-dom";
import { startLogout } from "../../state/actions/auth";

export const Header = (props) => (
  <header className="header">
    <div className="content-container">
      <div className="header__content">
        <Link className="header__title" to="/">
          <h1>quotelify</h1>
        </Link>
        <div className="header__links">
          <NavLink className="button button--link" exact to="/">
            QOD
          </NavLink>
          <NavLink className="button button--link" exact to="/search">
            Search
          </NavLink>
          <NavLink className="button button--link" exact to="/fav">
            FAV
          </NavLink>
          {props.uid ? (
            <button
              className="button button--link "
              onClick={() => {
                props
                  .startLogout()
                  .then(() => (window.location.href = "/login")); //hard redirect..
              }}
            >
              <i className="fas fa-sign-out-alt"></i> Logout
            </button>
          ) : (
            <Link className="button button--link " to="/login">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});
const mapStateToProps = (state) => ({
  uid: state.auth.uid
});
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
);
