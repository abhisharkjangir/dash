import { combineReducers } from "redux";

// App Reducer
import { APP_STATE_KEY } from "./app/appConstants";
import AppReducer from "./app/appReducer";

// Home Reducer
import { HOME_STATE_KEY } from "./app/routes/home/HomeConstants";
import HomeReducer from "./app/routes/home/HomeReducer";

// Login Reducer
import { LOGIN_STATE_KEY } from "./app/routes/login/loginConstants";
import LoginReducer from "./app/routes/login/loginReducer";

// Blogs Reducer
import { BLOGS_STATE_KEY } from "./app/routes/blogs/blogsConstants";
import BlogsReducer from "./app/routes/blogs/blogsReducer";

export default combineReducers({
  [APP_STATE_KEY]: AppReducer,
  [HOME_STATE_KEY]: HomeReducer,
  [LOGIN_STATE_KEY]: LoginReducer,
  [BLOGS_STATE_KEY]: BlogsReducer,
});
