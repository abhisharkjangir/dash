import { SET_DATA, SET_LOGGING_IN } from "./loginConstants";

export const setLoggingIn = (value) => ({type: SET_LOGGING_IN, value });
export const setLoginData = (data) => ({type: SET_DATA, data });
