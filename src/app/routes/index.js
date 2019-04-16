import React from "react";
import { Route, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import AuthenticatedRoute from "../components/authenticated-route";
import UnauthenticatedRoute from "../components/unauthenticated-route";

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
    <AuthenticatedRoute exact path="/" component={Home} />
    <UnauthenticatedRoute exact path="/signup" component={Signup} />
    <UnauthenticatedRoute exact path="/login" component={Login} />
    <UnauthenticatedRoute exact path="/forgotpassword" component={ForgotPassword} />
    <Route component={NotFound} />
  </Switch>
);
