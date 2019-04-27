import { connect } from "react-redux";
import Categories from "./categories";
import { fetchCategory } from "./categoriesActions";
const mapStateToProps = state => ({ ...state.categories });


const mapDispatchToProps = dispatch => ({
  fetchCategory: (data) => dispatch(fetchCategory(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
