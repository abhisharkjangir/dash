import { fromJS } from "immutable";

import { FETCHING_BLOG, FETCH_BLOG_SUCCESS, FETCH_BLOG_ERROR, RESET } from "./blogConstants";


const initialState = fromJS({
  data: {},
  isFetching: false,
  error : null
});


const BlogReducer = (state = initialState, { type, data }) => {
  switch (type) {
    case FETCHING_BLOG:
      return state.set("isFetching", true);
    case FETCH_BLOG_SUCCESS:
      return state.merge({"isFetching": false, "data": data});
    case FETCH_BLOG_ERROR:
      return state.set("isFetching", false).set("error", data);
    case RESET:
      return initialState;
    default:
      return state;
  }
};

export default BlogReducer;
