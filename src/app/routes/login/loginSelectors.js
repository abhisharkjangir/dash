import { LOGIN_STATE_KEY } from "./loginConstants";
import { createSelector } from "reselect";

export const loginState = state => state.get(LOGIN_STATE_KEY);

export const makeSelectLoggingIn = createSelector(
  loginState,
  state => state.get("isLoggingIn")
);
