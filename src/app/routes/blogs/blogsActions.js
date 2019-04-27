import {
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  UPDATE_FILTERS,
  FETCHING_BLOGS,
  DELETE_BLOG,
  DELETING_BLOG,
  DELETE_BLOG_ERROR,
  DELETE_BLOG_SUCCESS
} from "./blogsConstants";

export const fetchBlogs = data => ({ type: FETCH_BLOGS, data });
export const fetchingBlogs = () => ({ type: FETCHING_BLOGS });
export const fetchBlogsSuccess = data => ({ type: FETCH_BLOGS_SUCCESS, data });
export const fetchBlogsError = err => ({ type: FETCH_BLOGS_ERROR, err });
export const updateFilters = filters => ({ type: UPDATE_FILTERS, filters });

export const deleteBlog = data => ({ type: DELETE_BLOG, data });
export const deletingBlog = () => ({ type: DELETING_BLOG });
export const deleteBlogError = data => ({ type: DELETE_BLOG_ERROR, data });
export const deleteBlogSuccess = data => ({ type: DELETE_BLOG_SUCCESS, data });
