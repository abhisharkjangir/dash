import { connect } from "react-redux";
import AddBlogs from "./addblog";
import {
  addBlog,
  updateFormData
} from "./addBlogActions";

const mapStateToProps = state => ({ ...state.addBlog, ...state.app });

const mapDispatchToProps = dispatch => ({
  addBlog: (data) => dispatch(addBlog(data)),
  updateFormData: (data) => dispatch(updateFormData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBlogs);
