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
  loader: () =>
    import(/* webpackChunkName: "forgetpassword" */ "./forgetpassword"),
  loading: () => null
});

const NotFound = Loadable({
  loader: () => import(/* webpackChunkName: "notfound" */ "./notfound"),
  loading: () => null
});

const Blogs = Loadable({
  loader: () => import(/* webpackChunkName: "blogs" */ "./blogs"),
  loading: () => null
});

const Categories = Loadable({
  loader: () => import(/* webpackChunkName: "categories" */ "./categories"),
  loading: () => null
});

const AddBlog = Loadable({
  loader: () => import(/* webpackChunkName: "addblog" */ "./addblog"),
  loading: () => null
});

const Tagging = Loadable({
  loader: () => import(/* webpackChunkName: "tagging" */ "./tagging"),
  loading: () => null
});

const Blog = Loadable({
  loader: () => import(/* webpackChunkName: "blog" */ "./blog"),
  loading: () => null
});

export default () => (
  <Switch>
    <AuthenticatedRoute exact path="/" component={Home} />
    <AuthenticatedRoute path="/categories" component={Categories} />
    <AuthenticatedRoute exact path="/blogs" component={Blogs} />
    <AuthenticatedRoute path="/blog/edit/:blogId" component={AddBlog} />
    <AuthenticatedRoute path="/blog/:blogId" component={Blog} />
    <AuthenticatedRoute exact path="/blogs/add" component={AddBlog} />
    <AuthenticatedRoute path="/tagging" component={Tagging} />
    <UnauthenticatedRoute path="/signup" component={Signup} />
    <UnauthenticatedRoute path="/login" component={Login} />
    <UnauthenticatedRoute path="/forgotpassword" component={ForgotPassword} />
    <Route component={NotFound} />
  </Switch>
);
