import { connect } from 'react-redux';
import NotFound from './notfound';

const mapStateToProps = (state) => ({...state.app});

export default connect(mapStateToProps, null)(NotFound);

