import {
  SET_DATA,
  FETCHING_CATEGORIES,
  FETCH_CATEGORIES_SUCCESS,
  FETCH_CATEGORIES_ERROR,
  SHOW_LOADER,
  HIDE_LOADER
} from "./appConstants";

const initialState = {
  isLoggedIn: false,
  sidebar: false,
  loader: {
    value: false
  },
  categories: {
    data: [],
    isFetching: false,
    error: null
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, ...action.data };
    case FETCHING_CATEGORIES:
      return {
        ...state,
        categories: { ...state.categories, isFetching: true }
      };
    case FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        categories: {
          ...state.categories,
          isFetching: false,
          data: action.data
        }
      };

    case FETCH_CATEGORIES_ERROR:
      return {
        ...state,
        categories: {
          ...state.categories,
          isFetching: false,
          data: [],
          error: action.data
        }
      };

    case SHOW_LOADER:
      return {
        ...state,
        loader: {
          value: true,
          message: action.data
        }
      };

    case HIDE_LOADER:
      return {
        ...state,
        loader: {
          value: false,
          message: undefined
        }
      };

    default:
      return state;
  }
};

export default reducer;
