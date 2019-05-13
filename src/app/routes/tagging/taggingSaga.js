import { call, put, takeLatest } from "redux-saga/effects";
import { FETCH_BLOGS } from "./taggingConstants";
import { fetchingBlogs, fetchBlogsSuccess, fetchBlogsError } from "./taggingActions";
import ApiService from "../../utils/services";

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


const taggingSaga = function* () {
  yield takeLatest(FETCH_BLOGS, fetchAllBlogs)
}

export default taggingSaga;
