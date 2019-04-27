import {
  ADD_BLOG,
  ADDING_BLOG,
  ADD_BLOG_SUCCESS,
  ADD_BLOG_ERROR
} from "./addBlogConstants";

export const addBlog = data => ({ type: ADD_BLOG, data });
export const addingBlog = () => ({ type: ADDING_BLOG });
export const addBlogSuccess = data => ({ type: ADD_BLOG_SUCCESS, data });
export const addBlogError = data => ({ type: ADD_BLOG_ERROR, data });
