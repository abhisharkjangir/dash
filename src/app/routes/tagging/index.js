import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Tagging from "./tagging";
import { makeSelectCategories } from "../categories/categoriesSelectors";
import { fetchBlogs, selectCategory } from "./taggingActions";
import { makeSelectBlogs, makeSelectSelectedCategory } from "./taggingSelectors";

const mapStateToProps = createStructuredSelector({
  categories: makeSelectCategories,
  blogs: makeSelectBlogs,
  selectedCategory : makeSelectSelectedCategory,
});

const mapDispatchToProps = dispatch => ({
  fetchBlogs: data => dispatch(fetchBlogs(data)),
  selectCategory: data =>dispatch(selectCategory(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tagging);
