import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { setAppData } from './appActions';
import App from './app';
import WithLocalStorage from './components/withLocalStorage';

const mapStateToProps = (state) => {
  return {...state.app};
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAppData: (data) => dispatch(setAppData(data))
  };
}

export default WithLocalStorage(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));
