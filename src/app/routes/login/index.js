import { connect } from "react-redux";
import Login from "./login";
import { login } from "./loginActions";

const mapStateToProps = state => {
  return { ...state.login };
};

const mapDispatchToProps = dispatch => {
  return {
    login: data => dispatch(login(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
