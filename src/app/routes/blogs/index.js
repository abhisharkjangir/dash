import { connect } from "react-redux";
import Blogs from "./blogs";
import { fetchBlogs, updateFilters, deleteBlog } from "../blogs/blogsActions";
import { createStructuredSelector } from "reselect";
import {
  makeSelectBlogsData,
  makeSelectIsBlogsFetching,
  makeSelectIsBlogsDeleting,
  makeSelectIsBlogsFilters
} from "./blogsSelectors";
import { makeSelectCategories } from "../categories/categoriesSelectors";
import { addCategory } from "../categories/categoriesActions";

const mapStateToProps = createStructuredSelector({
  data: makeSelectBlogsData,
  isFetching: makeSelectIsBlogsFetching,
  isDeleting: makeSelectIsBlogsDeleting,
  filters: makeSelectIsBlogsFilters,
  categories: makeSelectCategories
});

const mapDispatchToProps = dispatch => ({
  fetchBlogs: payload => dispatch(fetchBlogs(payload)),
  deleteBlog: payload => dispatch(deleteBlog(payload)),
  updateFilters: filters => dispatch(updateFilters(filters)),
  addCategory: data => dispatch(addCategory(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blogs);
