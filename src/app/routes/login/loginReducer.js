import { LOGIN_SUCCESS, LOGIN_ERROR, LOGGING_IN } from "./loginConstants";

const initialState = {
  isLoggingIn: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGING_IN:
      return { isLoggingIn: action.value };
    case LOGIN_SUCCESS:
      return { ...state, ...action.data, isLoggingIn: false };
    case LOGIN_ERROR:
      return { ...state, ...action.data, isLoggingIn: false };
    default:
      return state;
  }
};

export default reducer;
