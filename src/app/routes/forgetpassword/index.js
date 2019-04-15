import React from "react";
import Page from "../../components/page";
import "./forgetPassword.scss";

import Meta from "../../constants/meta";
import { LOGO } from "../../assets/imgs";
import Form from "../../components/common/form";
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import LinkButton from "../../components/common/linkButton";
import Separator from '../../components/common/separator';
const Login = () => (
  <Page {...Meta.forgetspassword}>
    <div className="forgetspassword-page">
      <div className="logo">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="forgetspassword-form-box">
        <Form autoComplete="off">
          <Input
            id="username"
            type="text"
            name="username"
            value=""
            label="USERNAME"
          />
          <Button label="SEND RESET LINK" className="" />
        </Form>
        <Separator text='Or'/>
        <LinkButton to='/login' label="Go back to login" className="text-center mt-3 d-block fs-14" />
      </div>
      <div className="forgetspassword-footer">
        Made with <span role='img' aria-label='heart'>💖</span> by <a href="http://abhijangir.me">Abhishar Jangir.</a>
      </div>
    </div>
  </Page>
);

export default Login;
