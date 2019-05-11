import { fromJS } from "immutable";
import {
  FETCHING_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  UPDATE_FILTERS,
  DELETING_BLOG,
  DELETE_BLOG_ERROR,
  DELETE_BLOG_SUCCESS
} from "./blogsConstants";

const initialState = fromJS({
  isFetching: false,
  filters: {
    title: "",
    isTrending: "",
    isFeatured: "",
    offset: 0,
    limit: 10,
    category: [],
  },
  data: [],
  error: false,
  isDeleting: false,
});

const BlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BLOGS:
      return state.set('isFetching', true)
    case DELETING_BLOG:
    return state.set('isDeleting', true)
    case FETCH_BLOGS_SUCCESS:
      return state.set('isFetching',false).set('data',action.data)
    case DELETE_BLOG_SUCCESS:
      const data = state.get('data').filter(blog => blog._id !== action.data);
      return state.set("isFetching", false).set('data',data);
    case FETCH_BLOGS_ERROR:
    case DELETE_BLOG_ERROR:
      return state.set('isDeleting', false).set('error', action.err).set('isFetching', false)
    case UPDATE_FILTERS:
      return state.merge({filters: action.filters});
    default:
      return state;
  }
};

export default BlogsReducer;
