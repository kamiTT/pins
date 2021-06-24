import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import HardEnamelPage from "views/HardEnamelPage/HardEnamelPage.js"
import SoftEnamelPage from "views/SoftEnamelPage/SoftEnamelPage.js"
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route path="/soft-collection" component={SoftEnamelPage}/>
      <Route path="/hard-collection" component={HardEnamelPage}/>
      <Route path="/profile-page" component={ProfilePage} />
      {/* <Route path="/login-page" component={LoginPage} /> */}
      {/* <Route path="/" component={Components} /> */}
    </Switch>
  </Router>,
  document.getElementById("root")
);
