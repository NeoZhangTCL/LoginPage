import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import LoginPanel_1 from "./layout/LoginPanel_1";
import LoginPanel_2 from "./layout/LoginPanel_2";
import AppPanel from "./layout/AppPanel";
import Layout from "./layout/Layout";
import UserName from "./layout/Components/UserName";

const app = document.getElementById('app');
ReactDOM.render(
    <Router history={hashHistory}>
      <Route path="/" component={LoginPanel_1} >
        <IndexRoute component={UserName} />
        <Route path="login2" component={LoginPanel_2} />
        <Route path="appPanel" component={AppPanel} />
      </Route>
    </Router>
  ,app);
