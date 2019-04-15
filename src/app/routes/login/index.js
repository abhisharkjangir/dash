import React from "react";
import Page from "../../components/page";
import "./login.scss";

import Meta from "../../constants/meta";
import { LOGO } from "../../assets/imgs";
import Form from "../../components/common/form";
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import LinkButton from "../../components/common/linkButton";
import Separator from "../../components/common/separator";

const Login = () => (
  <Page {...Meta.login}>
    <div className="login-page">
      <div className="logo">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="login-form-box">
        <Form autoComplete="off">
          <Input
            id="username"
            type="text"
            name="username"
            value=""
            label="USERNAME"
          />
          <Input
            id="password"
            type="password"
            name="password"
            value=""
            label="PASSWORD"
          />
          <LinkButton
            to="/forgotpassword"
            label="Forgot Password?"
            className="d-block text-center"
          />
          <Button label="LOGIN" className="mt-3" />
        </Form>
        <Separator text="Don't have an account?"/>
        <LinkButton
            to="/signup"
            label="Create an Account"
            className="d-block text-center fs-14"
          />
      </div>
      <div className="login-footer">
        Made with <span role='img' aria-label='heart'>💖</span> by <a href="http://abhijangir.me">Abhishar Jangir.</a>
      </div>
    </div>
  </Page>
);

export default Login;
