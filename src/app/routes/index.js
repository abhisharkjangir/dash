import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";

const Home = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "./home"),
  loading: () => null
});

const Signup = Loadable({
  loader: () => import(/* webpackChunkName: "signup" */ "./signup"),
  loading: () => null
});

const Login = Loadable({
  loader: () => import(/* webpackChunkName: "login" */ "./login"),
  loading: () => null
});

const ForgotPassword = Loadable({
  loader: () => import(/* webpackChunkName: "forgetpassword" */ "./forgetpassword"),
  loading: () => null
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "notfound" */ "./notfound"),
  loading: () => null
});

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/forgotpassword" component={ForgotPassword} />
    <Route component={NotFound} />
  </Switch>
);
