/*!

=========================================================
* Material Dashboard PRO React - v1.9.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux';

import "assets/scss/material-dashboard-pro-react.scss?v=1.9.0";

import AuthLayout from "layouts/Auth.js";
import AdminLayout from "layouts/Admin.js";
import { LanguageProvider } from "utils/Language";
import * as storageService from 'services/storageService';
import {Signin} from 'redux/actions/auth';



const hist = createBrowserHistory();

const token = storageService.getStorage('token');
// const user = jwt_decode(token)
const user = storageService.getStorage('user');
if(token){
  store.dispatch(Signin(user))
}

ReactDOM.render(
  <LanguageProvider>
    <Provider store={store}>
      <Router history={hist}>
        <Switch>
          <Route path="/auth" component={AuthLayout} />
          <Route path="/admin" component={AdminLayout} />
          <Redirect from="/" to="/auth/login-page" />
        </Switch>
      </Router>
    </Provider>
  </LanguageProvider>,
  document.getElementById("root")
);
