import { connect } from "react-redux";
import Blog from "./blog";
import { createStructuredSelector } from "reselect";
import { fetchBlog } from "./blogActions";
import { makeSelectBlogData, makeSelectIsFetchingBlog } from "./blogSelectors";

const mapStateToProps = createStructuredSelector({
  data: makeSelectBlogData,
  isFetching: makeSelectIsFetchingBlog
});

const mapDispatchToProps = dispatch => ({
  fetchBlog : (data) => dispatch(fetchBlog(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Blog);
