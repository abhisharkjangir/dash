import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Sidebar from "./sidebar";
import { setAppData } from "../../appActions";

const mapStateToProps = state => ({ ...state.app });

const mapDispatchToProps = dispatch => ({
  setAppData: data => dispatch(setAppData(data))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sidebar)
);
