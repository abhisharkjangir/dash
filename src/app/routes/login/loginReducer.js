import { SET_DATA, SET_LOGGING_IN } from './loginConstants';

const initialState = {
  isLoggingIn: false,
};

const reducer = (state = initialState, action ) => {
  switch(action.type) {
    case SET_LOGGING_IN:
      return { isLoggingIn : action.value}
    case SET_DATA:
      return {...state, ...action.data, isLoggingIn: false};
    default:
      return state;
  }
}

export default reducer;
