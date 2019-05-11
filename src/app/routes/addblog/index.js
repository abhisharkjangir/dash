import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import AddBlogs from "./addblog";
import { addBlog, updateFormData, fetchBlog } from "./addBlogActions";
import { makeSelectFormData, makeSelectIsAddingBlog } from "./addBlogSelectors";
import { makeSelectCategories } from "../categories/categoriesSelectors";

const mapStateToProps = createStructuredSelector({
  formData: makeSelectFormData,
  categories: makeSelectCategories,
  isAdding : makeSelectIsAddingBlog
});

const mapDispatchToProps = dispatch => ({
  addBlog: (data, args) => dispatch(addBlog(data, args)),
  updateFormData: data => dispatch(updateFormData(data)),
  fetchBlog : data => dispatch(fetchBlog(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBlogs);
