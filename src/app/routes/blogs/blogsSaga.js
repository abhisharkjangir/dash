import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_BLOGS } from "./blogsConstants";

import {
  fetchBlogsSuccess,
  fetchBlogsError,
  fetchingBlogs
} from "./blogsActions";

import ApiService from "../../utils/services";

// Fetch All Blogs from API
function* fetchBlogsData(payload) {
  try {
    yield put(fetchingBlogs());
    const { response } = yield call(ApiService, {
      method: "POST",
      url: "blogs",
      data: payload.data
    });

    if (response.data.success) {
      return yield put(fetchBlogsSuccess(response.data.data));
    } else {
      return yield put(fetchBlogsError(response.data.message));
    }
  } catch (err) {
    return yield put(fetchBlogsError(err));
  }
}

export function* blogsSaga() {
  yield takeLatest(FETCH_BLOGS, fetchBlogsData);
}

export default blogsSaga;
