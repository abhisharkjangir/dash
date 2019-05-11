import { connect } from "react-redux";
import Login from "./login";
import { login } from "./loginActions";
import { createStructuredSelector } from "reselect";
import { makeSelectLoggingIn } from "./loginSelectors";

const mapStateToProps = createStructuredSelector({
  isLoggingIn : makeSelectLoggingIn
});

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
