import {
  FETCH_CATEGORY,
  FETCHING_CATEGORY,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_ERROR,
  ADD_CATEGORY,
  ADDING_CATEGORY,
  ADD_CATEGORY_SUCCESS,
  ADD_CATEGORY_ERROR,
  DELETE_CATEGORY,
  DELETEING_CATEGORY,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_ERROR
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

export const addCategory = data => ({ type: ADD_CATEGORY, data });
export const addingCategory = () => ({ type: ADDING_CATEGORY });
export const addCategorySuccess = data => ({
  type: ADD_CATEGORY_SUCCESS,
  data
});
export const addCategoryError = data => ({
  type: ADD_CATEGORY_ERROR,
  data
});

export const deleteCategory = data => ({ type: DELETE_CATEGORY, data });
export const deletingCategory = () => ({ type: DELETEING_CATEGORY });
export const deleteCategorySuccess = data => ({
  type: DELETE_CATEGORY_SUCCESS,
  data
});
export const deleteCategoryError = data => ({
  type: DELETE_CATEGORY_ERROR,
  data
});
