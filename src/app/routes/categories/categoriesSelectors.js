import { createSelector } from "reselect";
import { CATEGORIES_STATE_KEY } from "./categoriesConstants";

export const categoriesState = state => state.get(CATEGORIES_STATE_KEY);

export const makeSelectCategories = createSelector(
  categoriesState,
  state => state.get("data")
);
export const makeSelectCategoryisFetching = createSelector(
  categoriesState,
  state => state.get("isFetching")
);
