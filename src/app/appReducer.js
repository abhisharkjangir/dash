import { SET_APP_DATA } from './appConstants';

const initialState = {
  isLoggedIn: false,
  sidebar: true,
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_APP_DATA:
    return {...state, ...action.data};
    default: return state;
  }
}

export default reducer;
