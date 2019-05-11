import {
  FETCHING_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR
} from "./categoriesConstants";
import { fromJS } from "immutable";

const initialState = fromJS({
  isFetching: false,
  data: [],
  error: false
});

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CATEGORY:
      return state.set("isFetching", true);
    case FETCH_CATEGORY_SUCCESS:
      return state.set("isFetching", false).set("data", action.data);
    case FETCH_CATEGORY_ERROR:
      return state
        .set("isFetching", false)
        .set("data", [])
        .set("error", action.data);
    default:
      return state;
  }
};

export default CategoriesReducer;
