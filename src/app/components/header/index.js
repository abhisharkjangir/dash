import { connect } from 'react-redux';
import Header from './header';
import { setAppData } from '../../appActions';

const mapStateToProps = (state) => ({...state.app});

const mapDispatchToProps = (dispatch) => ({
  setAppData: (data) => dispatch(setAppData(data))
});

export default connect(mapStateToProps , mapDispatchToProps)(Header);

