import { call, put, takeLatest } from "redux-saga/effects";
import {
  loggingOut,
  logoutSuccess,
  logoutError
} from "./appActions";
import ApiService from "./utils/services";
import { LOGOUT } from "./appConstants";
import { showLoader, hideLoader } from "./components/common/loader/loaderActions";
import { toast } from "react-toastify";
import { SOMETHING_WRONG } from "./constants/messages";
import { setLocalStorage } from "./utils/common";


function* logout(payload) {
  try {
    yield put(showLoader('Logging out...Please wait!'))
    yield put(loggingOut());
    const { data:{success, message} } = yield call(ApiService, {
      method: "GET",
      url: "logout"
    });

    if (success) {
      setLocalStorage("isLoggedIn", false);
      setLocalStorage("user", null);
      yield put(hideLoader());
      return yield put(logoutSuccess());
    } else {
      yield put(hideLoader());
      return yield put(logoutError(message));
    }
  } catch (error) {
    yield put(hideLoader());
    toast.error(SOMETHING_WRONG);
    return yield put(logoutError(error));
  }
}

export function* appSaga() {
  yield takeLatest(LOGOUT, logout);
}

export default appSaga;
