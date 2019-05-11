import { LOGIN_SUCCESS, LOGIN_ERROR, LOGGING_IN } from "./loginConstants";
import { fromJS } from "immutable";

const initialState = fromJS({
  isLoggingIn: false
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return state.set('isLoggingIn', action.value);
    case LOGIN_SUCCESS:
    case LOGIN_ERROR:
      return state.set('isLoggingIn', false).merge(action.data);
    default:
      return state;
  }
};

export default reducer;
