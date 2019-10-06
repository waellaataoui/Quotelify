import createHistory from "history/createBrowserHistory";
import React from "react";
import { Route, Router, Switch } from "react-router-dom";
import Header from "src/components/Header";
import SearchPage from "src/components/pages/SearchPage";
import FavPage from "../components/pages/FavPage";
import LoginPage from "../components/pages/LoginPage";
import NotFoundPage from "../components/pages/NotFoundPage";
import QuoteOfDayPage from "../components/pages/QuoteOfDayPage";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={QuoteOfDayPage} exact={true} />
        <PublicRoute path="/login" component={LoginPage} />
        <Route path="/search" component={SearchPage} />
        <PrivateRoute path="/fav" component={FavPage} />

        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
