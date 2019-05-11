import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { setAppData } from './appActions';
import App from './app';
import WithLocalStorage from './components/withLocalStorage';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLoggedIn, makeSelectSidebar } from './appSelectors';
import { fetchCategory } from './routes/categories/categoriesActions';

const mapStateToProps = createStructuredSelector({
  isLoggedIn: makeSelectIsLoggedIn(),
  sidebar: makeSelectSidebar()
});

const mapDispatchToProps = (dispatch) => {
  return {
    setAppData: (data) => dispatch(setAppData(data)),
    fetchCategories: () => dispatch(fetchCategory())
  };
}

export default WithLocalStorage(withRouter(connect(mapStateToProps, mapDispatchToProps)(App)));
