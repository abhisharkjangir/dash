import {
  LOGIN_SUCCESS,
  LOGGING_IN,
  LOGIN,
  LOGIN_ERROR
} from "./loginConstants";

export const login = data => ({ type: LOGIN, data });
export const loggingIn = value => ({ type: LOGGING_IN, value });
export const loginSuccess = data => ({ type: LOGIN_SUCCESS, data });
export const loginError = data => ({ type: LOGIN_ERROR, data });
