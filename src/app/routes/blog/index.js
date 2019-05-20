import { connect } from "react-redux";
import Blog from "./blog";
import { createStructuredSelector } from "reselect";
import { fetchBlog, reset } from "./blogActions";
import { makeSelectBlogData, makeSelectIsFetchingBlog } from "./blogSelectors";
import { makeSelectCategories } from "../categories/categoriesSelectors";

const mapStateToProps = createStructuredSelector({
  data: makeSelectBlogData,
  isFetching: makeSelectIsFetchingBlog,
  categories : makeSelectCategories
});

const mapDispatchToProps = dispatch => ({
  fetchBlog: data => dispatch(fetchBlog(data)),
  reset: () => dispatch(reset())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
