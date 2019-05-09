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
    const { data:{data, success, message} } = yield call(ApiService, {
      method: "GET",
      url: "categories"
    });

    if (success) {
      return yield put(fetchCategoriesSuccess(data));
    } else {
      return yield put(fetchCategoriesError(message));
    }
  } catch (error) {
    return yield put(fetchCategoriesError(error));
  }
}

export function* appSaga() {
  yield takeLatest(FETCH_CATEGORIES, fetchCategories);
}

export default appSaga;
