import { connect } from "react-redux";
import Blogs from "./blogs";
import {
  fetchBlogs,
  updateFilters
} from "../blogs/blogsActions";

const mapStateToProps = state => ({ ...state.blogs, ...state.app });

const mapDispatchToProps = dispatch => ({
  fetchBlogs: (payload) => dispatch(fetchBlogs(payload)),
  updateFilters: filters => dispatch(updateFilters(filters))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blogs);
