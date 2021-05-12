
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/vendor/nucleo/css/nucleo.css";
import "assets/vendor/font-awesome/css/font-awesome.min.css";
import "assets/scss/argon-design-system-react.scss?v1.1.0";

import Portfolio from "views/examples/Portfolio.js";
import Profile from "views/examples/Profile.js";
import Page404 from "views/examples/Page404";


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        path="/portfolio"
        exact
        render={props => <Portfolio {...props} />}
      />
      <Route
        path="/"
        exact
        render={props => <Profile {...props} />}
      />
      {/* <Route path="/*" component={Page404}/>
      <Redirect to="/" /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
