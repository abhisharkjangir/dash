import { call, put, takeLatest } from "redux-saga/effects";
import ApiService from "../../utils/services";
import { addingBlog, addBlogSuccess, addBlogError } from "./addBlogActions";
import { ADD_BLOG } from "./addBlogConstants";

// Fetch All Blogs from API
function* addBlog(payload, history) {
  try {
    yield put(addingBlog());
    const { response } = yield call(ApiService, {
      method: "POST",
      url: "addBlog",
      data: payload.data
    });

    if (response.data.success) {
      yield put(addBlogSuccess(response.data.data));
      return history.push("/blogs");
    } else {
      return yield put(addBlogError(response.data.message));
    }
  } catch (err) {
    return yield put(addBlogError(err));
  }
}

export function* addBlogSaga() {
  yield takeLatest(ADD_BLOG, addBlog);
}

export default addBlogSaga;
