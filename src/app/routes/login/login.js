import React from "react";
import { toast } from "react-toastify";
import Page from "../../components/page";
import "./login.scss";
import Meta from "../../constants/meta";
import { LOGO } from "../../assets/imgs";
import Form from "../../components/common/form";
import Input from "../../components/common/input";
import Button from "../../components/common/button";
import LinkButton from "../../components/common/linkButton";
import Separator from "../../components/common/separator";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  updateForm = event => {
    let field = event.target.name;
    let value = event.target.value;
    this.setState({ [field]: value });
  };

  login = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { login } = this.props;
    if (username && password) {
      const payload = {
        email: username,
        password
      };
      login(payload);
    } else toast.error("All fields are required.");
  };

  render() {
    const { username, password } = this.state;
    const { isLoggingIn } = this.props;

    return (
      <Page {...Meta.login}>
        <div className="login-page">
          <div className="logo">
            <img src={LOGO} alt="logo" />
          </div>
          <div className="login-form-box">
            <Form autoComplete="on" onSubmit={this.login}>
              <Input
                id="username"
                type="text"
                name="username"
                value={username}
                onChange={this.updateForm}
                label="USERNAME"
              />
              <Input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={this.updateForm}
                label="PASSWORD"
              />
              <LinkButton
                to="/forgotpassword"
                label="Forgot Password?"
                className="d-block text-center"
              />
              <Button
                label="LOGIN"
                onClick={this.login}
                className="mt-3"
                disabled={isLoggingIn}
              />
            </Form>
            <Separator text="Don't have an account?" />
            <LinkButton
              to="/signup"
              label="Create an Account"
              className="d-block text-center fs-14"
            />
          </div>
          <div className="login-footer">
            Made with{" "}
            <span role="img" aria-label="heart">
              💖
            </span>{" "}
            by <a href="http://abhisharjangir.com">Abhishar Jangir.</a>
          </div>
        </div>
      </Page>
    );
  }
}

export default Login;
