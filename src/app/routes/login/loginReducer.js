import { SET_DATA, SET_LOGGING_IN } from './loginConstants';

const initialState = {
  isLoggingIn: false,
  isLoggedIn: false
};

const reducer = (state = initialState, action ) => {
  switch(action.type) {
    case SET_LOGGING_IN:
      return { isLoggingIn : action.value, isLoggedIn: false }
    case SET_DATA:
      return {...state, ...action.data, isLoggedIn: true, isLoggingIn: false};
    default:
      return state;
  }
}

export default reducer;
