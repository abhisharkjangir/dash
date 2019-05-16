import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Categories from "./categories";
import {
  fetchCategory,
  addCategory,
  deleteCategory
} from "./categoriesActions";
import {
  makeSelectCategories,
  makeSelectCategoryisFetching
} from "./categoriesSelectors";

const mapStateToProps = createStructuredSelector({
  data: makeSelectCategories,
  isFetching: makeSelectCategoryisFetching,
});

const mapDispatchToProps = dispatch => ({
  fetchCategory: data => dispatch(fetchCategory(data)),
  addCategory: data => dispatch(addCategory(data)),
  deleteCategory: data => dispatch(deleteCategory(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
