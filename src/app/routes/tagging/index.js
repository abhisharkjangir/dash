import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Tagging from "./tagging";
import { makeSelectCategories } from "../categories/categoriesSelectors";
// import {
//   fetchCategory,
//   addCategory,
//   deleteCategory
// } from "./categoriesActions";
// import {
//   makeSelectCategories,
//   makeSelectCategoryisFetching
// } from "./categoriesSelectors";

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories
  // data: makeSelectCategories,
  // isFetching: makeSelectCategoryisFetching
});

const mapDispatchToProps = dispatch => ({
  // fetchCategory: data => dispatch(fetchCategory(data)),
  // addCategory: data => dispatch(addCategory(data)),
  // deleteCategory: data => dispatch(deleteCategory(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tagging);
