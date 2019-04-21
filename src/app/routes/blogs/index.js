import { connect } from "react-redux";
import Blogs from "./blogs";
import {
  fetchBlogs,
  fetchBlogsSuccess,
  fetchBlogsError,
  updateFilters
} from "../blogs/blogsActions";

const mapStateToProps = state => ({ ...state.blogs });

const mapDispatchToProps = dispatch => ({
  fetchBlogs: () => dispatch(fetchBlogs()),
  fetchBlogsSuccess: data => dispatch(fetchBlogsSuccess(data)),
  fetchBlogsError: () => dispatch(fetchBlogsError()),
  updateFilters: filters => dispatch(updateFilters(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blogs);
