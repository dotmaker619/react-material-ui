import React from 'react';
import Dashboard from "views/Dashboard/Dashboard.js";
import Order from "views/Order/Order.js";
import Customer from "views/Customer/Customer.js";
import Constructor from "views/Constructor/Constructor.js";
import Nomenclature from "views/Nomenclature/Nomenclature.js";
import ContactUs from "views/ContactUs/ContactUs.js";
import Profile from "views/Profile/Profile.js";
import ErrorPage from "views/Pages/ErrorPage.js";

import LoginPage from "views/Pages/LoginPage.js";
import PassResetPage from "views/Pages/PassReset.js";
import RegisterPage from "views/Pages/RegisterPage.js";


// @material-ui/icons
import DashboardIcon from "@material-ui/icons/Dashboard";
import DateRange from "@material-ui/icons/DateRange";
import GridOn from "@material-ui/icons/GridOn";
import Image from "@material-ui/icons/Image";
import Place from "@material-ui/icons/Place";
import Face from "@material-ui/icons/Face";
import Shop from "@material-ui/icons/Shop";
import Subject from "@material-ui/icons/Subject";
import Description from "@material-ui/icons/Description";
import AccountBox from "@material-ui/icons/AccountBox";
import ContactSupport from "@material-ui/icons/ContactSupport";
import Timeline from "@material-ui/icons/Timeline";
import WidgetsIcon from "@material-ui/icons/Widgets";
import { Text } from './utils/Language';

var dashRoutes = [
  {
    path: "/dashboard",
    name: <Text tid="dashboard" />,
    icon: DashboardIcon,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/order-page",
    name: <Text tid="orderlist" />,
    icon: Shop,
    component: Order,
    layout: "/admin"
  },
  {
    path: "/user",
    name: <Text tid="clientlist" />,
    icon: Face,
    component: Customer,
    layout: "/admin"
  },
  {
    path: "/constructor",
    name: <Text tid="constructor" />,
    icon: Subject,
    component: Constructor,
    layout: "/admin"
  },
  {
    path: "/nomenclature",
    name: <Text tid="Nomenclature catalog" />,
    icon: Description,
    component: Nomenclature,
    layout: "/admin"
  },
  {
    path: "/profile",
    name: <Text tid="userprofile" />,
    icon: AccountBox,
    component: Profile,
    layout: "/admin"
  },
  {
    path: "/support",
    name: <Text tid="support" />,
    icon: ContactSupport,
    component: ContactUs,
    layout: "/admin"
  },
  {
    collapse: true,
    name: <Text tid="pages" />,
    icon: Image,
    state: "pageCollapse",
    views: [
      {
        path: "/login-page",
        name: <Text tid="login" />,
        component: LoginPage,
        layout: "/auth"
      },
      {
        path: "/register-page",
        name: <Text tid="registerpage" />,
        component: RegisterPage,
        layout: "/auth"
      },
      {
        path: "/error-page",
        name: <Text tid="error-page" />,
        component: ErrorPage,
        layout: "/auth"
      },
      {
        path: "/passreset-page",
        name: <Text tid="resetPassword" />,
        component: PassResetPage,
        layout: "/auth"
      },
      
    ]
  },
];
export default dashRoutes;
