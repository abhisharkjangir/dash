import { fromJS } from "immutable";
import {
  FETCHING_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  SELECT_CATEGORY
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
      return state
        .set("isFetching", false)
        .set("data", [])
        .set("error", data);
    case SELECT_CATEGORY:
    return state.set("selectedCategory", data);
    default:
      return state;
  }
};

export default taggingReducer;
