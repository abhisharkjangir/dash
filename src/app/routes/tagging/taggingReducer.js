import { fromJS } from "immutable";
import {
  FETCHING_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  SELECT_CATEGORY,
  UPDATING_BLOG,
  UPDATE_BLOG_ERROR,
  UPDATE_BLOG_SUCCESS
} from "./taggingConstants";

const initialState = fromJS({
  selectedCategory: null,
  isFetching: false,
  data: [],
  error: null
});

const taggingReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case FETCHING_BLOGS:
      return state.set("isFetching", true);
    case FETCH_BLOGS_SUCCESS:
      return state.set("isFetching", false).set("data", data);
    case FETCH_BLOGS_ERROR:
    case UPDATE_BLOG_ERROR:
      return state
        .set("isFetching", false)
        .set("isUpdating", true)
        .set("error", data);
    case SELECT_CATEGORY:
      return state.set("selectedCategory", data);
    case UPDATING_BLOG:
      return state.set("isUpdating", true);
    case UPDATE_BLOG_SUCCESS:
      let blogs = state
        .get("data")
        .map(blog => (blog._id === data._id ? data : blog));
      return state.set("isUpdating", false).set("data", blogs);
    default:
      return state;
  }
};

export default taggingReducer;
