import {
  SET_DATA,
  LOGOUT,
  LOGGING_OUT,
  LOGOUT_SUCEESS,
  LOGOUT_ERROR
} from "./appConstants";

// APP DATA
export const setAppData = data => ({ type: SET_DATA, data });

// LOG OUT
export const logout = () => ({ type: LOGOUT });
export const loggingOut = () => ({ type: LOGGING_OUT });
export const logoutSuccess = () => ({ type: LOGOUT_SUCEESS });
export const logoutError = () => ({ type: LOGOUT_ERROR });
