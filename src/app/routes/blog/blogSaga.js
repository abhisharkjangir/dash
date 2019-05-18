import { call, put, takeLatest } from "redux-saga/effects";
import ApiService from "../../utils/services";

import {
  showLoader,
  hideLoader
} from "../../components/common/loader/loaderActions";
import { FETCH_BLOG } from "./blogConstants";
import { fetchingBlogs } from "../blogs/blogsActions";
import { fetchBlogSuccess, fetchBlogError } from "./blogActions";

// Fetch Blog Detail
function* fetchBlogDetail(payload) {
  try {
    yield put(fetchingBlogs());
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

export function* blogSaga() {
  yield takeLatest(FETCH_BLOG, fetchBlogDetail);
}

export default blogSaga;
