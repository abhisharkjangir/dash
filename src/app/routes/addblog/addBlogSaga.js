import { call, put, takeLatest } from "redux-saga/effects";
import ApiService from "../../utils/services";
import {
  addingBlog,
  addBlogSuccess,
  addBlogError,
  fetchingBlog,
  fetchBlogSuccess,
  fetchBlogError
} from "./addBlogActions";
import { ADD_BLOG, FETCH_BLOG } from "./addBlogConstants";
import {
  showLoader,
  hideLoader
} from "../../components/common/loader/loaderActions";

// Add New Blog/Update Blog
function* addBlog(payload) {
  try {
    const {
      args: { history, isEdit }
    } = payload;
    yield put(addingBlog());
    yield put(showLoader("Please wait!"));
    const {
      data: { data, success, message }
    } = yield call(ApiService, {
      method: isEdit ? "PUT" : "POST",
      url: isEdit ? "updateBlog" : "addBlog",
      data: payload.data
    });
    if (success) {
      yield put(addBlogSuccess(data));
      yield put(hideLoader());
      return history.push("/blogs");
    } else {
      yield put(hideLoader());
      return yield put(addBlogError(message));
    }
  } catch (err) {
    yield put(hideLoader());
    return yield put(addBlogError(err));
  }
}

// Fetch Blog Detail
function* fetchBlogDetail(payload) {
  try {
    yield put(fetchingBlog());
    const {
      data: { data, success, message }
    } = yield call(ApiService, {
      method: "GET",
      url: "blogDetails",
      appendUrl: `/${payload.data}`
    });
    if (success) {
      return yield put(fetchBlogSuccess(data));
    } else {
      return yield put(fetchBlogError(message));
    }
  } catch (err) {
    return yield put(fetchBlogError(err));
  }
}

export function* addBlogSaga() {
  yield takeLatest(ADD_BLOG, addBlog);
  yield takeLatest(FETCH_BLOG, fetchBlogDetail);
}

export default addBlogSaga;
