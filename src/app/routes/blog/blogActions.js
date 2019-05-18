import { FETCH_BLOG, FETCH_BLOG_SUCCESS } from "./blogConstants";
import { FETCHING_BLOG, FETCH_BLOG_ERROR } from "../addblog/addBlogConstants";

// Fetch Blog Detail
export const fetchBlog = data => ({ type: FETCH_BLOG, data });
export const fetchingBlog = () => ({ type: FETCHING_BLOG });
export const fetchBlogSuccess = data => ({ type: FETCH_BLOG_SUCCESS, data });
export const fetchBlogError = data => ({ type: FETCH_BLOG_ERROR, data });
