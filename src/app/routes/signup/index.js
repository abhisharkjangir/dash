import React from "react";
import Page from "../../components/page";
import "./signup.scss";

import Meta from "../../constants/meta";
import { LOGO } from "../../assets/imgs";
import Form from "../../components/common/form";
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import LinkButton from "../../components/common/linkButton";
import Separator from '../../components/common/separator';

const Login = () => (
  <Page {...Meta.signup}>
    <div className="signup-page">
      <div className="logo">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="signup-form-box">
        <Form autoComplete="off">
          <Input
            id="name"
            type="text"
            name="name"
            value=""
            label="NAME"
          />
          <Input
            id="username"
            type="text"
            name="username"
            value=""
            label="USERNAME"
          />
          <Input
            id="email"
            type="email"
            name="email"
            value=""
            label="EMAIL"
          />
          <Input
            id="password"
            type="password"
            name="password"
            value=""
            label="PASSWORD"
          />
          <Input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value=""
            label="CONFIRM PASSWORD"
          />
          <Button label="CREATE ACCOUNT" className="" />
        </Form>
        <Separator text='Already have an account?'/>
        <LinkButton to='/login' label="Login Here" className="text-center mt-3 d-block fs-14" />
      </div>
      <div className="signup-footer">
        Made with <span role='img' aria-label='heart'>💖</span> by <a href="http://abhijangir.me">Abhishar Jangir.</a>
      </div>
    </div>
  </Page>
);

export default Login;
