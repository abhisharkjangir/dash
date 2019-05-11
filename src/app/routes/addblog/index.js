import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import AddBlogs from "./addblog";
import { addBlog, updateFormData } from "./addBlogActions";
import { makeSelectFormData, makeSelectIsAddingBlog } from "./addBlogSelectors";
import { makeSelectCategories } from "../categories/categoriesSelectors";

const mapStateToProps = createStructuredSelector({
  formData: makeSelectFormData,
  categories: makeSelectCategories,
  isAdding : makeSelectIsAddingBlog
});

const mapDispatchToProps = dispatch => ({
  addBlog: (data, history) => dispatch(addBlog(data, history)),
  updateFormData: data => dispatch(updateFormData(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddBlogs);
