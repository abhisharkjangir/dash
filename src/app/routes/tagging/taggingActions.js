import {
  FETCH_BLOGS,
  FETCHING_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  SELECT_CATEGORY,
  UPDATE_BLOG,
  UPDATING_BLOG,
  UPDATE_BLOG_SUCCESS,
  UPDATE_BLOG_ERROR
} from "./taggingConstants";

export const fetchBlogs = data => ({ type: FETCH_BLOGS, data });
export const fetchingBlogs = () => ({ type: FETCHING_BLOGS });
export const fetchBlogsSuccess = data => ({ type: FETCH_BLOGS_SUCCESS, data });
export const fetchBlogsError = data => ({ type: FETCH_BLOGS_ERROR, data });

export const selectCategory = data => ({ type: SELECT_CATEGORY, data });

export const updateBlog = (data, args) => ({ type: UPDATE_BLOG, data, args });
export const updatingBlog = data => ({ type: UPDATING_BLOG, data });
export const updateBlogSuccess = data => ({ type: UPDATE_BLOG_SUCCESS, data });
export const updateBlogError = data => ({ type: UPDATE_BLOG_ERROR, data });
