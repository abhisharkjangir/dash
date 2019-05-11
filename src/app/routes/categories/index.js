import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import Categories from "./categories";
import { fetchCategory } from "./categoriesActions";
import {
  makeSelectCategories,
  makeSelectCategoryisFetching
} from "./categoriesSelectors";

const mapStateToProps = createStructuredSelector({
  data: makeSelectCategories,
  isFetching: makeSelectCategoryisFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCategory: data => dispatch(fetchCategory(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
