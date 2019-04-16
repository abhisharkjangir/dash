import { SET_DATA, SET_LOGGING_IN } from "./loginConstants";

export const setLoggingIn = () => ({type: SET_LOGGING_IN });
export const setLoginData = (data) => ({type: SET_DATA, data });
