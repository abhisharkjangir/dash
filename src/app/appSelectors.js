import { createSelector } from "reselect";
import { APP_STATE_KEY } from "./appConstants";

// Select App State
export const appState = state => state.get(APP_STATE_KEY);

// Select isLoggedIn
export const makeSelectIsLoggedIn = () =>
  createSelector(
    appState,
    appState => appState.get("isLoggedIn")
  );

// Select sidebar
export const makeSelectSidebar = () =>
  createSelector(
    appState,
    appState => appState.get("sidebar")
  );
