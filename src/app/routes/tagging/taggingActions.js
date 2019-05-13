import {
  FETCH_BLOGS,
  FETCHING_BLOGS,
  FETCH_BLOGS_SUCCESS,
  FETCH_BLOGS_ERROR,
  SELECT_CATEGORY
} from "./taggingConstants";

export const fetchBlogs = data => ({ type: FETCH_BLOGS, data });
export const fetchingBlogs = () => ({ type: FETCHING_BLOGS });
export const fetchBlogsSuccess = data => ({ type: FETCH_BLOGS_SUCCESS, data });
export const fetchBlogsError = data => ({ type: FETCH_BLOGS_ERROR, data });

export const selectCategory = data => ({type : SELECT_CATEGORY, data});
