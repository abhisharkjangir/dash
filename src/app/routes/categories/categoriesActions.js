import {
  FETCH_CATEGORY,
  FETCHING_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR
} from "./categoriesConstants";

export const fetchCategory = data => ({ type: FETCH_CATEGORY, data });
export const fetchingCategory = () => ({ type: FETCHING_CATEGORY });
export const fetchCategorySuccess = data => ({
  type: FETCH_CATEGORY_SUCCESS,
  data
});
export const fetchCategoryError = data => ({
  type: FETCH_CATEGORY_ERROR,
  data
});
