import { connect } from "react-redux";
import Blogs from "./blogs";
import {
  fetchBlogs,
  updateFilters,
  deleteBlog
} from "../blogs/blogsActions";
import { createStructuredSelector } from "reselect";
import { makeSelectBlogsData, makeSelectIsBlogsFetching, makeSelectIsBlogsDeleting, makeSelectIsBlogsFilters } from "./blogsSelectors";
import { makeSelectCategories } from "../categories/categoriesSelectors";

const mapStateToProps = createStructuredSelector({
  data : makeSelectBlogsData,
  isFetching : makeSelectIsBlogsFetching,
  isDeleting : makeSelectIsBlogsDeleting,
  filters :makeSelectIsBlogsFilters,
  categories : makeSelectCategories
});

const mapDispatchToProps = dispatch => ({
  fetchBlogs: (payload) => dispatch(fetchBlogs(payload)),
  deleteBlog: (payload) => dispatch(deleteBlog(payload)),
  updateFilters: filters => dispatch(updateFilters(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blogs);
