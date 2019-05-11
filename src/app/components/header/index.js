import { connect } from "react-redux";
import Header from "./header";
import { setAppData, logout } from "../../appActions";
import { createStructuredSelector } from "reselect";
import { makeSelectSidebar } from "../../appSelectors";

const mapStateToProps = createStructuredSelector({
  sidebar: makeSelectSidebar()
});

const mapDispatchToProps = dispatch => ({
  setAppData: data => dispatch(setAppData(data)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
