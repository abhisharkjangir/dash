import { connect } from "react-redux";
import AddBlogs from "./addblog";
import {
  addBlog
} from "./addBlogActions";

const mapStateToProps = state => ({ ...state.addblogs, ...state.app });

const mapDispatchToProps = dispatch => ({
  addBlog: (data) => dispatch(addBlog(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBlogs);
