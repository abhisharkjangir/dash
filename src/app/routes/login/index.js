import { connect } from 'react-redux';
import Login from './login';
import { setLoginData, setLoggingIn } from './loginActions';
import { setAppData } from '../../appActions';
const mapStateToProps = (state) => {
  return {...state.login};
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLoggingIn: () => dispatch(setLoggingIn()),
    setLoginData: (data) => dispatch(setLoginData(data)),
    setAppData: (data) => dispatch(setAppData(data))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
