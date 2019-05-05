import { connect } from "react-redux";
import Loader from "./loader";
const mapStateToProps = state => ({ loader: state.app.loader });

export default connect(
  mapStateToProps,
  null
)(Loader);
