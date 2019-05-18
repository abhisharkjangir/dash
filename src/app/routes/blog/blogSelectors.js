
import { createSelector } from "reselect";
import { BLOG_STATE_KEY } from "./blogConstants";

export const BlogState = state => state.get(BLOG_STATE_KEY);

export const makeSelectBlogData = createSelector(
  BlogState,
  state =>
    state.get("data").toJS()
);

export const makeSelectIsFetchingBlog = createSelector(
  BlogState,
  state =>
    state.get("isFetching")
);
