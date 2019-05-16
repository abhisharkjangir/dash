import {
  ADD_BLOG,
  ADDING_BLOG,
  ADD_BLOG_SUCCESS,
  ADD_BLOG_ERROR,
  UPDATE_FORM_DATA,
  FETCHING_BLOG,
  FETCH_BLOG_SUCCESS,
  FETCH_BLOG_ERROR,
  FETCH_BLOG
} from "./addBlogConstants";

export const updateFormData = data => ({ type: UPDATE_FORM_DATA, data });

// Add/Update Blog
export const addBlog = (data, args) => ({ type: ADD_BLOG, data, args });
export const addingBlog = () => ({ type: ADDING_BLOG });
export const addBlogSuccess = data => ({ type: ADD_BLOG_SUCCESS, data });
export const addBlogError = data => ({ type: ADD_BLOG_ERROR, data });

// Fetch Blog Detail
export const fetchBlog = data => ({ type: FETCH_BLOG, data });
export const fetchingBlog = () => ({ type: FETCHING_BLOG });
export const fetchBlogSuccess = data => ({ type: FETCH_BLOG_SUCCESS, data });
export const fetchBlogError = data => ({ type: FETCH_BLOG_ERROR, data });
