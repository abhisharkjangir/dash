import {
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
} from './blogsConstants';

const initialState = {
  isFetching: false,
  data: [],
  error : false,
};

const BlogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BLOGS:
      return {...state, isFetching: true};
    case FETCH_BLOGS_SUCCESS:
      return {...state, isFetching: false, data : action.data};
    case FETCH_BLOGS_ERROR:
      return {...state, isFetching: false, data : [], error: action.err};
    default: return state;
  }
}

export default BlogsReducer;
