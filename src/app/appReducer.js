import { fromJS } from "immutable";

import {
  SET_DATA, LOGOUT_SUCEESS
} from "./appConstants";

const appInitialState = fromJS({
  isLoggedIn: false,
  sidebar: true,
});

export default  (state = appInitialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return state.merge(fromJS(action.data));
    case LOGOUT_SUCEESS:
      return state.merge(appInitialState);
    default:
      return state;
  }
};
