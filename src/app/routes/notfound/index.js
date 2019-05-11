import { connect } from 'react-redux';
import NotFound from './notfound';
import { createStructuredSelector } from 'reselect';
import { makeSelectIsLoggedIn } from '../../appSelectors';

const mapStateToProps = createStructuredSelector({
  isLoggedIn : makeSelectIsLoggedIn()
});

export default connect(mapStateToProps, null)(NotFound);

