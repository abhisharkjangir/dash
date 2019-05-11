import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { createStructuredSelector } from "reselect";

import Sidebar from "./sidebar";
import { setAppData } from "../../appActions";
import { makeSelectSidebar } from '../../appSelectors';
const mapStateToProps = createStructuredSelector({
  sidebar: makeSelectSidebar()
})

const mapDispatchToProps = dispatch => ({
  setAppData: data => dispatch(setAppData(data))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Sidebar)
);
