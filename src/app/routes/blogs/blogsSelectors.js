import { createSelector } from "reselect";
import { BLOGS_STATE_KEY } from "./blogsConstants";

export const blogsState = state => state.get(BLOGS_STATE_KEY);

export const makeSelectBlogsData = createSelector(blogsState, state => state.get("data"));
export const makeSelectIsBlogsFetching = createSelector(blogsState, state => state.get("isFetching"));
export const makeSelectIsBlogsDeleting = createSelector(blogsState, state => state.get("isDeleting"));
export const makeSelectIsBlogsFilters = createSelector(blogsState, state => state.get("filters").toJS());
