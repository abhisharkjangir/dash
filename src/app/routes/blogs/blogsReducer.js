import {
  FETCHING_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  UPDATE_FILTERS,
  DELETING_BLOG,
  DELETE_BLOG_ERROR,
  DELETE_BLOG_SUCCESS
} from "./blogsConstants";

const initialState = {
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
};

const BlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BLOGS:
      return { ...state, isFetching: true };
    case DELETING_BLOG:
      return { ...state, isDeleting: true };
    case FETCH_BLOGS_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case DELETE_BLOG_SUCCESS:
      const data = {...state}.data.filter(blog => blog._id !== action.data);
      return { ...state, isFetching: false, data: data };
    case FETCH_BLOGS_ERROR:
    case DELETE_BLOG_ERROR:
      return { ...state, isFetching: false, isDeleting: false, error: action.err };
    case UPDATE_FILTERS:
      return Object.assign({}, state, {
        filters: { ...state.filters, ...action.filters }
      });
    default:
      return state;
  }
};

export default BlogsReducer;
