import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN } from "./loginConstants";
import { loginError, loggingIn, loginSuccess } from "./loginActions";
import ApiService from "../../utils/services";
import {
  setAppData,
  fetchCategories,
  showLoader,
  hideLoader
} from "../../appActions";
import { setLocalStorage } from "../../utils/common";
import { toast } from "react-toastify";
import { SOMETHING_WRONG } from "../../constants/messages";

function* login(payload) {
  try {
    yield put(loggingIn(true));
    yield put(showLoader("Logging In...Please wait!"));
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
      yield put(hideLoader());
      return yield put(fetchCategories());
    } else {
      yield put(hideLoader());
      toast.error(response.data.message);
      return yield put(loginError(response.data.message));
    }
  } catch (error) {
    yield put(hideLoader());

    toast.error(SOMETHING_WRONG);
    return yield put(loginError(error));
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

export default loginSaga;
