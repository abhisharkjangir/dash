import { combineReducers } from "redux-immutable";

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

// Categories Reducer
import { CATEGORIES_STATE_KEY } from "./app/routes/categories/categoriesConstants";
import CategoriesReducer from "./app/routes/categories/categoriesReduer";

// Add Blog Reducer
import { ADD_BLOG_STATE_KEY } from "./app/routes/addblog/addBlogConstants";
import AddBlogReducer from "./app/routes/addblog/addBlogReducer";

// Loader Reducer
import { LOADER_STATE_KEY } from "./app/components/common/loader/loaderConstants";
import loaderReducer from "./app/components/common/loader/loaderReducer";

// Tagging Reducer
import { TAGGING_STATE_KEY } from "./app/routes/tagging/taggingConstants";
import taggingReducer from "./app/routes/tagging/taggingReducer";

// Blog Reducer
import { BLOG_STATE_KEY } from "./app/routes/blog/blogConstants";
import BlogReducer from "./app/routes/blog/blogReducer";

// Combine All Reducers
export default combineReducers({
  [APP_STATE_KEY]: AppReducer,
  [LOADER_STATE_KEY]: loaderReducer,
  [HOME_STATE_KEY]: HomeReducer,
  [LOGIN_STATE_KEY]: LoginReducer,
  [BLOGS_STATE_KEY]: BlogsReducer,
  [CATEGORIES_STATE_KEY]: CategoriesReducer,
  [ADD_BLOG_STATE_KEY]:AddBlogReducer,
  [TAGGING_STATE_KEY] : taggingReducer,
  [BLOG_STATE_KEY] : BlogReducer
});
