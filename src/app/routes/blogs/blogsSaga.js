import { call, put, takeLatest, takeEvery } from "redux-saga/effects";
import { FETCH_BLOGS, DELETE_BLOG } from "./blogsConstants";

import {
  fetchBlogsSuccess,
  fetchBlogsError,
  fetchingBlogs,
  deletingBlog,
  deleteBlogSuccess,
  deleteBlogError
} from "./blogsActions";

import ApiService from "../../utils/services";

// Fetch All Blogs from API
function* fetchBlogsData(payload) {
  try {
    yield put(fetchingBlogs());
    const {
      data: { data, success, message }
    } = yield call(ApiService, {
      method: "POST",
      url: "blogs",
      data: payload.data
    });

    if (success) {
      return yield put(fetchBlogsSuccess(data));
    } else {
      return yield put(fetchBlogsError(message));
    }
  } catch (err) {
    return yield put(fetchBlogsError(err));
  }
}

// DELETE Blog by blogId
function* deleteBlogById(payload) {
  try {
    yield put(deletingBlog());
    const {
      data: { success, message }
    } = yield call(ApiService, {
      method: "DELETE",
      url: "deleteBlog",
      appendUrl: `/${payload.data}`
    });

    if (success) {
      return yield put(deleteBlogSuccess(payload.data));
    } else {
      return yield put(deleteBlogError(message));
    }
  } catch (err) {
    return yield put(deleteBlogError(err));
  }
}

export function* blogsSaga() {
  yield takeLatest(FETCH_BLOGS, fetchBlogsData);
  yield takeEvery(DELETE_BLOG, deleteBlogById);
}

export default blogsSaga;
