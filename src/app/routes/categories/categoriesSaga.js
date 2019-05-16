import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchingCategory,
  fetchCategorySuccess,
  fetchCategoryError,
  addingCategory,
  addCategorySuccess,
  addCategoryError,
  deletingCategory,
  deleteCategorySuccess,
  deleteCategoryError
} from "./categoriesActions";

import ApiService from "../../utils/services";
import { FETCH_CATEGORY, ADD_CATEGORY, DELETE_CATEGORY } from "./categoriesConstants";
import { toast } from "react-toastify";
import { SOMETHING_WRONG } from "../../constants/messages";

// Fetch All Categories from API
function* fetchCategoriesData(payload) {
  try {
    yield put(fetchingCategory());
    const {
      data: { data, success, message }
    } = yield call(ApiService, {
      method: "GET",
      url: "categories"
    });

    if (success) {
      return yield put(fetchCategorySuccess(data));
    } else {
      return yield put(fetchCategoryError(message));
    }
  } catch (err) {
    return yield put(fetchCategoryError(err));
  }
}

// Add New Category
function* addCategory(payload) {
  try {
    yield put(addingCategory());
    const {
      data: { data, success, message }
    } = yield call(ApiService, {
      method: "POST",
      url: "addCategory",
      data: payload.data,
    });

    if (success) {
      return yield put(addCategorySuccess({...data, ...payload.data}));
    } else {
      toast.error(message);
      return yield put(addCategoryError(message));
    }
  } catch (err) {
    toast.error(SOMETHING_WRONG);
    return yield put(addCategoryError(err));
  }
}

// Delete Category
function* deleteCategory(payload){
  try {
    yield put(deletingCategory());
    const {
      data: { success, message }
    } = yield call(ApiService, {
      method: "DELETE",
      url: "deleteCategory",
      appendUrl: `/${payload.data}`
    });

    if (success) {
      return yield put(deleteCategorySuccess(payload.data));
    } else {
      toast.error(message);
      return yield put(deleteCategoryError(message));
    }
  } catch (err) {
    toast.error(SOMETHING_WRONG);
    return yield put(deleteCategoryError(err));
  }
}

export function* CategoriesSaga() {
  yield takeLatest(FETCH_CATEGORY, fetchCategoriesData);
  yield takeLatest(ADD_CATEGORY, addCategory);
  yield takeLatest(DELETE_CATEGORY, deleteCategory);
}

export default CategoriesSaga;
