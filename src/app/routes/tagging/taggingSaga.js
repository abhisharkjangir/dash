import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_BLOGS, UPDATE_BLOG } from "./taggingConstants";
import {
  fetchingBlogs,
  fetchBlogsSuccess,
  fetchBlogsError,
  updatingBlog,
  updateBlogSuccess,
  updateBlogError
} from "./taggingActions";
import ApiService from "../../utils/services";
import {
  showLoader,
  hideLoader
} from "../../components/common/loader/loaderActions";

function* fetchAllBlogs() {
  try {
    yield put(fetchingBlogs());
    const {
      data: { data, success, message }
    } = yield call(ApiService, {
      method: "GET",
      url: "allblogs"
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

// Update Blog
function* updateBlog(payload) {
  console.log(payload);

  try {
    yield put(updatingBlog());
    yield put(showLoader("Mapping...Please wait!"));
    const {
      data: { success, message }
    } = yield call(ApiService, {
      method: "PUT",
      url: "updateBlog",
      data: payload.data
    });
    if (success) {
      yield put(updateBlogSuccess(payload.args.blogData));
      yield put(hideLoader());
    } else {
      yield put(hideLoader());
      return yield put(updateBlogError(message));
    }
  } catch (err) {
    yield put(hideLoader());
    return yield put(updateBlogError(err));
  }
}

const taggingSaga = function*() {
  yield takeLatest(FETCH_BLOGS, fetchAllBlogs);
  yield takeLatest(UPDATE_BLOG, updateBlog);
};

export default taggingSaga;
