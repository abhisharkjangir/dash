import {
  FETCH_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  UPDATE_FILTERS
} from "./blogsConstants";

export const fetchBlogs = () => ({ type: FETCH_BLOGS });
export const fetchBlogsSuccess = data => ({ type: FETCH_BLOGS_SUCCESS, data });
export const fetchBlogsError = err => ({ type: FETCH_BLOGS_ERROR, err });
export const updateFilters = filters => ({ type: UPDATE_FILTERS, filters });
