import { TAGGING_STATE_KEY } from "./taggingConstants";
import { createSelector } from "reselect";

export const taggingState = state => state.get(TAGGING_STATE_KEY);

export const makeSelectBlogs = createSelector(
  taggingState,
  state => state.get("data")
);
export const makeSelectSelectedCategory = createSelector(
  taggingState,
  state => state.get("selectedCategory")
);
