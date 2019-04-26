import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchingCategories,
  fetchCategoriesSuccess,
  fetchCategoriesError
} from "./appActions";
import ApiService from "./utils/services";
import { FETCH_CATEGORIES } from "./appConstants";

function* fetchCategories(payload) {
  try {
    yield put(fetchingCategories());

    const { response } = yield call(ApiService, {
      method: "GET",
      url: "categories"
    });

    if (response.data.success) {
      const data = response.data.data;
      return yield put(fetchCategoriesSuccess(data));
    } else {
      return yield put(fetchCategoriesError(response.data.message));
    }
  } catch (error) {
    return yield put(fetchCategoriesError(error));
  }
}

export function* appSaga() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
}

export default appSaga;
