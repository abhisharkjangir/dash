import { call, put, takeLatest } from "redux-saga/effects";
import ApiService from "../../utils/services";
import { addingBlog, addBlogSuccess, addBlogError } from "./addBlogActions";
import { ADD_BLOG } from "./addBlogConstants";
import { showLoader, hideLoader } from "../../appActions";

// Fetch All Blogs from API
function* addBlog(payload) {
  try {
    const { history } = payload;
    yield put(addingBlog());
    yield put(showLoader("Please wait!"));
    const {
      data: { data, success, message }
    } = yield call(ApiService, {
      method: "POST",
      url: "addBlog",
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

export function* addBlogSaga() {
  yield takeLatest(ADD_BLOG, addBlog);
}

export default addBlogSaga;
