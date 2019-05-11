import { ADD_BLOG_STATE_KEY } from "./addBlogConstants";
import { createSelector } from "reselect";

export const addBlogState = state => state.get(ADD_BLOG_STATE_KEY);

export const makeSelectFormData = createSelector(
  addBlogState,
  state =>
    state.get("formData").toJS()
);


export const makeSelectIsAddingBlog = createSelector(
  addBlogState,
  state =>
    state.get("isAdding")
);
