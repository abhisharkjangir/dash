import { call, put, takeLatest } from "redux-saga/effects";

import {
  fetchingCategory,
  fetchCategorySuccess,
  fetchCategoryError
} from "./categoriesActions";

import ApiService from "../../utils/services";
import { FETCH_CATEGORY } from "./categoriesConstants";

// Fetch All Categories from API
function* fetchCategoriesData(payload) {
  try {
    yield put(fetchingCategory());
    const { response } = yield call(ApiService, {
      method: "GET",
      url: "categories"
    });

    if (response.data.success) {
      return yield put(fetchCategorySuccess(response.data.data));
    } else {
      return yield put(fetchCategoryError(response.data.message));
    }
  } catch (err) {
    return yield put(fetchCategoryError(err));
  }
}

export function* CategoriesSaga() {
  yield takeLatest(FETCH_CATEGORY, fetchCategoriesData);
}

export default CategoriesSaga;
