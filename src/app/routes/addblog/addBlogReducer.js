import { fromJS } from "immutable";
import {
  ADDING_BLOG,
  ADD_BLOG_SUCCESS,
  ADD_BLOG_ERROR,
  UPDATE_FORM_DATA
} from "./addBlogConstants";

const formData = {
  title: "",
  author: "",
  keywords: "",
  image: "",
  imageSrc: "",
  story: "",
  category: [],
  isPublished: 1,
  publishedBy: 0,
  isFeatured: 0,
  isTrending: 0,
  viewsCount: 0,
  sharedCount: 0,
  createdDate: new Date(),
  updatedDate: new Date(),
  publishedDate: new Date()
};

const initialState = fromJS({
  formData: formData,
  error: null,
  isAdding: false
});

const AddBlogReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case UPDATE_FORM_DATA:
      let formData = state.get("formData");
      let updatedFormData = formData.merge(data);
      return state.set("formData", updatedFormData);
    case ADDING_BLOG:
      return state.set("isAdding", true);
    case ADD_BLOG_SUCCESS:
      return state.merge(initialState);
    case ADD_BLOG_ERROR:
      return state.set("isAdding", false).set("error", data);
    default:
      return state;
  }
};

export default AddBlogReducer;
