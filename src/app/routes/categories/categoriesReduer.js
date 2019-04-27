import {
  FETCHING_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
} from "./categoriesConstants";

const initialState = {
  isFetching: false,
  data: [],
  error: false
};

const CategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_CATEGORY:
      return { ...state, isFetching: true };
    case FETCH_CATEGORY_SUCCESS:
      return { ...state, isFetching: false, data: action.data };
    case FETCH_CATEGORY_ERROR:
      return { ...state, isFetching: false, data: [], error: action.err };
    default:
      return state;
  }
};

export default CategoriesReducer;
