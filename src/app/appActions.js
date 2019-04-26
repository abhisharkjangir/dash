import {
  SET_DATA,
  FETCH_CATEGORIES,
  FETCHING_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR
} from "./appConstants";

// APP DATA
export const setAppData = data => ({ type: SET_DATA, data });

// CATEGORIES
export const fetchCategories = () => ({ type: FETCH_CATEGORIES });
export const fetchingCategories = () => ({ type: FETCHING_CATEGORIES });
export const fetchCategoriesSuccess = data => ({
  type: FETCH_CATEGORIES_SUCCESS,
  data
});
export const fetchCategoriesError = data => ({
  type: FETCH_CATEGORIES_ERROR,
  data
});
