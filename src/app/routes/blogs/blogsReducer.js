import {
  FETCHING_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  UPDATE_FILTERS
} from "./blogsConstants";

const initialState = {
  isFetching: false,
  filters: {
    title: "",
    isTrending: "",
    isFeatured: "",
    category: "",
    offset: 0,
    limit: 10
  },
  data: [],
  error: false
};

const BlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_BLOGS:
      return { ...state, isFetching: true };
    case FETCH_BLOGS_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case FETCH_BLOGS_ERROR:
      return { ...state, isFetching: false, data: [], error: action.err };
    case UPDATE_FILTERS:
      return Object.assign({}, state, {
        filters: { ...state.filters, ...action.filters }
      });
    default:
      return state;
  }
};

export default BlogsReducer;
