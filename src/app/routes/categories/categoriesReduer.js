import {
  FETCHING_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  ADDING_CATEGORY,
  DELETEING_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS
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
    case ADDING_CATEGORY:
      return state.set("isAdding", true);
    case ADD_CATEGORY_SUCCESS:
      let cats = state.get("data").concat([action.data]);
      return state.set("isAdding", false).set("data", cats);
    case DELETEING_CATEGORY:
      return state.set("isDeleting", true);
    case DELETE_CATEGORY_SUCCESS:
      let restCats = state.get("data").filter(cat => cat._id !== action.data);
      return state.set("isAdding", false).set("data", restCats);
    default:
      return state;
  }
};

export default CategoriesReducer;
