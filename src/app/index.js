import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { setAppData, fetchCategories } from './appActions';
import App from './app';
import WithLocalStorage from './components/withLocalStorage';

const mapStateToProps = (state) => {
  return {...state.app};
}

const mapDispatchToProps = (dispatch) => {
  return {
    setAppData: (data) => dispatch(setAppData(data)),
    fetchCategories: () => dispatch(fetchCategories())
  };
}

export default WithLocalStorage(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));
