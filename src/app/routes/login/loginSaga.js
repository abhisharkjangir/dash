import { call, put, takeLatest } from "redux-saga/effects";
import { LOGIN } from "./loginConstants";
import { loginError, loggingIn, loginSuccess } from "./loginActions";
import ApiService from "../../utils/services";
import { setAppData } from "../../appActions";
import { showLoader, hideLoader } from '../../components/common/loader/loaderActions';
import { setLocalStorage } from "../../utils/common";
import { toast } from "react-toastify";
import { fetchCategory } from "../categories/categoriesActions";

function* login(payload) {
  try {
    yield put(loggingIn(true));
    yield put(showLoader("Logging In...Please wait!"));
    const {
      data: { data, success, message }
    } = yield call(ApiService, {
      method: "POST",
      url: "login",
      data: payload.data
    });

    if (success) {
      setLocalStorage("isLoggedIn", true);
      setLocalStorage("user", data);
      yield put(setAppData({isLoggedIn: true }));
      yield put(loginSuccess());
      yield put(hideLoader());
      return yield put(fetchCategory());
    } else {
      yield put(hideLoader());
      toast.error(message);
      return yield put(loginError(message));
    }
  } catch (error) {
    yield put(hideLoader());
    return yield put(loginError(error));
  }
}

export function* loginSaga() {
  yield takeLatest(LOGIN, login);
}

export default loginSaga;
