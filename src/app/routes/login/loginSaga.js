import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN } from "./loginConstants";
import { loginError, loggingIn, loginSuccess } from "./loginActions";
import ApiService from "../../utils/services";
import { setAppData, fetchCategories } from "../../appActions";
import { setLocalStorage } from "../../utils/common";

function* login(payload) {
  try {
    yield put(loggingIn(true));

    const { response } = yield call(ApiService, {
      method: "POST",
      url: "login",
      data: payload.data
    });

    if (response.data.success) {
      const data = response.data.data;

      setLocalStorage("isLoggedIn", true);
      setLocalStorage("user", data);
      yield put(setAppData({ ...data, isLoggedIn: true }));
      yield put(loginSuccess(data));
      return yield put(fetchCategories());
    } else {
      return yield put(loginError(response.data.message));
    }
  } catch (error) {
    return yield put(loginError(error));
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

export default loginSaga;
