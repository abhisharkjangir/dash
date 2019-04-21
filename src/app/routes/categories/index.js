import { connect } from "react-redux";
import Categories from "./categories";
import {} from "./categoriesActions";
const mapStateToProps = state => {
  return { ...state.categories };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
