import { connect } from "react-redux";
import Blogs from "./blogs";
import {
  fetchBlogs,
  updateFilters,
  deleteBlog
} from "../blogs/blogsActions";

const mapStateToProps = state => ({ ...state.blogs, ...state.app });

const mapDispatchToProps = dispatch => ({
  fetchBlogs: (payload) => dispatch(fetchBlogs(payload)),
  deleteBlog: (payload) => dispatch(deleteBlog(payload)),
  updateFilters: filters => dispatch(updateFilters(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blogs);
